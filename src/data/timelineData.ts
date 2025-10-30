import type { TimelineEvent } from '../types';

export const timelineEvents: TimelineEvent[] = [
  {
    id: 'japanese-coup-1945',
    date: '09/03/1945',
    title: 'Nhật đảo chính Pháp, độc chiếm Đông Dương',
    description: 'Sự kiện khiến chính quyền rối loạn, tạo khủng hoảng chính trị và thời cơ cho phong trào giải phóng.',
    details: [
      'Địa điểm / Lực lượng: Toàn cõi Đông Dương',
      'Ý nghĩa: Tạo ra khủng hoảng chính trị, quân sự sâu sắc — thời cơ cho cách mạng.'
    ],
    category: 'political'
  },
  {
    id: 'directive-march-12-1945',
    date: '12/03/1945',
    title: 'Ban Thường vụ Trung ương ra chỉ thị "Nhật – Pháp bắn nhau và hành động của chúng ta"',
    description: 'Chỉ thị xác định đường lối phát động khởi nghĩa từng phần, chuẩn bị cho Tổng khởi nghĩa.',
    details: [
      'Địa điểm: Hà Nội',
      'Ý nghĩa: Xác định đường lối phát động khởi nghĩa từng phần, chuẩn bị Tổng khởi nghĩa.'
    ],
    category: 'political'
  },
  {
    id: 'vietbac-15-20-4-1945',
    date: '15–20/04/1945',
    title: 'Thành lập Khu giải phóng Việt Bắc',
    description: 'Xây dựng chính quyền cách mạng ở nhiều nơi, là bước chuẩn bị trực tiếp cho Tổng khởi nghĩa toàn quốc.',
    details: [
      'Địa điểm: Việt Bắc',
      'Ý nghĩa: Là bước chuẩn bị trực tiếp cho Tổng khởi nghĩa toàn quốc.'
    ],
    category: 'political'
  },
  {
    id: 'tan-trao-13-15-8-1945',
    date: '13–15/08/1945',
    title: 'Hội nghị toàn quốc của Đảng họp tại Tân Trào, quyết định phát động Tổng khởi nghĩa',
    description: 'Hội nghị đề ra chủ trương, kế hoạch và thời điểm Tổng khởi nghĩa giành chính quyền trong cả nước.',
    details: [
      'Địa điểm: Tân Trào (Tuyên Quang)',
      'Ý nghĩa: Đề ra chủ trương, kế hoạch và thời điểm Tổng khởi nghĩa.'
    ],
    category: 'political'
  },
  {
    id: 'tan-trao-16-17-8-1945',
    date: '16–17/08/1945',
    title: 'Đại hội Quốc dân Tân Trào; thông qua Lệnh Tổng khởi nghĩa',
    description: 'Thông qua Lệnh Tổng khởi nghĩa, 10 chính sách lớn và bầu Ủy ban Dân tộc Giải phóng Việt Nam do Hồ Chí Minh làm Chủ tịch.',
    details: [
      'Địa điểm: Tân Trào',
      'Ý nghĩa: Hợp pháp hóa chủ trương khởi nghĩa; thống nhất ý chí toàn dân.'
    ],
    category: 'political'
  },
  {
    id: 'local-uprisings-14-18-8-1945',
    date: '14–18/08/1945',
    title: 'Khởi nghĩa thắng lợi ở nhiều địa phương (Bắc Giang, Hải Dương, Hà Tĩnh, Quảng Nam...)',
    description: 'Mở đầu cao trào cách mạng trong cả nước, tạo đà cho Tổng khởi nghĩa.',
    details: [
      'Địa điểm: Bắc Bộ, Trung Bộ',
      'Ý nghĩa: Mở đầu cao trào cách mạng trong cả nước.'
    ],
    category: 'military'
  },
  {
    id: 'aug-19-1945',
    date: '19/08/1945',
    title: 'Khởi nghĩa giành chính quyền ở Hà Nội thắng lợi',
    description: 'Mốc bùng nổ Tổng khởi nghĩa, ảnh hưởng mạnh mẽ đến các địa phương.',
    details: [
      'Địa điểm: Hà Nội',
      'Ý nghĩa: Mốc bùng nổ Tổng khởi nghĩa, ảnh hưởng mạnh mẽ đến các địa phương.'
    ],
    category: 'military'
  },
  {
    id: 'hue-23-8-1945',
    date: '23/08/1945',
    title: 'Nhân dân Huế khởi nghĩa, giành chính quyền',
    description: 'Trung tâm miền Trung được giải phóng.',
    details: [
      'Địa điểm: Huế',
      'Ý nghĩa: Trung tâm miền Trung được giải phóng.'
    ],
    category: 'military'
  },
  {
    id: 'saigon-25-8-1945',
    date: '25/08/1945',
    title: 'Nhân dân Sài Gòn – Gia Định khởi nghĩa giành chính quyền',
    description: 'Hoàn tất khởi nghĩa trong cả nước, tiến tới thiết lập chính quyền nhân dân ở Nam Bộ.',
    details: [
      'Địa điểm: Nam Bộ',
      'Ý nghĩa: Hoàn tất khởi nghĩa trong cả nước.'
    ],
    category: 'military'
  },
  {
    id: 'provisional-gov-28-8-1945',
    date: '28/08/1945',
    title: 'Ủy ban Dân tộc Giải phóng Việt Nam trở thành Chính phủ Lâm thời',
    description: 'Chính phủ Lâm thời Việt Nam Dân chủ Cộng hòa được thành lập, điều hành đất nước sau khởi nghĩa.',
    details: [
      'Địa điểm: Toàn quốc',
      'Ý nghĩa: Cả nước hoàn toàn giành được chính quyền về tay nhân dân.'
    ],
    category: 'political'
  },
  {
    id: 'bao-dai-abdication-30-8-1945',
    date: '30/08/1945',
    title: 'Vua Bảo Đại thoái vị, chấm dứt chế độ phong kiến',
    description: 'Sự kiện chấm dứt chế độ quân chủ truyền thống ở Việt Nam.',
    details: [
      'Địa điểm: Huế',
      'Ý nghĩa: Xóa bỏ vĩnh viễn chế độ quân chủ hơn 1.000 năm ở Việt Nam.'
    ],
    category: 'political'
  },
  {
    id: 'sept-2-1945',
    date: '02/09/1945',
    title: 'Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập',
    description: 'Khai sinh nước Việt Nam Dân chủ Cộng hòa tại Quảng trường Ba Đình — mốc son chói lọi.',
    details: [
      'Địa điểm: Quảng trường Ba Đình – Hà Nội',
      'Ý nghĩa: Mốc son chói lọi, mở ra kỷ nguyên độc lập, tự do cho dân tộc Việt Nam.'
    ],
    category: 'political'
  }
];
