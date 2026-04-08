export interface Service {
    id: string;
    title: string;
    icon: string;
    shortDescription: string;
    description: string;
    longDescription: string;
    benefits: string[];
    deliverables: string[];
    process: string[];
    features?: Array<{ icon: string; title: string; description: string }>;
    whatIncluded?: Array<{ title: string; description: string }>;
    faqs?: Array<{ question: string; answer: string }>;
    heroImage: string;
    gallery: string[];
    tags: string[];
}

export const servicesData: Service[] = [
    {
        id: "me-commerce",
        title: "ME Commerce",
        icon: "Megaphone",
        shortDescription: "Xây dựng kế hoạch tổng thể và các giải pháp thương mại điện tử cho các doanh nghiệp bán lẻ trên các nền tảng, sàn thương mại điện tử.",
        description: "Dịch vụ ME Commerce cung cấp giải pháp toàn diện cho các doanh nghiệp bán lẻ muốn phát triển trên các nền tảng thương mại điện tử.",
        longDescription: "ME Commerce là giải pháp toàn diện dành cho các doanh nghiệp bán lẻ muốn khẳng định vị thế trên thị trường thương mại điện tử. Chúng tôi không chỉ giúp bạn xây dựng kế hoạch chiến lược mà còn tối ưu hoá sự hiện diện trên các sàn thương mại điện tử lớn như Shopee, Lazada, Tiktok Shop và các nền tảng khác. Từ quản lý sản phẩm, tối ưu hoá giá cả, phân tích cạnh tranh đến chiến lược marketing trên từng kênh, ME Commerce đảm bảo doanh số bán hàng tăng vọt.",
        benefits: [
            "Tăng doanh số bán hàng trên các nền tảng TMĐT",
            "Phát triển chiến lược bán hàng đa kênh",
            "Tối ưu hoá chi phí quảng cáo",
            "Xây dựng thương hiệu mạnh trên TMĐT",
            "Phân tích dữ liệu và tối ưu hoá hiệu suất"
        ],
        deliverables: [
            "Chiến lược bán hàng TMĐT toàn diện",
            "Tối ưu hoá danh sách sản phẩm",
            "Chiến lược định giá cạnh tranh",
            "Kế hoạch marketing theo kênh",
            "Báo cáo phân tích và khuyến nghị hàng tháng"
        ],
        process: [
            "Phân tích hiện trạng kinh doanh và thị trường",
            "Xây dựng chiến lược bán hàng TMĐT",
            "Tối ưu hoá hồ sơ và sản phẩm",
            "Triển khai campaign marketing",
            "Theo dõi và tối ưu hoá hiệu suất"
        ],
        heroImage: "https://mecreative.com.vn/wp-content/uploads/2026/03/WE-DID-_-KIENLONGBANK-_-ANH-DU-AN-7.png",
        gallery: [
            "https://mecreative.com.vn/wp-content/uploads/2026/03/WE-DID-_-KIENLONGBANK-_-ANH-SHORTLIST.png",
            "https://mecreative.com.vn/wp-content/uploads/2026/03/WE-DID-_-KIENLONGBANK-_-ANH-DU-AN-7.png"
        ],
        tags: ["Commerce", "E-commerce", "Sales", "Marketing", "Strategy"]
    },
    {
        id: "me-talents",
        title: "Me Talents",
        icon: "Camera",
        shortDescription: "Hệ thống talent độc quyền kết hợp giải pháp Influencer Marketing sáng tạo, giúp thương hiệu lan tỏa mạnh mẽ và xây dựng cộng đồng người hâm mộ trung thành.",
        description: "Me Talents là hệ thống talent độc quyền của ME Creative, cung cấp các giải pháp Influencer Marketing sáng tạo và hiệu quả.",
        longDescription: "Me Talents là hệ thống tuyển chọn và quản lý talent độc quyền của ME Creative. Chúng tôi sở hữu cơ sở dữ liệu khổng lồ các influencer, content creator, và talent nổi bật trên các nền tảng mạng xã hội. Từ micro-influencer đến macro-influencer, từ giới trẻ đến người trưởng thành, ME Talents giúp bạn tìm ra những cái tên phù hợp nhất với thương hiệu của mình. Chúng tôi không chỉ kết nối mà còn quản lý toàn bộ quy trình hợp tác, từ thương lượng, tạo nội dung đến theo dõi hiệu suất.",
        benefits: [
            "Kết nối với những influencer phù hợp nhất",
            "Tăng tỷ lệ tương tác và reach của nội dung",
            "Xây dựng cộng đồng người hâm mộ trung thành",
            "Giảm chi phí influencer marketing",
            "Quản lý toàn bộ quy trình hợp tác"
        ],
        deliverables: [
            "Tìm kiếm và đề xuất influencer",
            "Thương lượng hợp đồng",
            "Quản lý tạo nội dung",
            "Kiểm duyệt nội dung",
            "Theo dõi kết quả campaigns"
        ],
        process: [
            "Phân tích mục tiêu campaign",
            "Tìm kiếm influencer phù hợp",
            "Thương lượng điều khoản hợp tác",
            "Tư vấn nội dung",
            "Theo dõi và báo cáo kết quả"
        ],
        heroImage: "https://mecreative.com.vn/wp-content/uploads/2026/03/WE-DID-_-THE-ZEI-_-ANH-DU-AN-2.png",
        gallery: [
            "https://mecreative.com.vn/wp-content/uploads/2026/03/WE-DID-_-THE-ZEI-_-ANH-DU-AN-2.png",
            "https://mecreative.com.vn/wp-content/uploads/2025/08/1-2-1024x573.png"
        ],
        tags: ["Influencer", "Marketing", "Talent", "Social Media", "Content"]
    },
    {
        id: "truyen-thong-tiem-thi",
        title: "Truyền Thông Tiếp Thị",
        icon: "Palette",
        shortDescription: "Xây dựng chiến lược truyền thông sáng tạo, đa kênh và nhất quán – từ IMC, branding, ra mắt sản phẩm đến social media.",
        description: "Dịch vụ Truyền Thông Tiếp Thị của chúng tôi giúp các thương hiệu xây dựng chiến lược truyền thông toàn diện và ấn tượng.",
        longDescription: "Truyền Thông Tiếp Thị là dịch vụ cốt lõi của ME Creative. Chúng tôi giúp các thương hiệu xây dựng chiến lược truyền thông sáng tạo, đa kênh và nhất quán. Từ việc thiết lập bộ nhận diện thương hiệu, phát triển thông điệp chính đến triển khai các chiến dịch tích hợp trên nhiều nền tảng, ME Creative đảm bảo thương hiệu của bạn nổi bật giữa trăng trăm đối thủ. Chúng tôi sử dụng dữ liệu, insight thị trường và sáng tạo để tạo ra các chiến dịch có tác động thực.",
        benefits: [
            "Xây dựng hoặc nâng cấp hình ảnh thương hiệu",
            "Tăng nhận biết thương hiệu",
            "Xây dựng mối quan hệ tốt với khách hàng",
            "Tăng doanh số bán hàng",
            "Cạnh tranh hiệu quả trên thị trường"
        ],
        deliverables: [
            "Chiến lược truyền thông toàn diện",
            "Bộ nhận diện thương hiệu",
            "Nội dung marketing đa kênh",
            "Kế hoạch triển khai campaigns",
            "Báo cáo đánh giá hiệu quả"
        ],
        process: [
            "Phân tích thương hiệu và thị trường",
            "Phát triển chiến lược lõi",
            "Thiết kế bộ nhận diện",
            "Tạo nội dung và campaigns",
            "Triển khai và đo lường kết quả"
        ],
        features: [
            {
                icon: "BarChart",
                title: "Creative Analysis",
                description: "We got into this business to tell compelling stories, collaborate with great thinkers, and connect ideas with people."
            },
            {
                icon: "Cube",
                title: "Design & Scotches",
                description: "We got into this business to tell compelling stories, collaborate with great thinkers, and connect ideas with people."
            },
            {
                icon: "Sliders",
                title: "Prototype & Wireframing",
                description: "We got into this business to tell compelling stories, collaborate with great thinkers, and connect ideas with people."
            },
            {
                icon: "Film",
                title: "Delivery & Deploy",
                description: "We got into this business to tell compelling stories, collaborate with great thinkers, and connect ideas with people."
            }
        ],
        whatIncluded: [
            {
                title: "Concept Development",
                description: "We got into this business to tell compelling stories, collaborate with great thinkers, and connect ideas with people."
            },
            {
                title: "Scriptwriting",
                description: "Our talented writers create engaging scripts that capture your message and translate it into a visual masterpiece."
            },
            {
                title: "Professional Filming",
                description: "Using state-of-the-art equipment, our filmmakers capture every moment with precision and artistry, ensuring top-tier quality in every shot."
            },
            {
                title: "Advanced Editing",
                description: "Our editing team weaves together visuals, sound, and effects to create a cohesive and impactful final product."
            }
        ],
        faqs: [
            {
                question: "How Much Time Does it Take to Make an Animated Video?",
                answer: "Several factors affect the time needed by our production team to create the video. Some include: Animation Style, Video Duration, Complexity, for example, the scene and the actions the characters take, Research Required, etc. We usually need about 4 to 6 weeks to complete an explainer video of about 1.5 minutes."
            },
            {
                question: "Can You Speed Up the Process?",
                answer: "Several factors affect the time needed by our production team to create the video. Some include: Animation Style, Video Duration, Complexity, for example, the scene and the actions the characters take, Research Required, etc. We usually need about 4 to 6 weeks to complete an explainer video of about 1.5 minutes."
            },
            {
                question: "What are the Steps Involved in Creating a Video?",
                answer: "Several factors affect the time needed by our production team to create the video. Some include: Animation Style, Video Duration, Complexity, for example, the scene and the actions the characters take, Research Required, etc. We usually need about 4 to 6 weeks to complete an explainer video of about 1.5 minutes."
            },
            {
                question: "How Many Revisions Can I Make?",
                answer: "Several factors affect the time needed by our production team to create the video. Some include: Animation Style, Video Duration, Complexity, for example, the scene and the actions the characters take, Research Required, etc. We usually need about 4 to 6 weeks to complete an explainer video of about 1.5 minutes."
            },
            {
                question: "Who is Involved in My Project?",
                answer: "Several factors affect the time needed by our production team to create the video. Some include: Animation Style, Video Duration, Complexity, for example, the scene and the actions the characters take, Research Required, etc. We usually need about 4 to 6 weeks to complete an explainer video of about 1.5 minutes."
            }
        ],
        heroImage: "https://mecreative.com.vn/wp-content/uploads/2026/03/WE-DID-_-ABBANK-_-ANH-SHORTLIST-768x1024.png",
        gallery: [
            "https://mecreative.com.vn/wp-content/uploads/2026/03/WE-DID-_-ABBANK-_-ANH-SHORTLIST-768x1024.png"
        ],
        tags: ["Communication", "Marketing", "Branding", "Strategy", "Digital"]
    },
    {
        id: "san-xuat-noi-dung",
        title: "Sản Xuất Nội Dung",
        icon: "Globe",
        shortDescription: "Sản xuất trọn gói các loại nội dung: TVC, Music Video (MV), Phim doanh nghiệp, 2D/3D animation, Key Visual, bộ ảnh sản phẩm, nội dung trên các kênh MXH.",
        description: "Dịch vụ Sản Xuất Nội Dung cung cấp các sản phẩm nội dung chất lượng cao cho các nền tảng khác nhau.",
        longDescription: "Sản Xuất Nội Dung là dịch vụ sáng tạo và kỹ thuật của ME Creative. Chúng tôi sở hữu đội ngũ các nhà làm phim, nhà thiết kế, nhà sản xuất âm thanh tài năng. Từ bộ phim quảng cáo TVC chuyên nghiệp, Music Video sôi động, phim doanh nghiệp cảm động đến các video nội dung cho mạng xã hội, chúng tôi sản xuất mọi thứ với tiêu chuẩn quốc tế. Không chỉ video, chúng tôi còn tạo ra các Key Visual, các bộ ảnh sản phẩm, graphics động và nội dung hình ảnh tĩnh chất lượng cao.",
        benefits: [
            "Nội dung chất lượng cao, chuyên nghiệp",
            "Tăng tỷ lệ tương tác trên mạng xã hội",
            "Xây dựng danh tiếng thương hiệu",
            "Tiết kiệm chi phí sản xuất",
            "Nội dung tối ưu cho từng nền tảng"
        ],
        deliverables: [
            "Video quảng cáo TVC",
            "Music Video hoặc phim doanh nghiệp",
            "Nội dung cho mạng xã hội",
            "2D/3D animation",
            "Key Visual và bộ ảnh sản phẩm"
        ],
        process: [
            "Viết kịch bản và lên ý tưởng",
            "Lên kế hoạch sản xuất",
            "Quay phim/chụp ảnh",
            "Chỉnh sửa - post production",
            "Tối ưu hoá cho các nền tảng"
        ],
        heroImage: "https://mecreative.com.vn/wp-content/uploads/2026/03/WE-DID-_-KYMCO-_-ANH-SHORTLIST-768x1024.png",
        gallery: [
            "https://mecreative.com.vn/wp-content/uploads/2026/03/WE-DID-_-KYMCO-_-ANH-SHORTLIST-768x1024.png"
        ],
        tags: ["Content Production", "Video", "Design", "Animation", "Photography"]
    }
];

export const getServiceById = (id: string): Service | undefined => {
    return servicesData.find(service => service.id === id);
};

export const getAllServices = (): Service[] => {
    return servicesData;
};
