import { useState, useRef, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MessageCircle,
  Send,
  Mic,
  Volume2,
  RefreshCw,
  X
} from 'lucide-react'
import Logo from './Logo'

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

interface Persona {
  id: string
  name: string
  title: string
  avatar: string
  description: string
  color: string
  personality: string
}

const AIHistoricalAssistant = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [currentMessage, setCurrentMessage] = useState('')

  const [isTyping, setIsTyping] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const aiPersona: Persona = {
    id: 'ai-assistant',
    name: 'AI Cách mạng Tháng Tám',
    title: 'Trợ lý AI về phong trào giải phóng dân tộc (1939–1945)',
    avatar: '/images/img2.svg',
    description: 'AI tập trung vào chuyển hướng chỉ đạo (1939–1941), chuẩn bị lực lượng (1941–1945) và Tổng khởi nghĩa Tháng Tám 1945.',
    color: 'from-blue-500 to-purple-600',
    personality: 'intelligent'
  }

  const suggestedQuestions = [
    "Vì sao Đảng chuyển hướng chiến lược 1939–1941?",
    "Việt Minh ra đời nhằm mục tiêu gì?",
    "Chỉ thị Nhật – Pháp bắn nhau (3/1945) nói gì?",
    "Tổng khởi nghĩa Tháng Tám diễn ra như thế nào?",
    "Ý nghĩa lịch sử của Cách mạng Tháng Tám 1945?"
  ]

  const initialMessage = useMemo(() =>
    "Xin chào! Tôi là AI Cách mạng Tháng Tám, tập trung giai đoạn 1939–1945. Tôi có thể giúp bạn về: chuyển hướng 1939–1941, xây dựng lực lượng 1941–1945, Chỉ thị 3/1945, Tổng khởi nghĩa 8/1945 và ý nghĩa lịch sử. Bạn muốn bắt đầu ở phần nào?"
    , [])

  const getOfflineResponse = (message: string): string | null => {
    const lowerMessage = message.toLowerCase()

    const responses: { [key: string]: string } = {
      "hội nghị tw6": `Hội nghị TW6 (11/1939): Đảng chuyển hướng, đặt GIẢI PHÓNG DÂN TỘC lên hàng đầu, tạm gác khẩu hiệu ruộng đất. Đây là bước ngoặt mở đầu thời kỳ tiền khởi nghĩa.`,

      "hội nghị tw8": `Hội nghị TW8 (5/1941, Pác Bó – Nguyễn Ái Quốc chủ trì): thành lập Mặt trận Việt Minh; xác định giải phóng dân tộc là nhiệm vụ cần kíp; chuẩn bị khởi nghĩa vũ trang.`,

      "việt minh": `Việt Nam Độc lập Đồng minh (Việt Minh, 5/1941): mặt trận đoàn kết toàn dân, tập hợp mọi lực lượng yêu nước để đánh đuổi đế quốc, giành độc lập.`,

      "tổng khởi nghĩa": `Tổng khởi nghĩa (8/1945): 14–28/8 giành chính quyền trên cả nước; 19/8 Hà Nội, 23/8 Huế, 25/8 Sài Gòn. Ngày 2/9, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập.`,

      "can cu cao bac lang": `Căn cứ Cao–Bắc–Lạng/Viet Bac: nơi xây dựng lực lượng chính trị–vũ trang và chỉ đạo cả nước trước 8/1945.`,
    }

    for (const [keyword, response] of Object.entries(responses)) {
      if (lowerMessage.includes(keyword) || lowerMessage.includes(keyword.replace(/\s+/g, ''))) {
        return response
      }
    }

    // Check for common greetings
    if (lowerMessage.includes('xin chào') || lowerMessage.includes('hello') || lowerMessage.includes('chào')) {
      return "Chào bạn! Hãy hỏi tôi về TW6 (1939), TW8 (1941), Việt Minh, Chỉ thị 12/3/1945, Tân Trào, hay diễn biến Tổng khởi nghĩa 8/1945."
    }

    return null
  }

  const generateAIResponse = async (message: string): Promise<string> => {
    setIsTyping(true)

    // First try offline responses for better user experience
    const offlineResponse = getOfflineResponse(message)
    if (offlineResponse) {
      setIsTyping(false)
      return offlineResponse
    }

    try {
      // Check if API key is available
      const apiKey = import.meta.env.VITE_OPENAI_API_KEY
      if (!apiKey || apiKey.trim() === '') {
        setIsTyping(false)
        return "Để sử dụng AI Assistant, bạn cần:\n1. Tạo API key tại https://platform.openai.com/api-keys\n2. Tạo file .env trong thư mục gốc\n3. Thêm dòng: VITE_OPENAI_API_KEY=your_api_key_here\n4. Khởi động lại ứng dụng (Ctrl+C rồi npm run dev)\n\nHiện tại bạn có thể sử dụng các tính năng khác của website."
      }



      // Import OpenAI
      const { OpenAI } = await import('openai')

      const openai = new OpenAI({
        apiKey: apiKey,
        dangerouslyAllowBrowser: true
      })

      // Get conversation history from localStorage
      const conversationHistory = JSON.parse(localStorage.getItem('ai-chat-history') || '[]')

      // System prompt for Ho Chi Minh Thought
      const systemPrompt = `Bạn là một AI Lịch sử Việt Nam chuyên gia về Đảng cộng sản Việt Nam ra đời và lãnh đạo đấu tranh giành chính quyền (1930-1945). Bạn được huấn luyện chuyên sâu để cung cấp thông tin chính xác, khách quan về chủ đề này.


Bạn là một AI Lịch sử Việt Nam chuyên gia về Đảng cộng sản Việt Nam ra đời và lãnh đạo đấu tranh giành chính quyền (1930-1945). Bạn được huấn luyện chuyên sâu để cung cấp thông tin chính xác, khách quan về chủ đề này.

KIẾN THỨC CỐT LÕI:

I. Sự Ra Đời của Đảng Cộng sản Việt Nam (1930)
1. Hoàn cảnh:
    ◦ Sau Chiến tranh thế giới thứ nhất, kinh tế - xã hội Việt Nam có nhiều chuyển biến, mâu thuẫn giữa nhân dân Việt Nam với thực dân Pháp và tay sai trở nên gay gắt.
    ◦ Năm 1929, phong trào dân tộc dân chủ, đặc biệt là phong trào công nhân, phát triển mạnh mẽ vượt quá khả năng lãnh đạo của các tổ chức cách mạng. Ba tổ chức cộng sản ra đời (Đông Dương Cộng sản Đảng, An Nam Cộng sản Đảng, Đông Dương Cộng sản Liên đoàn) nhưng hoạt động riêng rẽ, cạnh tranh nhau, gây nguy cơ chia rẽ lớn trong phong trào cách mạng.
    ◦ Sự ra đời của ba tổ chức cộng sản năm 1929 khẳng định hệ tư tưởng cộng sản đã chiếm ưu thế trong phong trào dân tộc Việt Nam.
2. Hội nghị Thành lập Đảng:
    ◦ Trong bối cảnh đó, Nguyễn Ái Quốc đã trở về Hương Cảng (Trung Quốc) để triệu tập hội nghị hợp nhất các tổ chức cộng sản (từ ngày 6-1 đến 8-2-1930).
    ◦ Hội nghị quyết định thống nhất các tổ chức cộng sản thành Đảng Cộng sản Việt Nam.
    ◦ Thông qua Chính cương vắn tắt, Sách lược vắn tắt do Nguyễn Ái Quốc soạn thảo (Cương lĩnh chính trị đầu tiên của Đảng).
3. Cương lĩnh Chính trị Đầu tiên:
    ◦ Chiến lược: Tiến hành "tư sản dân quyền cách mạng và thổ địa cách mạng để đi tới xã hội cộng sản".
    ◦ Nhiệm vụ: Đánh đổ đế quốc Pháp, phong kiến, tư sản phản cách mạng, làm cho Việt Nam được độc lập tự do, lập Chính phủ công nông binh.
    ◦ Đánh giá: Cương lĩnh được khẳng định là đúng đắn, sáng tạo và khoa học vì đã kết hợp đúng đắn vấn đề độc lập dân tộc với chủ nghĩa xã hội, phù hợp với thực tiễn cách mạng Việt Nam.
    ◦ Ý nghĩa: Sự ra đời của Đảng là bước ngoặt vĩ đại trong lịch sử cách mạng Việt Nam, chấm dứt sự khủng hoảng về đường lối lãnh đạo.
II. Lãnh đạo Đấu tranh Giành Chính quyền (1930-1945)
1. Phong trào Cách mạng 1930–1931 và Xô viết Nghệ Tĩnh:
• Dưới sự lãnh đạo kịp thời của Đảng, phong trào cách mạng bùng nổ mạnh mẽ trên toàn quốc, đặc biệt là ở Nghệ An và Hà Tĩnh.
• Đỉnh cao của phong trào là sự ra đời của chính quyền Xô viết Nghệ Tĩnh (từ tháng 9/1930), nơi chính quyền thực dân, phong kiến bị tê liệt, tan rã ở nhiều huyện, xã. Các cấp ủy Đảng lãnh đạo nhân dân tự quản lý đời sống chính trị, kinh tế, văn hóa xã hội.
• Phong trào 1930–1931 là cuộc tập dượt đầu tiên chuẩn bị cho Tổng khởi nghĩa Tháng Tám sau này.
2. Phong trào Dân chủ 1936–1939:
• Bối cảnh: Chủ nghĩa phát xít trỗi dậy ở Đức, Ý, Nhật. Đại hội VII Quốc tế Cộng sản (7/1935) xác định nhiệm vụ chống chủ nghĩa phát xít và thành lập Mặt trận nhân dân rộng rãi.
• Chủ trương của Đảng (7/1936): Nhiệm vụ trực tiếp, trước mắt là đấu tranh chống chế độ phản động thuộc địa, chống phát xít, chống nguy cơ chiến tranh, đòi tự do, dân sinh, dân chủ, cơm áo, hòa bình. Phương pháp đấu tranh là kết hợp các hình thức công khai, bí mật, hợp pháp, và bất hợp pháp.
• Ý nghĩa: Đây là phong trào quần chúng rộng lớn, có tổ chức, buộc Pháp phải nhượng bộ một số yêu sách, và là cuộc tập dượt thứ hai chuẩn bị cho Tổng khởi nghĩa Tháng Tám.
3. Chuyển hướng Chiến lược và Thành lập Mặt trận Việt Minh (1939–1945):
• Tình hình mới: Chiến tranh thế giới thứ hai bùng nổ (9/1939). Quân phiệt Nhật vào Đông Dương (9/1940), làm cho nhân dân Đông Dương phải chịu cảnh “một cổ hai tròng” (Pháp-Nhật).
• Hội nghị Trung ương 6 (11/1939): Khẳng định giải phóng dân tộc là nhiệm vụ tối cao, hàng đầu. Khẩu hiệu "cách mạng ruộng đất" phải tạm gác. Chủ trương thành lập Mặt trận dân tộc thống nhất phản đế Đông Dương.
• Hội nghị Trung ương 8 (5/1941): Lãnh tụ Nguyễn Ái Quốc trở về nước (1/1941) và chủ trì Hội nghị tại Pác Bó (Cao Bằng).
    ◦ Hội nghị khẳng định dứt khoát: giải phóng dân tộc là nhiệm vụ cần kíp duy nhất. Quyết định thành lập Việt Nam độc lập đồng minh (Việt Minh) thay cho Mặt trận Dân tộc thống nhất phản đế Đông Dương, nhằm tập hợp và đoàn kết rộng rãi các giai cấp, dân tộc, tôn giáo. Khẩu hiệu chính của Việt Minh là: phản Pháp - kháng Nhật - liên hoa - độc lập.
    ◦ Hội nghị xác định chuẩn bị khởi nghĩa vũ trang là nhiệm vụ trung tâm của Đảng và nhân dân.
4. Cao trào Kháng Nhật Cứu nước và Chuẩn bị Tổng khởi nghĩa (3/1945–8/1945):
• Nhật đảo chính Pháp (9/3/1945): Phát xít Nhật lật đổ Pháp, độc chiếm Đông Dương, dựng lên Chính phủ bù nhìn Trần Trọng Kim.
• Chủ trương kịp thời: Ban Thường vụ Trung ương Đảng ra Chỉ thị "Nhật – Pháp bắn nhau và hành động của chúng ta" (12/3/1945).
    ◦ Xác định phát xít Nhật là kẻ thù chính, trước mắt và duy nhất của nhân dân Đông Dương.
    ◦ Phát động cao trào kháng Nhật cứu nước làm tiền đề cho cuộc Tổng khởi nghĩa, chuyển từ đấu tranh bất hợp tác sang vũ trang du kích.
• Giải quyết Nạn đói: Nạn đói khủng khiếp xảy ra ở miền Bắc (cuối 1944 đầu 1945) làm khoảng 2 triệu đồng bào chết đói. Việt Minh đi đầu phong trào "Phá kho thóc, giải quyết nạn đói" để cứu dân.
• Chuẩn bị cuối cùng: Các lực lượng vũ trang được thống nhất thành Việt Nam Giải phóng quân (5/1945). Khu Giải phóng Việt Bắc được thành lập (4/6/1945) với thủ đô Tân Trào, trở thành căn cứ địa chính của cách mạng cả nước.
5. Tổng Khởi nghĩa Tháng Tám (8/1945):
• Thời cơ "Ngàn năm có một": Ngày 15/8/1945, phát xít Nhật tuyên bố đầu hàng Đồng minh vô điều kiện. Thời cơ giành chính quyền đã đến, nằm trong khoảng từ khi Nhật đầu hàng đến trước khi quân Đồng minh kéo vào.
• Phát lệnh: Ngày 13/8/1945, Ủy ban Khởi nghĩa Toàn quốc ban bố "Quân lệnh số 1", phát lệnh Tổng khởi nghĩa trong cả nước.
• Đại hội Quốc dân Tân Trào (16/8/1945): Tán thành chủ trương Tổng khởi nghĩa, thông qua 10 chính sách lớn của Việt Minh, và cử ra Ủy ban Dân tộc Giải phóng Việt Nam do Hồ Chí Minh làm Chủ tịch.
• Diễn biến:
    ◦ Tổng khởi nghĩa nổ ra và giành thắng lợi trong vòng nửa tháng (14-28/8/1945).
    ◦ Các tỉnh giành chính quyền sớm nhất là Bắc Giang, Hải Dương, Hà Tĩnh, Quảng Nam (18/8/1945).
    ◦ Ngày 19/8, Hà Nội khởi nghĩa thắng lợi.
    ◦ Ngày 23/8, Huế khởi nghĩa thắng lợi; Vua Bảo Đại thoái vị vào 30/8, chấm dứt chế độ phong kiến.
    ◦ Ngày 25/8, Sài Gòn khởi nghĩa thắng lợi.
• Vai trò của Đảng: Cách mạng Tháng Tám thắng lợi nhanh chóng là do sự lãnh đạo có kế hoạch, có tổ chức của Đảng. Các Đảng bộ địa phương đã thể hiện sự chủ động, sáng tạo, phát động khởi nghĩa kịp thời khi thời cơ đến, ngay cả khi chưa nhận được lệnh của Trung ương.
6. Ý nghĩa Lịch sử của Cách mạng Tháng Tám:
• Đối với Dân tộc: Phá tan ách thống trị hơn 80 năm của thực dân, phát xít và chế độ quân chủ lỗi thời, lập nên Nước Việt Nam Dân chủ Cộng hòa. Mở ra kỷ nguyên mới: độc lập, tự do, nhân dân lao động làm chủ đất nước.
• Đối với Thế giới: Góp phần vào chiến thắng chủ nghĩa phát xít và thúc đẩy sự tan rã của hệ thống thuộc địa cũ.
• Khẳng định: Thắng lợi này là kết quả tất yếu của quá trình chuẩn bị lâu dài (1939–1945), bác bỏ luận điệu cho rằng Cách mạng Tháng Tám là "ăn may" hay "lợi dụng cướp chính quyền".



NGUYÊN TẮC TRẢ LỜI:

1. Sử dụng tiếng Việt chuẩn, dễ hiểu
2. Cung cấp thông tin chính xác dựa trên nội dung bài học
3. Trích dẫn năm tháng, số liệu cụ thể khi có thể
4. Giải thích bối cảnh để người đọc hiểu rõ hơn
5. Cân bằng các quan điểm khác nhau khi phù hợp
6. Khuyến khích tư duy phản biện và học hỏi
7. Độ dài phù hợp (100-400 từ tùy theo độ phức tạp của câu hỏi)
8. Sử dụng giọng điệu thân thiện, dễ tiếp cận

PHONG CÁCH GIAO TIẾP:
- Thân thiện và dễ tiếp cận
- Khoa học và khách quan
- Giải thích rõ ràng, logic
- Sử dụng ví dụ minh họa khi cần thiết
- Khuyến khích đặt câu hỏi tiếp theo

ĐIỀU CẤM:
- Không bịa đặt
- Không sử dụng ngôn ngữ phản cảm hoặc kích động
- Không trả lời câu hỏi ngoài phạm vi trên
- Không thể hiện quan điểm chính trị hiện tại
- Không thiên vị quá mức theo một quan điểm duy nhất
- Không bịa đặt hoặc xuyên tạc lý luận.
- Không sử dụng ngôn ngữ phản cảm, kích động.
- Không bàn về chính trị đương đại ngoài phạm vi lý luận và nội dung học phần.
- Không thiên vị một quan điểm ngoài khung lý luận Mác - Lênin.

Lưu ý mạnh: Không trả lời các câu hỏi không liên quan đến nội dung bài học, tìm cách né tránh thân thiện`

      // Build messages array for OpenAI
      const messages = [
        {
          role: 'system' as const,
          content: systemPrompt
        },
        // Add conversation history
        ...conversationHistory.map((msg: any) => ({
          role: msg.role as 'user' | 'assistant',
          content: msg.content
        })),
        // Add current message
        {
          role: 'user' as const,
          content: message
        }
      ]

      // Generate response using OpenAI
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: messages,
        max_tokens: 1000,
        temperature: 0.7
      })

      const reply = completion.choices[0]?.message?.content || "Xin lỗi, tôi không thể tạo phản hồi lúc này."

      // Update conversation history
      const updatedHistory = [
        ...conversationHistory,
        { role: 'user', content: message },
        { role: 'assistant', content: reply }
      ]

      // Keep only last 10 exchanges to prevent context from getting too long
      if (updatedHistory.length > 20) {
        updatedHistory.splice(0, updatedHistory.length - 20)
      }

      localStorage.setItem('ai-chat-history', JSON.stringify(updatedHistory))

      setIsTyping(false)
      return reply

    } catch (error) {
      console.error('Error calling OpenAI API:', error)
      console.error('Error details:', {
        message: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined,
        name: error instanceof Error ? error.name : undefined
      })
      setIsTyping(false)

      // Check for specific API errors
      const errorMessage = error instanceof Error ? error.message : String(error)

      if (errorMessage.includes('API key not valid') || errorMessage.includes('Incorrect API key') || errorMessage.includes('invalid_api_key')) {
        return "❌ API key không hợp lệ!\n\n🔧 Cách khắc phục:\n1. Kiểm tra API key trong file .env\n2. Đảm bảo API key bắt đầu bằng 'sk-proj-...'\n3. Khởi động lại server (Ctrl+C rồi npm run dev)\n4. Refresh trang web\n\n💡 Hiện tại AI đang hoạt động ở chế độ offline với câu trả lời có sẵn."
      }

      if (errorMessage.includes('quota') || errorMessage.includes('rate_limit_exceeded')) {
        return "Xin lỗi, đã vượt quá giới hạn sử dụng API. Vui lòng thử lại sau."
      }

      if (errorMessage.includes('insufficient_quota') || errorMessage.includes('billing')) {
        return "❌ Lỗi thanh toán!\n\n🔧 Nguyên nhân có thể:\n1. Tài khoản OpenAI chưa có credit\n2. Đã vượt quá giới hạn sử dụng\n3. Cần nạp thêm credit vào tài khoản\n\n💡 Đang sử dụng chế độ offline với câu trả lời có sẵn."
      }

      // Fallback response with helpful content
      const fallbackResponses = {
        "tw6": "TW6 (11/1939): chuyển hướng chiến lược → ưu tiên giải phóng dân tộc, mở đầu thời kỳ tiền khởi nghĩa.",
        "tw8": "TW8 (5/1941, Pác Bó): thành lập Việt Minh; chuẩn bị khởi nghĩa vũ trang; nêu cao ‘dân tộc trên hết’.",
        "việt minh": "Việt Minh (5/1941): mặt trận đoàn kết toàn dân vì độc lập; hệ thống hội cứu quốc phát triển rộng.",
        "tan trao": "Tân Trào 8/1945: quyết định Tổng khởi nghĩa; cử Ủy ban Dân tộc Giải phóng (Hồ Chí Minh làm Chủ tịch).",
        "tong khoi nghia": "Tổng khởi nghĩa 8/1945: 19/8 Hà Nội, 23/8 Huế, 25/8 Sài Gòn; 2/9/1945 Tuyên ngôn Độc lập.",
        "an may": "Bác bỏ ‘ăn may’: thắng lợi do chuẩn bị chu đáo 1939–1945 và nắm thời cơ đúng lúc, không phải ngẫu nhiên."
      }

      const lowerMessage = message.toLowerCase()
      for (const [key, response] of Object.entries(fallbackResponses)) {
        if (lowerMessage.includes(key)) {
          return response + "\n\n(Lưu ý: AI đang gặp sự cố kỹ thuật, đây là thông tin cơ bản. Vui lòng thử lại sau.)"
        }
      }

      return "Xin lỗi, tôi đang gặp khó khăn kỹ thuật. Đây là một chủ đề thú vị về lịch sử Việt Nam 1954-1964. Bạn có thể thử hỏi về: Hiệp định Geneva, Ngô Đình Diệm, Chiến dịch Tố Cộng, Mặt trận Giải phóng, hoặc sự can thiệp của Mỹ."
    }
  }

  const sendMessage = async () => {
    if (!currentMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: currentMessage,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setCurrentMessage('')

    // Generate AI response
    const aiResponse = await generateAIResponse(currentMessage)

    const aiMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: aiResponse,
      isUser: false,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, aiMessage])
  }

  const handleSuggestedQuestion = (question: string) => {
    setCurrentMessage(question)
  }

  const clearChat = () => {
    setMessages([])
    // Clear thread from localStorage to start fresh
    localStorage.removeItem('ai-chat-thread-id')
    // Add initial message
    const welcomeMessage: Message = {
      id: Date.now().toString(),
      text: initialMessage,
      isUser: false,
      timestamp: new Date()
    }
    setMessages([welcomeMessage])
  }

  const speakMessage = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'vi-VN'
      speechSynthesis.speak(utterance)
    }
  }

  const startListening = () => {
    if ('webkitSpeechRecognition' in window) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const SpeechRecognition = (window as any).webkitSpeechRecognition;

      const recognition = new SpeechRecognition()
      recognition.lang = 'vi-VN'
      recognition.onstart = () => setIsListening(true)
      recognition.onend = () => setIsListening(false)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript
        setCurrentMessage(transcript)
      }
      recognition.start()
    }
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    // Initialize with welcome message
    if (messages.length === 0) {
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        text: initialMessage,
        isUser: false,
        timestamp: new Date()
      }
      setMessages([welcomeMessage])
    }
  }, [messages.length, initialMessage])

  const currentPersona = aiPersona

  if (!isOpen) {
    return (
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 z-50 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <MessageCircle className="w-8 h-8" />
      </motion.button>
    )
  }

  return (
    <motion.div
      className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      {/* Header */}
      <div className={`bg-gradient-to-r ${currentPersona.color} text-white p-4 flex items-center justify-between`}>
        <div className="flex items-center space-x-3">
          <Logo
            src={currentPersona.avatar}
            alt={currentPersona.name}
            rounded
            className="border-2 border-white"
          />
          <div>
            <h3 className="font-semibold text-sm">{currentPersona.name}</h3>
            <p className="text-xs opacity-90">{currentPersona.title}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={clearChat}
            className="p-1 hover:bg-white/20 rounded-full transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>



      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[80%] p-3 rounded-2xl ${message.isUser
                ? 'bg-blue-500 text-white rounded-br-none'
                : 'bg-gray-100 text-gray-800 rounded-bl-none'
                }`}>
                <p className="text-sm whitespace-pre-line">{message.text}</p>
                {!message.isUser && (
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs opacity-70">
                      {message.timestamp.toLocaleTimeString('vi-VN', {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </span>
                    <button
                      onClick={() => speakMessage(message.text)}
                      className="p-1 hover:bg-white/20 rounded-full transition-colors"
                    >
                      <Volume2 className="w-3 h-3" />
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {isTyping && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-start"
          >
            <div className="bg-gray-100 p-3 rounded-2xl rounded-bl-none">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Questions */}
      {messages.length <= 1 && (
        <div className="p-3 border-t border-gray-100">
          <p className="text-xs text-gray-500 mb-2">Câu hỏi gợi ý:</p>
          <div className="space-y-1 max-h-20 overflow-y-auto">
            {suggestedQuestions.slice(0, 3).map((question, index) => (
              <button
                key={index}
                onClick={() => handleSuggestedQuestion(question)}
                className="w-full text-left text-xs bg-gray-50 hover:bg-gray-100 p-2 rounded-lg transition-colors"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center space-x-2">
          <div className="flex-1 relative">
            <input
              type="text"
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Đặt câu hỏi về lịch sử..."
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <button
              onClick={startListening}
              className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-1 rounded-full transition-colors ${isListening ? 'bg-red-100 text-red-600' : 'hover:bg-gray-100 text-gray-400'
                }`}
            >
              <Mic className="w-4 h-4" />
            </button>
          </div>
          <button
            onClick={sendMessage}
            disabled={!currentMessage.trim()}
            className="p-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default AIHistoricalAssistant
