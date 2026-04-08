export interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  bio: string;
  description: string;
  expertise?: string[];
}

export const teamData: TeamMember[] = [
  {
    id: "manh-nguyen",
    name: "Mạnh Nguyễn",
    position: "Founder / Executive Producer",
    image: "https://mecreative.com.vn/wp-content/uploads/2025/10/Manh-Nguyen-1.png",
    bio: "Nhà sản xuất dày dặn kinh nghiệm với sự thấu hiểu đa thể loại, một tổng thể hài hoà và cân đối trong bức tranh ME Creative",
    description: "Với gần 20 năm kinh nghiệm trong lĩnh vực sản xuất phim và nội dung sáng tạo, Mạnh Nguyễn là một trong những nhà sản xuất hàng đầu tại Việt Nam. Anh có khả năng hiểu sâu sắc nhu cầu của thị trường và tạo ra các giải pháp sáng tạo đáp ứng mục tiêu kinh doanh.",
    expertise: ["Video Production", "Project Management", "Creative Direction", "Client Relations"]
  },
  {
    id: "tuan-hann",
    name: "Tuấn Hann",
    position: "Founder / Executive Creative Director",
    image: "https://mecreative.com.vn/wp-content/uploads/2025/10/Tuan-Hann-scaled.jpg",
    bio: "Người kể chuyện bằng hình ảnh sáng tạo và độc bản - Người gieo mộng mơ và tin vào những điều tốt đẹp",
    description: "Tuấn Hann là một Creative Director tài năng với đam mê câu chuyện và hình ảnh. Anh luôn tìm cách để kết nối cảm xúc của khán giả thông qua các chiến dịch sáng tạo độc đáo. Các công việc của anh luôn mang một dây chuyên nghiệp và đầy cảm xúc.",
    expertise: ["Creative Concept", "Visual Design", "Storytelling", "Brand Strategy"]
  },
  {
    id: "ngoc-anh-trinh",
    name: "Ngọc Ánh Trịnh",
    position: "Founder / Planning Director",
    image: "https://mecreative.com.vn/wp-content/uploads/2025/10/Ngoc-Anh-Trinh.png",
    bio: "Thấu hiểu thị trường, nhạy bén trong việc truyền tải những ý tưởng truyền thông có chiều sâu và sức lan toả",
    description: "Với nền tảng mạnh mẽ trong lĩnh vực tiếp thị chiến lược và lập kế hoạch truyền thông, Ngọc Ánh Trịnh luôn dẫn đầu trong việc xác định các cơ hội thị trường và phát triển các chiến lược toàn diện để đạt được mục tiêu của khách hàng.",
    expertise: ["Strategic Planning", "Market Research", "Campaign Development", "Media Strategy"]
  },
  {
    id: "ngo-quang-tung",
    name: "Ngô Quang Tùng",
    position: "Founder / Executive Producer",
    image: "https://mecreative.com.vn/wp-content/uploads/2025/10/Tung-Ngo-3.png",
    bio: "Giám tuyển của các triển lãm đương đại và nghệ thuật thị giác, với dự cảm đặc biệt về nghệ thuật",
    description: "Ngô Quang Tùng là một nhà sáng tạo đa lĩnh vực với kinh nghiệm sâu rộng trong nghệ thuật đương đại, thiết kế và sản xuất. Anh mang đến một góc nhìn độc đáo và một cảm hứng sáng tạo không giới hạn cho tất cả các dự án của ME Creative.",
    expertise: ["Visual Arts", "Exhibition Design", "Contemporary Art", "Production Design"]
  }
];

export const getTeamMemberById = (id: string): TeamMember | undefined => {
  return teamData.find(member => member.id === id);
};

export const getAllTeamMembers = (): TeamMember[] => {
  return teamData;
};
