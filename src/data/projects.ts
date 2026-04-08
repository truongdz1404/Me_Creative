export interface Project {
  id: string;
  title: string;
  category: string;
  thumbnailImage: string;
  heroImage: string;
  description: string;
  longDescription: string;
  challenge: string;
  solution: string;
  results: string[];
  client: string;
  year: number;
  videoUrl?: string;
  gallery: string[];
  tags: string[];
}

export const projectsData: Project[] = [
  {
    id: "kienlongbank",
    title: "KienlongBank 30 Năm",
    category: "Dự án tích hợp",
    thumbnailImage: "https://mecreative.com.vn/wp-content/uploads/2026/03/WE-DID-_-KIENLONGBANK-_-ANH-SHORTLIST.png",
    heroImage: "https://mecreative.com.vn/wp-content/uploads/2026/03/WE-DID-_-KIENLONGBANK-_-ANH-DU-AN-7.png",
    description: "Chiến dịch kỷ niệm 30 năm thành lập của KienlongBank",
    longDescription: "Lấy cảm hứng từ ba nguyên tố Đất - Nước - Gió, ME Creative đã tạo ra một chiến dịch tích hợp toàn diện để kỷ niệm 30 năm hành trình phát triển của KienlongBank. Dự án này kết hợp các công cụ truyền thông đa chiều để lan tỏa thông điệp và xây dựng lại niềm tin của khách hàng.",
    challenge: "Cần truyền tải một cách sâu sắc câu chuyện 30 năm phát triển, từ những ngày khởi đầu đến hiện tại, trong khi giữ lại sự kết nối cảm xúc với khách hàng.",
    solution: "ME Creative sử dụng ba yếu tố tự nhiên (Đất, Nước, Gió) làm biểu tượng cho các mốc phát triển quan trọng, tạo ra một bộ nhận diện hình ảnh mạnh mẽ và dễ nhớ. Chiến dịch bao gồm TVC, phim doanh nghiệp, nội dung mạng xã hội và các tài liệu in ấn.",
    results: [
      "Tăng độ nhận biết thương hiệu lên 45%",
      "Lượng tương tác trên mạng xã hội tăng 120%",
      "Phả huy hiệu quả trong việc tăng khách hàng mới",
      "Giải pháp tích hợp được đánh giá cao bởi các bên liên quan"
    ],
    client: "KienlongBank",
    year: 2026,
    videoUrl: "https://www.youtube.com/embed/5firhOTxIcI",
    gallery: [
      "https://mecreative.com.vn/wp-content/uploads/2026/03/WE-DID-_-KIENLONGBANK-_-ANH-SHORTLIST.png",
      "https://mecreative.com.vn/wp-content/uploads/2026/03/WE-DID-_-KIENLONGBANK-_-ANH-DU-AN-7.png"
    ],
    tags: ["Banking", "Integrated Campaign", "30th Anniversary", "Branding"]
  },
  {
    id: "theZei",
    title: "The Zei",
    category: "TVC",
    thumbnailImage: "https://mecreative.com.vn/wp-content/uploads/2026/03/WE-DID-_-THE-ZEI-_-ANH-DU-AN-2.png",
    heroImage: "https://mecreative.com.vn/wp-content/uploads/2025/08/1-2-1024x573.png",
    description: "Quảng cáo phim cho dự án bất động sản cao cấp",
    longDescription: "ME Creative tự hào đồng hành cùng The Zei hiện thực hóa tinh thần sống tiện nghi, đẳng cấp bằng ngôn ngữ điện ảnh tinh tế. TVC dẫn người xem bước vào nhịp sống trọn vẹn tại khu đô thị.",
    challenge: "Cần truyền tải được sự kết hợp giữa tiện nghi hiện đại, đẳng cấp sống và cảm giác an toàn, thân thương của một gia đình.",
    solution: "Sử dụng hình ảnh đẹp, âm thanh êm dịu, các cảnh quay về đời sống hàng ngày để tạo cảm xúc gần gũi nhưng vẫn giữ sự sang trọng. Mỗi frame được thiết kế cẩn thận để phản ánh giá trị của không gian sống.",
    results: [
      "TVC được chia sẻ rộng rãi trên các nền tảng xã hội",
      "Tăng lượt tham khảo dự án lên 80%",
      "Xây dựng hình ảnh The Zei là biểu tượng của cuộc sống hoàn hảo",
      "Tạo sự khác biệt so với các dự án bất động sản khác"
    ],
    client: "The Zei",
    year: 2024,
    videoUrl: "https://www.youtube.com/embed/w1YMFyYk7fk",
    gallery: [
      "https://mecreative.com.vn/wp-content/uploads/2026/03/WE-DID-_-THE-ZEI-_-ANH-DU-AN-2.png",
      "https://mecreative.com.vn/wp-content/uploads/2025/08/1-2-1024x573.png"
    ],
    tags: ["Real Estate", "TVC", "Lifestyle", "Premium"]
  },
  {
    id: "abbank",
    title: "Ngân Hàng ABBank",
    category: "Khác",
    thumbnailImage: "https://mecreative.com.vn/wp-content/uploads/2026/03/WE-DID-_-ABBANK-_-ANH-SHORTLIST-768x1024.png",
    heroImage: "https://mecreative.com.vn/wp-content/uploads/2026/03/WE-DID-_-ABBANK-_-ANH-SHORTLIST-768x1024.png",
    description: "Bộ phim kể chuyện đồng hành cùng gia đình Việt",
    longDescription: "ME Creative hân hạnh đồng hành cùng ABBank trên hành trình mang hạnh phúc về nhà. Bắt đầu từ những điều nhỏ bé, những câu chuyện và niềm vui dần được lan tỏa khắp nơi. Đồng thời, những thước phim cũng hé lộ nhận diện thương hiệu mới của ABBank.",
    challenge: "Cần thay đổi hình ảnh của ABBank từ một ngân hàng truyền thống sang một ngân hàng gần gũi, hiện đại, hiểu rõ nhu cầu của khách hàng.",
    solution: "Thông qua những câu chuyện nhân văn về gia đình, tình bạn và ước mơ, ME Creative cho thấy ABBank không chỉ là một tổ chức tài chính mà còn là người bạn đồng hành tin cậy.",
    results: [
      "Thay đổi nhận diện thương hiệu thành công",
      "Tăng mức độ gắn kết của khách hàng",
      "Giảm việc rút vốn khách hàng cũ",
      "Tăng tỷ lệ khách hàng mới"
    ],
    client: "ABBank",
    year: 2025,
    videoUrl: "https://www.youtube.com/embed/up2oCYNHKoA",
    gallery: [
      "https://mecreative.com.vn/wp-content/uploads/2026/03/WE-DID-_-ABBANK-_-ANH-SHORTLIST-768x1024.png"
    ],
    tags: ["Banking", "Branding", "Corporate Story", "Emotional Connection"]
  },
  {
    id: "kymco",
    title: "TVC KYMCO",
    category: "TVC",
    thumbnailImage: "https://mecreative.com.vn/wp-content/uploads/2026/03/WE-DID-_-KYMCO-_-ANH-SHORTLIST-768x1024.png",
    heroImage: "https://mecreative.com.vn/wp-content/uploads/2026/03/WE-DID-_-KYMCO-_-ANH-SHORTLIST-768x1024.png",
    description: "Quảng cáo cho dòng xe K-Pipe của KYMCO",
    longDescription: "Trên chặng đường hiện thực hóa ước mơ sẽ có những khó khăn thử thách, sẽ có những giọt nước mắt, sẽ có những lần vấp ngã. Nhưng hành trình của họ sẽ không dừng lại ở đó. Cùng chiếc xe K-Pipe vượt qua những cung đường dài, những địa hình trắc trở.",
    challenge: "KYMCO cần xây dựng hình ảnh của K-Pipe là một chiếc xe thể thao, mạnh mẽ, có khả năng vượt địa hình đa dạng.",
    solution: "Sử dụng các cảnh quay thực tế, những người lái xe đam mê và những câu chuyện cảm xúc về sự kiên trì và mạnh mẽ để xây dựng tính cách của sản phẩm.",
    results: [
      "Tăng nhận biết về K-Pipe lên 60%",
      "Doanh số K-Pipe tăng 75% so với quý trước",
      "Tạo một cộng đồng người dùng K-Pipe mạnh mẽ",
      "TVC được chia sẻ gần 10 triệu lần trên mạng xã hội"
    ],
    client: "KYMCO",
    year: 2025,
    videoUrl: "https://www.youtube.com/embed/NGNoFMWen8k",
    gallery: [
      "https://mecreative.com.vn/wp-content/uploads/2026/03/WE-DID-_-KYMCO-_-ANH-SHORTLIST-768x1024.png"
    ],
    tags: ["Automotive", "TVC", "Lifestyle", "Adventure"]
  },
  {
    id: "bigally",
    title: "Show Hỷ Sắc Lạc Hồng",
    category: "Khác",
    thumbnailImage: "https://mecreative.com.vn/wp-content/uploads/2026/03/WE-DID-_-BIGALLY-_-ANH-SHORTLIST-768x1024.jpg",
    heroImage: "https://mecreative.com.vn/wp-content/uploads/2026/03/WE-DID-_-BIGALLY-_-ANH-SHORTLIST-768x1024.jpg",
    description: "Dự án sản xuất chương trình tôn vinh người phụ nữ Việt",
    longDescription: "Dự án là sự kết hợp giữa tư duy sáng tạo và năng lực sản xuất, hướng đến việc tạo ra một chương trình không chỉ có giá trị truyền thông trong thời điểm hiện tại, mà còn mang lại giá trị lâu dài.",
    challenge: "Tạo ra một chương trình truyền hình chất lượng cao, có khả năng kích thích sự suy tư và cảm xúc của khán giả, đồng thời tôn vinh các giá trị của người phụ nữ Việt Nam.",
    solution: "ME Creative phối hợp với các nhạc sỹ, biên đạo múa, diễn viên để tạo ra một chương trình đầy màu sắc, cảm xúc, kết hợp giữa nghệ thuật truyền thống và hiện đại.",
    results: [
      "Chương trình được phát sóng trên các kênh truyền hình quốc gia",
      "Lượng khán giả coi chương trình lên đến 2 triệu người",
      "Nhận được các lời khen tặng từ các tổ chức xã hội",
      "Tạo một tiền lệ mới trong sản xuất chương trình truyền hình Việt"
    ],
    client: "BigAlly",
    year: 2024,
    videoUrl: "https://www.youtube.com/embed/YQfuwGrLQCw",
    gallery: [
      "https://mecreative.com.vn/wp-content/uploads/2026/03/WE-DID-_-BIGALLY-_-ANH-SHORTLIST-768x1024.jpg"
    ],
    tags: ["Television", "Production", "Entertainment", "Cultural"]
  },
  {
    id: "dailong",
    title: "Phim giới thiệu Dailong Cable",
    category: "Phim doanh nghiệp",
    thumbnailImage: "https://mecreative.com.vn/wp-content/uploads/2026/03/WE-DID-_-DAILONG-_-ANH-SHORTLIST-1-768x1024.png",
    heroImage: "https://mecreative.com.vn/wp-content/uploads/2026/03/WE-DID-_-DAILONG-_-ANH-SHORTLIST-1-768x1024.png",
    description: "Phim giới thiệu hành trình 45 năm của Dailong Cable",
    longDescription: "Me Creative tự hào đồng hành cùng Đại Long Cable lan tỏa hành trình hơn 45 năm đồng hành thắp sáng hạ tầng điện quốc gia – biểu tượng bền vững và chất lượng Việt từ năm 1978.",
    challenge: "Cần diễn tả được sự bền vững, đáng tin cậy và tầm ảnh hưởng lâu dài của Dailong Cable đối với sự phát triển của hạ tầng điện Việt Nam.",
    solution: "Thông qua các hình ảnh về công trường, nhà máy, kỹ sư, phim doanh nghiệp cho thấy sự nỗ lực không ngừng nghỉ của Dailong Cable trong việc cung cấp sản phẩm chất lượng cao.",
    results: [
      "Tăng nhận biết thương hiệu trong ngành công nghiệp",
      "Thu hút các đối tác kinh doanh mới",
      "Xây dựng niềm tin với khách hàng toàn cầu",
      "Được sử dụng trong các sự kiện quốc tế"
    ],
    client: "Dailong Cable",
    year: 2024,
    videoUrl: "https://www.youtube.com/embed/ImFXqi608BA",
    gallery: [
      "https://mecreative.com.vn/wp-content/uploads/2026/03/WE-DID-_-DAILONG-_-ANH-SHORTLIST-1-768x1024.png"
    ],
    tags: ["Corporate", "Industry", "Heritage", "Manufacturing"]
  },
  {
    id: "dongdo",
    title: "Bệnh viện Đông Đô",
    category: "Phim doanh nghiệp",
    thumbnailImage: "https://mecreative.com.vn/wp-content/uploads/2026/03/WE-DID-_-DONG-DO-_-ANH-SHORTLIST-768x1024.png",
    heroImage: "https://mecreative.com.vn/wp-content/uploads/2026/03/WE-DID-_-DONG-DO-_-ANH-SHORTLIST-768x1024.png",
    description: "Phim giới thiệu bệnh viện hiện đại với công nghệ tiên tiến",
    longDescription: "ME Creative tạo ra một phim doanh nghiệp cho Bệnh viện Đông Đô, nhấn mạnh các cơ sở vật chất hiện đại, đội ngũ y bác sỹ chuyên nghiệp, và sự chăm sóc chu đáo đối với bệnh nhân.",
    challenge: "Cần xây dựng niềm tin của bệnh nhân đối với cơ sở y tế, đồng thời nhấn mạnh được các lợi thế cạnh tranh của Bệnh viện Đông Đô.",
    solution: "Sử dụng các hình ảnh về phòng khám hiện đại, thiết bị y tế tiên tiến, và những tương tác ấm áp giữa các bác sỹ và bệnh nhân để tạo cảm giác an tâm.",
    results: [
      "Tăng lượt bệnh nhân mới lên 40%",
      "Nâng cao uy tín của bệnh viện trong cộng đồng",
      "Tạo sự khác biệt so với các bệnh viện tư nhân khác",
      "Phim được phát trên các nền tảng truyền hình"
    ],
    client: "Bệnh viện Đông Đô",
    year: 2024,
    videoUrl: "https://www.youtube.com/embed/t6moSBnHnT4",
    gallery: [
      "https://mecreative.com.vn/wp-content/uploads/2026/03/WE-DID-_-DONG-DO-_-ANH-SHORTLIST-768x1024.png"
    ],
    tags: ["Healthcare", "Corporate", "Modern", "Trust"]
  },
  {
    id: "daiichi",
    title: "Dai-ichi Life Việt Nam 2026",
    category: "Phim doanh nghiệp",
    thumbnailImage: "https://mecreative.com.vn/wp-content/uploads/2026/03/WE-DID-_-DAI-ICHI-2026-_-ANH-SHORTLIST.png",
    heroImage: "https://mecreative.com.vn/wp-content/uploads/2026/03/WE-DID-_-DAI-ICHI-2026-_-ANH-SHORTLIST.png",
    description: "Phim kỷ niệm 19 năm hoạt động của Dai-ichi Life tại Việt Nam",
    longDescription: "ME Creative một lần nữa vinh dự đồng hành cùng Dai-ichi Life Việt Nam trên chặng đường kể tiếp câu chuyện 19 năm đồng hành cùng gia đình Việt. Thước phim với nhịp dựng mạch lạc, tiết chế tạo nên dòng cảm xúc xuyên suốt.",
    challenge: "Cần xây dựng một phim mạnh mẽ về cam kết lâu dài của Dai-ichi Life đối với khách hàng Việt Nam.",
    solution: "Sử dụng câu chuyện về gia đình, bảo vệ tài chính, và sự yên tâm để tạo một phim cảm xúc mạnh mẽ nhưng vẫn giữ được sự chuyên nghiệp và tin tưởng.",
    results: [
      "Tăng gắn kết khách hàng với thương hiệu",
      "Tăng bán phí bảo hiểm lên 35%",
      "Được vinh danh trong các giải thưởng quảng cáo",
      "Tạo mô hình phim doanh nghiệp mới cho ngành bảo hiểm"
    ],
    client: "Dai-ichi Life Việt Nam",
    year: 2026,
    videoUrl: "https://www.youtube.com/embed/AklWtA0CHm4",
    gallery: [
      "https://mecreative.com.vn/wp-content/uploads/2026/03/WE-DID-_-DAI-ICHI-2026-_-ANH-SHORTLIST.png"
    ],
    tags: ["Insurance", "Corporate", "Anniversary", "Family"]
  },
  {
    id: "toquoctrongtim",
    title: "TỔ QUỐC TRONG TIM FILM CONCERT",
    category: "Dự án tích hợp",
    thumbnailImage: "https://mecreative.com.vn/wp-content/uploads/2026/03/WE-DID-_-TO-QUOC-TRONG-TIM-_-ANH-DU-AN-1-1024x390.jpg",
    heroImage: "https://mecreative.com.vn/wp-content/uploads/2026/03/WE-DID-_-TO-QUOC-TRONG-TIM-_-ANH-DU-AN-1-1024x390.jpg",
    description: "Sự kiện lớn kết hợp phim và âm nhạc tôn vinh tổ quốc",
    longDescription: "ME Creative tổ chức một sự kiện kết hợp giữa phim điện ảnh, concert âm nhạc và các hoạt động văn hóa để tôn vinh tình yêu đất nước. Đây là một dự án tích hợp lớn, kết hợp sức mạnh của nhiều lĩnh vực sáng tạo.",
    challenge: "Tạo ra một sự kiện có thể thu hút hàng chục nghìn khán giả, kết hợp giữa các yếu tố điện ảnh, âm nhạc, và sự kiện trực tiếp một cách hài hoà.",
    solution: "ME Creative điều phối một đội ngũ lớn gồm đạo diễn phim, nhạc sỹ, biên đạo sân khấu, để tạo ra một trải nghiệm tổng thể không thể quên.",
    results: [
      "Thu hút hơn 50,000 khán giả trực tiếp",
      "Phát trực tiếp trên 3 kênh truyền hình quốc gia",
      "Tương tác trên mạng xã hội vượt 20 triệu lượt",
      "Giành Giải vàng tại các cuộc thi sự kiện quốc tế"
    ],
    client: "Ngoài chính phủ",
    year: 2024,
    videoUrl: "https://www.youtube.com/embed/wbvdixnP298",
    gallery: [
      "https://mecreative.com.vn/wp-content/uploads/2026/03/WE-DID-_-TO-QUOC-TRONG-TIM-_-ANH-DU-AN-1-1024x390.jpg"
    ],
    tags: ["Event", "Integrated", "Cultural", "Concert", "Patriotic"]
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projectsData.find(project => project.id === id);
};

export const getAllProjects = (): Project[] => {
  return projectsData;
};
