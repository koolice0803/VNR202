export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: 'tu-tuong-doc-lap-dan-toc' | 'tu-tuong-xa-hoi-chu-nghia' | 'ket-hop-hai-tu-tuong' | 'van-dung-thuc-tien' | 'y-nghia-lich-su' | 'mo-bai-vui';
  difficulty: 'easy' | 'medium' | 'hard';
}

export const quizQuestions: QuizQuestion[] = [
  {
    "id": 1,
    "question": "Chiến tranh thế giới thứ hai bùng nổ vào năm nào?",
    "options": ["1937", "1938", "1939", "1940"],
    "correctAnswer": 2,
    "explanation": "Chiến tranh thế giới thứ hai bùng nổ năm 1939, mở đầu thời kỳ biến động lớn ảnh hưởng đến Việt Nam.",
    "category": "tu-tuong-doc-lap-dan-toc",
    "difficulty": "easy"
  },
  {
    "id": 2,
    "question": "Hội nghị Trung ương 6 (11/1939) của Đảng xác định nhiệm vụ hàng đầu là:",
    "options": ["Đánh đổ phong kiến", "Cải cách ruộng đất", "Giành độc lập dân tộc", "Dân chủ hóa xã hội"],
    "correctAnswer": 2,
    "explanation": "Hội nghị Trung ương 6 (1939) chuyển hướng chiến lược, đặt nhiệm vụ giải phóng dân tộc lên hàng đầu.",
    "category": "tu-tuong-doc-lap-dan-toc",
    "difficulty": "easy"
  },
  {
    "id": 3,
    "question": "Người chủ trì Hội nghị Trung ương 8 (5/1941) là:",
    "options": ["Trường Chinh", "Phạm Văn Đồng", "Nguyễn Ái Quốc", "Lê Hồng Phong"],
    "correctAnswer": 2,
    "explanation": "Nguyễn Ái Quốc chủ trì Hội nghị Trung ương 8, hoàn chỉnh chuyển hướng cách mạng giải phóng dân tộc.",
    "category": "tu-tuong-doc-lap-dan-toc",
    "difficulty": "easy"
  },
  {
    "id": 4,
    "question": "Mặt trận Việt Nam Độc lập Đồng minh (Việt Minh) được thành lập với mục tiêu:",
    "options": ["Xây dựng xã hội mới", "Đoàn kết toàn dân chống đế quốc", "Bảo vệ quyền lợi công nhân", "Giải quyết ruộng đất"],
    "correctAnswer": 1,
    "explanation": "Việt Minh được thành lập để đoàn kết toàn dân chống đế quốc, giành độc lập dân tộc.",
    "category": "tu-tuong-doc-lap-dan-toc",
    "difficulty": "easy"
  },
  {
    "id": 5,
    "question": "Câu nói “Trong lúc này, quyền lợi dân tộc giải phóng cao hơn hết thảy” thuộc về:",
    "options": ["Hội nghị TW 6", "Hội nghị TW 7", "Hội nghị TW 8", "Hội nghị Tân Trào"],
    "correctAnswer": 2,
    "explanation": "Hội nghị Trung ương 8 (5/1941) xác định giải phóng dân tộc là nhiệm vụ cao nhất.",
    "category": "tu-tuong-doc-lap-dan-toc",
    "difficulty": "easy"
  },
  {
    "id": 6,
    "question": "Đội Việt Nam Tuyên truyền Giải phóng quân được thành lập ngày:",
    "options": ["22/12/1944", "19/8/1945", "9/3/1945", "2/9/1945"],
    "correctAnswer": 0,
    "explanation": "Đội được thành lập ngày 22/12/1944 – tiền thân của Quân đội Nhân dân Việt Nam.",
    "category": "tu-tuong-doc-lap-dan-toc",
    "difficulty": "medium"
  },
  {
    "id": 7,
    "question": "Người chỉ huy đầu tiên của Đội Việt Nam Tuyên truyền Giải phóng quân là:",
    "options": ["Võ Nguyên Giáp", "Phạm Văn Đồng", "Trường Chinh", "Hoàng Văn Thái"],
    "correctAnswer": 0,
    "explanation": "Đại tướng Võ Nguyên Giáp là người chỉ huy đầu tiên của Đội Việt Nam Tuyên truyền Giải phóng quân.",
    "category": "tu-tuong-doc-lap-dan-toc",
    "difficulty": "easy"
  },
  {
    "id": 8,
    "question": "Căn cứ địa cách mạng đầu tiên của Việt Minh được hình thành ở:",
    "options": ["Nghệ An", "Bắc Ninh", "Cao – Bắc – Lạng", "Quảng Nam"],
    "correctAnswer": 2,
    "explanation": "Khu căn cứ Cao – Bắc – Lạng là cái nôi của phong trào cách mạng Việt Minh.",
    "category": "tu-tuong-doc-lap-dan-toc",
    "difficulty": "medium"
  },
  {
    "id": 9,
    "question": "Khi Nhật đảo chính Pháp (3/1945), Đảng ta đã ban hành:",
    "options": ["Chỉ thị 'Toàn dân khởi nghĩa'", "Chỉ thị 'Nhật – Pháp bắn nhau và hành động của chúng ta'", "Nghị quyết kháng chiến", "Tuyên ngôn độc lập"],
    "correctAnswer": 1,
    "explanation": "Chỉ thị 'Nhật – Pháp bắn nhau và hành động của chúng ta' xác định rõ kẻ thù chính là phát xít Nhật.",
    "category": "tu-tuong-doc-lap-dan-toc",
    "difficulty": "medium"
  },
  {
    "id": 10,
    "question": "Phong trào 'Kháng Nhật cứu nước' được phát động nhằm:",
    "options": ["Lật đổ chính quyền Pháp", "Đấu tranh dân sinh", "Giành chính quyền từ phát xít Nhật", "Chống nạn đói"],
    "correctAnswer": 2,
    "explanation": "Phong trào được phát động để chuẩn bị cho Tổng khởi nghĩa, giành chính quyền từ tay Nhật.",
    "category": "tu-tuong-doc-lap-dan-toc",
    "difficulty": "medium"
  },
  {
    "id": 11,
    "question": "Mục tiêu chiến lược xuyên suốt của Đảng giai đoạn 1939–1945 là:",
    "options": ["Xây dựng xã hội chủ nghĩa", "Giải phóng dân tộc", "Phát triển kinh tế", "Chống phong kiến"],
    "correctAnswer": 1,
    "explanation": "Từ 1939–1945, Đảng đặt giải phóng dân tộc làm nhiệm vụ bao trùm.",
    "category": "tu-tuong-doc-lap-dan-toc",
    "difficulty": "easy"
  },
  {
    "id": 12,
    "question": "Trong giai đoạn 1939–1945, Đảng tạm gác khẩu hiệu nào?",
    "options": ["'Độc lập dân tộc'", "'Ruộng đất cho dân cày'", "'Chống đế quốc'", "'Hòa bình, dân chủ'"],
    "correctAnswer": 1,
    "explanation": "Đảng tạm gác khẩu hiệu 'Ruộng đất cho dân cày' để tập trung toàn lực cho giải phóng dân tộc.",
    "category": "tu-tuong-xa-hoi-chu-nghia",
    "difficulty": "easy"
  },
  {
    "id": 13,
    "question": "Lực lượng lãnh đạo cách mạng được xác định là:",
    "options": ["Tư sản", "Trí thức", "Giai cấp công – nông", "Nông dân trung lưu"],
    "correctAnswer": 2,
    "explanation": "Giai cấp công – nông là lực lượng nòng cốt trong cách mạng Việt Nam.",
    "category": "tu-tuong-xa-hoi-chu-nghia",
    "difficulty": "easy"
  },
  {
    "id": 14,
    "question": "Chính sách ruộng đất thời kỳ này được điều chỉnh nhằm:",
    "options": ["Tập trung tịch thu ruộng địa chủ", "Đoàn kết mọi tầng lớp yêu nước", "Giảm thuế ruộng cho địa chủ", "Chia lại ruộng đất cho nông dân nghèo"],
    "correctAnswer": 1,
    "explanation": "Chính sách ruộng đất được điều chỉnh để mở rộng khối đoàn kết dân tộc.",
    "category": "tu-tuong-xa-hoi-chu-nghia",
    "difficulty": "medium"
  },
  {
    "id": 15,
    "question": "Việc thành lập Mặt trận Việt Minh thể hiện sự sáng tạo trong:",
    "options": ["Chính sách dân sinh", "Đại đoàn kết toàn dân", "Quân sự", "Ngoại giao"],
    "correctAnswer": 1,
    "explanation": "Việt Minh là minh chứng cho tư tưởng đại đoàn kết toàn dân của Đảng và Hồ Chí Minh.",
    "category": "tu-tuong-xa-hoi-chu-nghia",
    "difficulty": "medium"
  },
  {
    "id": 16,
    "question": "Đảng đã kết hợp hai hình thức đấu tranh nào trong giai đoạn 1939–1945?",
    "options": ["Chính trị và ngoại giao", "Chính trị và vũ trang", "Kinh tế và văn hóa", "Nghị trường và báo chí"],
    "correctAnswer": 1,
    "explanation": "Đảng kết hợp đấu tranh chính trị và vũ trang để tạo sức mạnh tổng hợp cho khởi nghĩa.",
    "category": "tu-tuong-xa-hoi-chu-nghia",
    "difficulty": "medium"
  },
  {
    "id": 17,
    "question": "Quan điểm 'cách mạng là sự nghiệp của quần chúng' thể hiện qua:",
    "options": ["Công tác tuyên truyền sâu rộng", "Dựa vào ngoại viện", "Chính sách ruộng đất", "Chính quyền tạm thời"],
    "correctAnswer": 0,
    "explanation": "Đảng chú trọng tuyên truyền, giác ngộ quần chúng để phát huy sức mạnh toàn dân.",
    "category": "tu-tuong-xa-hoi-chu-nghia",
    "difficulty": "medium"
  },
  {
    "id": 18,
    "question": "Hồ Chí Minh khẳng định: 'Muốn cứu nước, giải phóng dân tộc không có con đường nào khác ngoài con đường…'",
    "options": ["Dân chủ", "Xã hội chủ nghĩa", "Cách mạng vô sản", "Cải cách"],
    "correctAnswer": 2,
    "explanation": "Hồ Chí Minh xác định cách mạng vô sản là con đường duy nhất đúng để cứu nước.",
    "category": "tu-tuong-xa-hoi-chu-nghia",
    "difficulty": "medium"
  },
  {
    "id": 19,
    "question": "Thắng lợi của Cách mạng Tháng Tám khẳng định đường lối:",
    "options": ["Dân chủ tư sản", "Giải phóng dân tộc đúng đắn", "Quốc tế vô sản", "Hòa bình dân chủ"],
    "correctAnswer": 1,
    "explanation": "Đường lối giải phóng dân tộc của Đảng là đúng đắn và phù hợp thực tiễn.",
    "category": "tu-tuong-xa-hoi-chu-nghia",
    "difficulty": "medium"
  },
  {
    "id": 20,
    "question": "Hội nghị Trung ương 8 có ý nghĩa đặc biệt vì:",
    "options": ["Khởi đầu cao trào dân chủ mới", "Hoàn chỉnh chuyển hướng chiến lược", "Tuyên bố độc lập", "Bắt đầu kháng chiến"],
    "correctAnswer": 1,
    "explanation": "Hội nghị TW8 hoàn chỉnh chuyển hướng chiến lược từ dân chủ sang giải phóng dân tộc.",
    "category": "tu-tuong-xa-hoi-chu-nghia",
    "difficulty": "medium"
  },
  {
    "id": 21,
    "question": "'Kháng Nhật cứu nước' được xem là:",
    "options": ["Cao trào cách mạng toàn dân", "Khởi nghĩa từng phần", "Chiến tranh nhân dân", "Đấu tranh chính trị"],
    "correctAnswer": 0,
    "explanation": "Phong trào kháng Nhật là cao trào cách mạng toàn dân trước Tổng khởi nghĩa.",
    "category": "tu-tuong-xa-hoi-chu-nghia",
    "difficulty": "medium"
  },
  {
    "id": 22,
    "question": "Đảng chủ trương kết hợp đấu tranh chính trị với vũ trang vì:",
    "options": ["Để giảm tổn thất", "Phù hợp tình hình mới", "Có sự hỗ trợ quốc tế", "Phát triển kinh tế"],
    "correctAnswer": 1,
    "explanation": "Kết hợp chính trị và vũ trang giúp tận dụng thời cơ và phát huy sức mạnh toàn dân.",
    "category": "tu-tuong-xa-hoi-chu-nghia",
    "difficulty": "medium"
  },
  {
    "id": 23,
    "question": "'Toàn dân, toàn diện, lấy lực lượng chính trị làm nòng cốt' thể hiện phương châm của:",
    "options": ["Chiến tranh nhân dân", "Tổng khởi nghĩa", "Đấu tranh vũ trang", "Phong trào Việt Minh"],
    "correctAnswer": 1,
    "explanation": "Đây là phương châm chỉ đạo cuộc Tổng khởi nghĩa Tháng Tám 1945.",
    "category": "tu-tuong-xa-hoi-chu-nghia",
    "difficulty": "medium"
  },
  {
    "id": 24,
    "question": "Cách mạng Tháng Tám là cuộc cách mạng:",
    "options": ["Dân tộc dân chủ nhân dân", "Tư sản dân quyền", "Cải cách", "Xã hội chủ nghĩa"],
    "correctAnswer": 0,
    "explanation": "Cách mạng Tháng Tám là cuộc cách mạng dân tộc dân chủ nhân dân, mở đầu kỷ nguyên độc lập.",
    "category": "tu-tuong-xa-hoi-chu-nghia",
    "difficulty": "medium"
  },
  {
    "id": 25,
    "question": "Tính chất xã hội của Cách mạng Tháng Tám là:",
    "options": ["Giải phóng dân tộc", "Cải cách kinh tế", "Hòa bình", "Văn hóa"],
    "correctAnswer": 0,
    "explanation": "Đây là cuộc cách mạng mang tính chất giải phóng dân tộc.",
    "category": "tu-tuong-xa-hoi-chu-nghia",
    "difficulty": "medium"
  },
  {
    "id": 26,
    "question": "Thắng lợi của cách mạng 1945 góp phần mở đầu:",
    "options": ["Trào lưu cách mạng giải phóng dân tộc trên thế giới", "Chiến tranh lạnh", "Kinh tế bao cấp", "Chủ nghĩa thực dân mới"],
    "correctAnswer": 0,
    "explanation": "Thắng lợi năm 1945 cổ vũ mạnh mẽ phong trào giải phóng dân tộc toàn cầu.",
    "category": "tu-tuong-xa-hoi-chu-nghia",
    "difficulty": "medium"
  },
  {
    "id": 27,
    "question": "Cách mạng Tháng Tám là sự kết hợp giữa hai nhiệm vụ:",
    "options": ["Dân tộc và giai cấp", "Chính trị và văn hóa", "Quân sự và ngoại giao", "Kinh tế và xã hội"],
    "correctAnswer": 0,
    "explanation": "Cách mạng Tháng Tám kết hợp giữa nhiệm vụ dân tộc và giai cấp, thể hiện tư duy chiến lược của Đảng.",
    "category": "ket-hop-hai-tu-tuong",
    "difficulty": "medium"
  },
  {
    "id": 28,
    "question": "Việc thành lập Việt Minh thể hiện sự kết hợp giữa:",
    "options": ["Độc lập dân tộc và đoàn kết xã hội chủ nghĩa", "Văn hóa và kinh tế", "Giai cấp và tư sản", "Cải cách và bảo thủ"],
    "correctAnswer": 0,
    "explanation": "Việt Minh là minh chứng cho sự kết hợp giữa tư tưởng độc lập dân tộc và đoàn kết giai cấp trong khối đại đoàn kết toàn dân.",
    "category": "ket-hop-hai-tu-tuong",
    "difficulty": "medium"
  },
  {
    "id": 29,
    "question": "Sự kết hợp giữa đấu tranh chính trị và vũ trang giúp:",
    "options": ["Hạn chế thiệt hại", "Huy động toàn dân", "Giảm bạo lực", "Kéo dài thời gian"],
    "correctAnswer": 1,
    "explanation": "Kết hợp hai hình thức này giúp huy động toàn dân tham gia cách mạng, tạo sức mạnh tổng hợp.",
    "category": "ket-hop-hai-tu-tuong",
    "difficulty": "medium"
  },
  {
    "id": 30,
    "question": "Hội nghị Trung ương 8 kết hợp giải quyết mâu thuẫn:",
    "options": ["Dân tộc với đế quốc", "Dân tộc với giai cấp", "Giai cấp với tôn giáo", "Nông dân với địa chủ"],
    "correctAnswer": 0,
    "explanation": "Hội nghị Trung ương 8 xác định mâu thuẫn chủ yếu là giữa dân tộc Việt Nam với đế quốc xâm lược.",
    "category": "ket-hop-hai-tu-tuong",
    "difficulty": "medium"
  },
  {
    "id": 31,
    "question": "Đảng vừa giữ vững mục tiêu lâu dài, vừa linh hoạt sách lược — thể hiện:",
    "options": ["Tư duy cứng nhắc", "Bản lĩnh và sáng tạo", "Thay đổi ngẫu nhiên", "Phụ thuộc quốc tế"],
    "correctAnswer": 1,
    "explanation": "Đảng thể hiện bản lĩnh chính trị vững vàng và sự sáng tạo trong chỉ đạo cách mạng.",
    "category": "ket-hop-hai-tu-tuong",
    "difficulty": "medium"
  },
  {
    "id": 32,
    "question": "Hồ Chí Minh kết hợp giữa lý luận Mác – Lênin và thực tiễn Việt Nam là biểu hiện của:",
    "options": ["Tính sáng tạo cách mạng", "Sao chép nguyên mẫu", "Chủ nghĩa dân tộc", "Lý luận khép kín"],
    "correctAnswer": 0,
    "explanation": "Hồ Chí Minh vận dụng sáng tạo chủ nghĩa Mác – Lênin vào thực tiễn Việt Nam, phù hợp điều kiện lịch sử cụ thể.",
    "category": "ket-hop-hai-tu-tuong",
    "difficulty": "hard"
  },
  {
    "id": 33,
    "question": "Cách mạng Tháng Tám kết hợp thành công giữa:",
    "options": ["Sức mạnh dân tộc và sức mạnh thời đại", "Kinh tế và chính trị", "Văn hóa và xã hội", "Quân sự và ngoại giao"],
    "correctAnswer": 0,
    "explanation": "Thắng lợi 1945 chứng minh sự kết hợp giữa sức mạnh dân tộc và sức mạnh thời đại.",
    "category": "ket-hop-hai-tu-tuong",
    "difficulty": "hard"
  },
  {
    "id": 34,
    "question": "Sự lãnh đạo của Đảng là kết quả của:",
    "options": ["Ngẫu nhiên", "Quá trình kết hợp lý luận và thực tiễn", "May mắn", "Ngoại lực"],
    "correctAnswer": 1,
    "explanation": "Sự lãnh đạo của Đảng hình thành từ quá trình kết hợp giữa lý luận Mác – Lênin và thực tiễn đấu tranh cách mạng.",
    "category": "ket-hop-hai-tu-tuong",
    "difficulty": "medium"
  },
  {
    "id": 35,
    "question": "Bài học lớn nhất của Cách mạng Tháng Tám là:",
    "options": ["Chớp thời cơ, phát huy sức mạnh toàn dân", "Phụ thuộc ngoại viện", "Đấu tranh giai cấp", "Cải cách hành chính"],
    "correctAnswer": 0,
    "explanation": "Thắng lợi 1945 khẳng định bài học quý: chớp thời cơ và phát huy sức mạnh toàn dân.",
    "category": "van-dung-thuc-tien",
    "difficulty": "easy"
  },
  {
    "id": 36,
    "question": "Trong công cuộc đổi mới, bài học về chủ động, sáng tạo từ Cách mạng 1945 giúp ta:",
    "options": ["Tự cô lập", "Linh hoạt hội nhập", "Giữ nguyên mô hình cũ", "Phụ thuộc kinh tế"],
    "correctAnswer": 1,
    "explanation": "Tinh thần chủ động sáng tạo từ 1945 giúp Việt Nam hội nhập năng động và hiệu quả trong thời đại mới.",
    "category": "van-dung-thuc-tien",
    "difficulty": "medium"
  },
  {
    "id": 37,
    "question": "Đường lối 'lấy dân làm gốc' hiện nay bắt nguồn từ:",
    "options": ["Cách mạng Tháng Tám", "Cải cách ruộng đất", "Hiệp định Giơ-ne-vơ", "Chiến dịch Điện Biên Phủ"],
    "correctAnswer": 0,
    "explanation": "Thành công của Cách mạng Tháng Tám là kết quả của việc lấy dân làm gốc trong mọi hoạt động.",
    "category": "van-dung-thuc-tien",
    "difficulty": "easy"
  },
  {
    "id": 38,
    "question": "Bài học về 'chớp thời cơ' có ý nghĩa trong:",
    "options": ["Công nghiệp hóa – hiện đại hóa", "Ngoại giao quân sự", "Cải cách hành chính", "Hợp tác khu vực"],
    "correctAnswer": 0,
    "explanation": "Bài học 'chớp thời cơ' được vận dụng hiệu quả trong công nghiệp hóa và phát triển kinh tế hiện nay.",
    "category": "van-dung-thuc-tien",
    "difficulty": "medium"
  },
  {
    "id": 39,
    "question": "Cách mạng Tháng Tám cho thấy tầm quan trọng của:",
    "options": ["Lãnh đạo thống nhất, đoàn kết dân tộc", "Sự hỗ trợ quốc tế", "Bạo lực chính trị", "Kinh tế thị trường"],
    "correctAnswer": 0,
    "explanation": "Đoàn kết dân tộc và sự lãnh đạo thống nhất là nhân tố quyết định thắng lợi.",
    "category": "van-dung-thuc-tien",
    "difficulty": "medium"
  },
  {
    "id": 40,
    "question": "Tinh thần đoàn kết của Việt Minh là nền tảng cho:",
    "options": ["Khối đại đoàn kết toàn dân hiện nay", "Cải cách giáo dục", "Quản lý hành chính", "Ngoại thương"],
    "correctAnswer": 0,
    "explanation": "Tinh thần đoàn kết của Việt Minh là tiền đề xây dựng khối đại đoàn kết toàn dân tộc hiện nay.",
    "category": "van-dung-thuc-tien",
    "difficulty": "medium"
  },
  {
    "id": 41,
    "question": "Bài học từ Cách mạng Tháng Tám về công tác tuyên truyền là:",
    "options": ["Phải xuất phát từ quần chúng", "Phải do cấp cao thực hiện", "Tập trung ở đô thị", "Chỉ dành cho thanh niên"],
    "correctAnswer": 0,
    "explanation": "Công tác tuyên truyền phải xuất phát từ nhân dân và hướng về nhân dân để đạt hiệu quả cao.",
    "category": "van-dung-thuc-tien",
    "difficulty": "easy"
  },
  {
    "id": 42,
    "question": "Thắng lợi của Cách mạng Tháng Tám mở ra kỷ nguyên:",
    "options": ["Độc lập, tự do, đi lên CNXH", "Phong kiến", "Thực dân mới", "Chiến tranh lạnh"],
    "correctAnswer": 0,
    "explanation": "Cách mạng Tháng Tám mở ra kỷ nguyên độc lập, tự do, đi lên chủ nghĩa xã hội cho dân tộc Việt Nam.",
    "category": "y-nghia-lich-su",
    "difficulty": "easy"
  },
  {
    "id": 43,
    "question": "Cách mạng Tháng Tám là thắng lợi của:",
    "options": ["Phe Đồng minh", "Đường lối giải phóng dân tộc đúng đắn của Đảng", "Tư sản dân tộc", "Đế quốc"],
    "correctAnswer": 1,
    "explanation": "Cách mạng là thắng lợi của đường lối cách mạng đúng đắn và sáng tạo của Đảng Cộng sản Việt Nam.",
    "category": "y-nghia-lich-su",
    "difficulty": "medium"
  },
  {
    "id": 44,
    "question": "Cách mạng Tháng Tám chứng minh vai trò của:",
    "options": ["Quần chúng nhân dân là động lực cách mạng", "Giai cấp tư sản", "Quốc tế vô sản", "Chính quyền phong kiến"],
    "correctAnswer": 0,
    "explanation": "Thắng lợi của cách mạng chứng minh quần chúng nhân dân là động lực quyết định.",
    "category": "y-nghia-lich-su",
    "difficulty": "medium"
  },
  {
    "id": 45,
    "question": "Cách mạng Tháng Tám ảnh hưởng mạnh mẽ đến:",
    "options": ["Phong trào giải phóng dân tộc châu Á – Phi", "Cách mạng tư sản châu Âu", "Chính sách thuộc địa Anh", "Chiến tranh lạnh"],
    "correctAnswer": 0,
    "explanation": "Cách mạng Tháng Tám cổ vũ phong trào đấu tranh giải phóng dân tộc ở châu Á và châu Phi.",
    "category": "y-nghia-lich-su",
    "difficulty": "medium"
  },
  {
    "id": 46,
    "question": "Ý nghĩa to lớn nhất của Cách mạng Tháng Tám là:",
    "options": ["Đưa Việt Nam trở thành quốc gia độc lập", "Cải cách ruộng đất", "Tham gia phe Đồng minh", "Đổi mới kinh tế"],
    "correctAnswer": 0,
    "explanation": "Cách mạng Tháng Tám giành độc lập dân tộc, lập nên nước Việt Nam Dân chủ Cộng hòa.",
    "category": "y-nghia-lich-su",
    "difficulty": "medium"
  },
  {
    "id": 47,
    "question": "Cách mạng Tháng Tám mở đầu thời kỳ:",
    "options": ["Nhân dân làm chủ đất nước", "Phong kiến trở lại", "Xâm lược mới", "Liên minh quốc tế"],
    "correctAnswer": 0,
    "explanation": "Sau thắng lợi 1945, nhân dân Việt Nam trở thành người làm chủ đất nước và vận mệnh dân tộc.",
    "category": "y-nghia-lich-su",
    "difficulty": "medium"
  },
  {
    "id": 48,
    "question": "Tư tưởng 'dân tộc trên hết, Tổ quốc trên hết' được thể hiện rõ nhất trong:",
    "options": ["Hội nghị TW 8", "Cải cách ruộng đất", "Hiệp định Giơ-ne-vơ", "Kháng chiến chống Mỹ"],
    "correctAnswer": 0,
    "explanation": "Hội nghị TW8 khẳng định tư tưởng dân tộc trên hết, là kim chỉ nam cho cách mạng giải phóng dân tộc.",
    "category": "y-nghia-lich-su",
    "difficulty": "easy"
  },
  {
    "id": 49,
    "question": "Thắng lợi năm 1945 cho thấy sự kết hợp giữa:",
    "options": ["Đảng – Chủ tịch Hồ Chí Minh – Nhân dân", "Đảng – Quốc tế – Nhật", "Việt Minh – Mỹ", "Chính trị – kinh tế"],
    "correctAnswer": 0,
    "explanation": "Ba nhân tố làm nên thắng lợi là sự lãnh đạo của Đảng, Chủ tịch Hồ Chí Minh và sức mạnh toàn dân.",
    "category": "y-nghia-lich-su",
    "difficulty": "medium"
  },
  {
    "id": 50,
    "question": "Kết luận khẳng định giá trị lịch sử của Cách mạng Tháng Tám là:",
    "options": ["Không phải 'ăn may', mà là kết quả tất yếu của sự chuẩn bị lâu dài và chủ động của Đảng", "Một hiện tượng ngẫu nhiên", "Do yếu tố quốc tế", "Do Nhật đầu hàng"],
    "correctAnswer": 0,
    "explanation": "Cách mạng Tháng Tám là kết quả tất yếu của quá trình chuẩn bị kỹ lưỡng, không phải sự 'ăn may'.",
    "category": "y-nghia-lich-su",
    "difficulty": "hard"
  },
  {
    "id": 51,
    "question": "Trước Cách mạng Tháng Tám 1945, Việt Nam đang là thuộc địa của nước nào?",
    "options": ["Anh", "Pháp", "Nhật", "Mỹ"],
    "correctAnswer": 1,
    "explanation": "Trước năm 1945, Việt Nam là thuộc địa của thực dân Pháp, nằm trong Liên bang Đông Dương.",
    "category": "mo-bai-vui",
    "difficulty": "easy"
  },
  {
    "id": 52,
    "question": "Theo bạn, điều gì là quan trọng nhất để giành lại độc lập dân tộc?",
    "options": [
      "Có vũ khí hiện đại",
      "Có tinh thần đoàn kết toàn dân",
      "Có sự giúp đỡ quốc tế",
      "Có lợi thế địa lý"
    ],
    "correctAnswer": 1,
    "explanation": "Đoàn kết toàn dân tộc là yếu tố cốt lõi dẫn đến thắng lợi của cách mạng Việt Nam.",
    "category": "mo-bai-vui",
    "difficulty": "easy"
  },
  {
    "id": 53,
    "question": "Nếu bạn sống ở Việt Nam năm 1945, bạn nghĩ mình sẽ tham gia phong trào cách mạng bằng cách nào?",
    "options": [
      "Tham gia Việt Minh và tuyên truyền",
      "Giúp đỡ kháng chiến bằng lương thực",
      "Trở thành chiến sĩ du kích",
      "Trốn đi nước ngoài để quan sát tình hình 😅"
    ],
    "correctAnswer": 0,
    "explanation": "Đây là câu hỏi mở gợi suy nghĩ – dù bạn chọn cách nào, tinh thần yêu nước đều đáng quý!",
    "category": "mo-bai-vui",
    "difficulty": "easy"
  },
  {
    "id": 54,
    "question": "Nếu bạn là người dân năm 1945 nghe tin Nhật đầu hàng Đồng minh, bạn sẽ cảm thấy thế nào?",
    "options": [
      "Mừng rỡ vì sắp được độc lập!",
      "Hoang mang không hiểu chuyện gì xảy ra 🤔",
      "Lo sợ chiến tranh quay lại",
      "Đi tìm gạo vì vẫn đang đói 😢"
    ],
    "correctAnswer": 0,
    "explanation": "Đa số người dân lúc đó vừa vui mừng vừa hoang mang – nhưng ai cũng khát khao độc lập.",
    "category": "mo-bai-vui",
    "difficulty": "easy"
  },
  {
    "id": 55,
    "question": "Nếu bạn được quay ngược thời gian về năm 1945, điều đầu tiên bạn muốn làm là gì?",
    "options": [
      "Tham gia khởi nghĩa giành chính quyền",
      "Gặp Chủ tịch Hồ Chí Minh để xin chữ ký 😄",
      "Ghi lại lịch sử bằng điện thoại để livestream",
      "Chụp ảnh selfie tại Quảng trường Ba Đình"
    ],
    "correctAnswer": 0,
    "explanation": "Dù chọn gì, chắc ai cũng muốn chứng kiến khoảnh khắc thiêng liêng của Cách mạng Tháng Tám.",
    "category": "mo-bai-vui",
    "difficulty": "easy"
  },
  {
    "id": 56,
    "question": "Nếu có mạng xã hội năm 1945, khẩu hiệu nào theo bạn sẽ 'trend' nhất?",
    "options": [
      "#ĐộcLậpDânTộc",
      "#CơmÁoHòaBình",
      "#ViệtMinhMuônNăm",
      "#ThoátKhỏiPhápNhật"
    ],
    "correctAnswer": 0,
    "explanation": "Chắc chắn #ĐộcLậpDânTộc sẽ hot nhất vì đó là khát vọng cháy bỏng của người Việt lúc bấy giờ.",
    "category": "mo-bai-vui",
    "difficulty": "easy"
  }
];

export const quizCategories = [
  { id: 'tu-tuong-doc-lap-dan-toc', name: 'Tư tưởng độc lập dân tộc', color: 'bg-blue-500' },
  { id: 'tu-tuong-xa-hoi-chu-nghia', name: 'Tư tưởng xã hội chủ nghĩa', color: 'bg-red-500' },
  { id: 'ket-hop-hai-tu-tuong', name: 'Kết hợp hai tư tưởng', color: 'bg-green-500' },
  { id: 'van-dung-thuc-tien', name: 'Vận dụng thực tiễn', color: 'bg-purple-500' },
  { id: 'y-nghia-lich-su', name: 'Ý nghĩa lịch sử', color: 'bg-orange-500' },
  { id: 'mo-bai-vui', name: 'Mở bài vui', color: 'bg-pink-500' }
];

export const difficultyLevels = [
  { id: 'easy', name: 'Dễ', color: 'bg-green-500' },
  { id: 'medium', name: 'Trung bình', color: 'bg-yellow-500' },
  { id: 'hard', name: 'Khó', color: 'bg-red-500' }
];
