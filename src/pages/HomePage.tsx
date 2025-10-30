import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.jpg'
import img6 from '../assets/6.jpg'
import {
  ArrowRight,
  Calendar,
  Users,
  Globe,
  // BookOpen, // Removed since using Award icon for quiz link
  Target,
  // Lightbulb,
  Heart,
  Award,
  Flag,
  Star,
  Sword
} from 'lucide-react'

const HomePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  const keyPoints = [
    {
      icon: Target,
      title: 'Mục tiêu nghiên cứu',
      description: 'Hiểu rõ tư tưởng Hồ Chí Minh về độc lập dân tộc gắn liền với chủ nghĩa xã hội là tư tưởng nền tảng cho thắng lợi của Cách mạng Tháng Tám 1945 và con đường phát triển của dân tộc Việt Nam'
    },
    {
      icon: Calendar,
      title: 'Quá trình hình thành',
      description: 'Từ những hoạt động cách mạng đầu tiên của Nguyễn Ái Quốc đầu thế kỷ XX,đến khi Đảng Cộng sản Việt Nam ra đời (1930) và Cách mạng Tháng Tám 1945 thành công, tư tưởng độc lập dân tộc và chủ nghĩa xã hội dần được hình thành và khẳng định qua thực tiễn đấu tranh.'
    },
    {
      icon: Globe,
      title: 'Bối cảnh lịch sử',
      description: 'Cách mạng Tháng Tám diễn ra trong bối cảnh Chiến tranh thế giới thứ hai đang kết thúc,chủ nghĩa phát xít thất bại, phong trào giải phóng dân tộc bùng nổ mạnh mẽ ở châu Á, châu Phi và Mỹ Latinh — tạo điều kiện thuận lợi cho nhân dân Việt Nam vùng lên giành chính quyền.'
    },
    {
      icon: Users,
      title: 'Ý nghĩa thời đại',
      description: 'Thắng lợi của Cách mạng Tháng Tám mở ra kỷ nguyên mới cho dân tộc Việt Nam –kỷ nguyên độc lập, tự do và tiến lên chủ nghĩa xã hội,đồng thời cổ vũ các dân tộc bị áp bức trên thế giới vùng lên đấu tranh giành độc lập.'
    }
  ]

  // const features = [
  //   {
  //     icon: BookOpen,
  //     title: 'Tài liệu đầy đủ',
  //     description: 'Dựa trên các nguồn tài liệu lịch sử chính thức và đáng tin cậy',
  //     color: 'from-blue-500 to-cyan-500'
  //   },
  //   {
  //     icon: Lightbulb,
  //     title: 'Công nghệ hiện đại',
  //     description: 'Ứng dụng AI và công nghệ web để tăng trải nghiệm học tập',
  //     color: 'from-purple-500 to-pink-500'
  //   },
  //   {
  //     icon: Heart,
  //     title: 'Dễ tiếp cận',
  //     description: 'Thiết kế thân thiện, phù hợp với mọi đối tượng người dùng',
  //     color: 'from-green-500 to-emerald-500'
  //   },
  //   {
  //     icon: Award,
  //     title: 'Khoa học khách quan',
  //     description: 'Phân tích dựa trên dữ kiện lịch sử và phương pháp khoa học',
  //     color: 'from-orange-500 to-red-500'
  //   }
  // ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden hero-background">
        <div className="absolute inset-0 animated-bg opacity-15"></div>

        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 float-animation"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-red-400 to-yellow-500 rounded-full opacity-25 float-animation-delayed"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-30 float-animation"></div>

        {/* Vietnam flag inspired decorative elements */}
        <div className="absolute top-1/3 right-10 w-8 h-8 vietnam-flag-colors rounded-full opacity-40 float-animation-delayed"></div>
        <div className="absolute bottom-1/3 left-16 w-6 h-6 vietnam-flag-colors rounded-full opacity-50 float-animation"></div>

        <motion.div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center">
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-medium mb-8">
                <Award className="w-4 h-4 mr-2" />
                Sản phẩm môn học Lịch sử Đảng Cộng sản Việt Nam
              </div>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              variants={itemVariants}
            >
              <span className="text-gradient-solid">CÁCH MẠNG THÁNG 8 NĂM 1945</span>
              <br />
              <motion.span
                className="text-3xl md:text-4xl text-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
               Mùa thu lịch sử – Khi dân tộc Việt Nam đứng lên giành độc lập!
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Khám phá hành trình vĩ đại đưa dân tộc Việt Nam từ thân phận nô lệ đến tự do,
              dưới ngọn cờ của Đảng Cộng sản Việt Nam và Chủ tịch Hồ Chí Minh.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={itemVariants}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/timeline"
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 pulse-glow"
                >
                  Khám phá dòng thời gian
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/quiz"
                  className="group inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-purple-500 hover:text-purple-600 hover:bg-purple-50 hover:-translate-y-1 transition-all duration-300"
                >
                  Kiểm tra kiến thức
                  <Award className="ml-2 w-5 h-5 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Key Points Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Những điểm quan trọng
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tìm hiểu về quá trình hình thành và phát triển tư tưởng của Chủ tịch Hồ Chí Minh
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyPoints.map((point, index) => {
              const Icon = point.icon
              return (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-lg pulse-glow">
                    <Icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {point.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      {/* <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Đặc điểm nổi bật
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Website được thiết kế với các tính năng hiện đại và phương pháp tiếp cận khoa học
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover-lift group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section> */}

      {/* Historical Context with Images Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hình ảnh lịch sử – Cách mạng Tháng Tám 1945
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Những hình ảnh tiêu biểu về cuộc Tổng khởi nghĩa và sự ra đời của nước Việt Nam Dân chủ Cộng hòa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tổng khởi nghĩa toàn quốc (Tháng 8/1945) */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src={img1}
                  alt="Tổng khởi nghĩa toàn quốc 1945"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white">
                  <Globe className="w-6 h-6 mb-1" />
                  <p className="text-xs font-semibold">Tổng khởi nghĩa</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Tổng khởi nghĩa toàn quốc (Tháng 8/1945)</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Hình ảnh nhân dân cả nước đồng loạt vùng lên giành chính quyền dưới sự lãnh đạo của Đảng Cộng sản Việt Nam.
                  Tinh thần "Dân tộc Việt Nam vùng dậy tự giải phóng mình" lan tỏa từ Bắc chí Nam.
                </p>
              </div>
            </motion.div>

            {/* Khởi nghĩa giành chính quyền ở Hà Nội – 19/8/1945 */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src={img2}
                  alt="Khởi nghĩa giành chính quyền ở Hà Nội 19/8/1945"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white">
                  <Flag className="w-6 h-6 mb-1" />
                  <p className="text-xs font-semibold">Hà Nội 19/8/1945</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Khởi nghĩa giành chính quyền ở Hà Nội – 19/8/1945</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Quần chúng cách mạng Hà Nội đổ ra đường, chiếm Phủ Khâm sai và các cơ quan trọng yếu của chính quyền bù nhìn,
                  mở đầu cho thắng lợi trên phạm vi cả nước.
                </p>
              </div>
            </motion.div>

            {/* Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập – 2/9/1945 */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src={img3}
                  alt="Tuyên ngôn độc lập 2/9/1945"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white">
                  <Sword className="w-6 h-6 mb-1" />
                  <p className="text-xs font-semibold">Tuyên ngôn độc lập</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập – 2/9/1945</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Tại Quảng trường Ba Đình, Chủ tịch Hồ Chí Minh tuyên bố khai sinh nước Việt Nam Dân chủ Cộng hòa –
                  mở ra kỷ nguyên mới của độc lập, tự do và hạnh phúc cho dân tộc Việt Nam.
                </p>
              </div>
            </motion.div>

            {/* Nhân dân giành chính quyền ở các địa phương */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src={img4}
                  alt="Nhân dân giành chính quyền ở các địa phương"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white">
                  <Users className="w-6 h-6 mb-1" />
                  <p className="text-xs font-semibold">Giành chính quyền tại địa phương</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Nhân dân giành chính quyền ở các địa phương</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Từ Bắc Giang, Hải Dương, Hà Tĩnh đến Huế, Sài Gòn – khí thế cách mạng dâng cao,
                  chính quyền địch lần lượt sụp đổ. Thắng lợi của nhân dân địa phương góp phần tạo nên sức mạnh tổng hợp cho thành công toàn quốc.
                </p>
              </div>
            </motion.div>

            {/* Ý nghĩa lịch sử & Kết quả */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src={img5}
                  alt="Ý nghĩa lịch sử của Cách mạng Tháng Tám"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white">
                  <Star className="w-6 h-6 mb-1" />
                  <p className="text-xs font-semibold">Ý nghĩa lịch sử</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Ý nghĩa lịch sử của Cách mạng Tháng Tám</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Cách mạng Tháng Tám chấm dứt ách thống trị hơn 80 năm của thực dân – phong kiến,
                  mở ra kỷ nguyên độc lập dân tộc và chủ nghĩa xã hội, đồng thời cổ vũ phong trào giải phóng dân tộc trên thế giới.
                </p>
              </div>
            </motion.div>

            {/* Tầm quan trọng & Nguyên nhân */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src={img6}
                  alt="Tầm quan trọng của Cách mạng Tháng Tám"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white">
                  <Heart className="w-6 h-6 mb-1" />
                  <p className="text-xs font-semibold">Tầm quan trọng</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Tầm quan trọng của Cách mạng Tháng Tám</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Khẳng định vai trò lãnh đạo của Đảng Cộng sản Việt Nam và minh chứng cho sức mạnh đại đoàn kết toàn dân tộc.
                  Cách mạng Tháng Tám trở thành bài học lịch sử về nắm bắt thời cơ cách mạng.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Assistant Feature Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              Tính năng AI sáng tạo
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-gradient">Trò chuyện với AI Lịch sử</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Trải nghiệm học tập tương tác độc đáo với AI Assistant được huấn luyện về tư tưởng Hồ Chí Minh
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* AI Features */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
                            <div className="bg-white rounded-2xl p-6 shadow-lg hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">AI Chuyên gia tư tưởng</h3>
                    <p className="text-gray-600 text-sm">
                      Trò chuyện với AI được huấn luyện chuyên sâu về cuộc cách mạng tháng 8,
                      cung cấp thông tin chính xác và khách quan về di sản tư tưởng vĩ đại
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Kiến thức phong phú</h3>
                    <p className="text-gray-600 text-sm">
                      Được huấn luyện trên các tác phẩm, bài viết và tài liệu
                      về cách mạng tháng 8
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Tương tác thông minh</h3>
                    <p className="text-gray-600 text-sm">
                      Hỗ trợ giọng nói tiếng Việt, câu hỏi gợi ý thông minh
                      và phân tích sâu sắc về cách mạng tháng 8
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Demo Preview */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                                {/* Mock chat interface */}
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 flex items-center space-x-3">
                  <img
                    src="/images/img2.svg"
                    alt="AI Lịch sử Việt Nam"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <div>
                    <h4 className="font-semibold">AI Tư tưởng Hồ Chí Minh</h4>
                    <p className="text-xs opacity-90">Trợ lý AI chuyên về tư tưởng Hồ Chí Minh</p>
                  </div>
                </div>

                <div className="p-4 space-y-4 max-h-64 overflow-y-auto">
                                    <div className="flex justify-start">
                    <div className="bg-gray-100 p-3 rounded-2xl rounded-bl-none max-w-xs">
                      <p className="text-sm text-gray-800">
                       Xin chào! Tôi là AI Cách mạng Tháng Tám, tập trung giai đoạn 1939–1945. Tôi có thể giúp bạn về: chuyển hướng 1939–1941, xây dựng lực lượng 1941–1945, Chỉ thị 3/1945, Tổng khởi nghĩa 8/1945 và ý nghĩa lịch sử. Bạn muốn bắt đầu ở phần nào?
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="bg-blue-500 text-white p-3 rounded-2xl rounded-br-none max-w-xs">
                      <p className="text-sm">
                        Tổng khởi nghĩa (8/1945): 14–28/8 giành chính quyền trên cả nước; 19/8 Hà Nội, 23/8 Huế, 25/8 Sài Gòn. Ngày 2/9, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập.
                      </p>
                    </div>
                  </div>

                                    <div className="flex justify-start">
                    {/* <div className="bg-gray-100 p-3 rounded-2xl rounded-bl-none max-w-xs">
                      <p className="text-sm text-gray-800">
                        Tư tưởng độc lập dân tộc của Bác Hồ hình thành từ khát vọng giải phóng
                        dân tộc khỏi ách thống trị thực dân, phong kiến...
                      </p>
                    </div> */}
                  </div>
                </div>

                <div className="p-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-gray-100 rounded-xl p-3">
                      <p className="text-sm text-gray-500">Đặt câu hỏi về tư tưởng Hồ Chí Minh...</p>
                    </div>
                    <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-70 float-animation"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-60 float-animation-delayed"></div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Sẵn sàng khám phá lịch sử với AI?
              </h3>
                            <p className="text-gray-600 mb-6">
                Nhấn vào biểu tượng chat ở góc dưới bên phải để bắt đầu cuộc trò chuyện
                với AI và khám phá những câu chuyện lịch sử hấp dẫn!
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="flex items-center text-sm text-gray-500">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
                  Trò chuyện tự nhiên
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                  Hỗ trợ giọng nói
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <div className="w-4 h-4 bg-purple-500 rounded-full mr-2"></div>
                  Phân tích thông minh
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Vấn đề nghiên cứu
            </h2>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mb-8">
              <blockquote className="text-xl md:text-2xl text-gray-800 font-medium italic leading-relaxed">
                "Cách mạng Tháng Tám năm 1945 là kết quả tất yếu của phong trào đấu tranh giải phóng dân tộc,
                dưới sự lãnh đạo đúng đắn của Đảng Cộng sản Việt Nam và Chủ tịch Hồ Chí Minh – biểu tượng cho sức mạnh đại đoàn kết toàn dân tộc."
              </blockquote>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">Nguyên nhân</div>
                <div className="text-gray-600 mt-2">Sự lãnh đạo của Đảng; phong trào yêu nước; thời cơ quốc tế</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">Diễn biến</div>
                <div className="text-gray-600 mt-2">Từ khởi nghĩa từng phần (3–8/1945) đến Tổng khởi nghĩa (13–28/8/1945); cao trào 19/8</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">Kết quả & Ý nghĩa</div>
                <div className="text-gray-600 mt-2">2/9/1945 khai sinh nước Việt Nam Dân chủ Cộng hòa; mở kỷ nguyên độc lập</div>
              </div>
            </div>

            <div className="text-lg text-gray-700 leading-relaxed space-y-4">
              <p>
                <strong>Tầm quan trọng của Cách mạng Tháng Tám:</strong>
              </p>
              <ul className="text-left space-y-2 max-w-2xl mx-auto pl-6 list-disc">
                <li>Sự lãnh đạo sáng suốt của Đảng Cộng sản Việt Nam.</li>
                <li>Phong trào yêu nước sôi nổi và lực lượng cách mạng trưởng thành.</li>
                <li>Thời cơ lịch sử khi phát xít Nhật đầu hàng Đồng minh.</li>
                <li>Chấm dứt hơn 80 năm thống trị thực dân – phong kiến; mở ra kỷ nguyên độc lập.</li>
              </ul>
            </div>

            <motion.div
              className="mt-12"
              whileHover={{ scale: 1.05 }}
            >
              <Link
                to="/timeline"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
              >
                Bắt đầu khám phá
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
