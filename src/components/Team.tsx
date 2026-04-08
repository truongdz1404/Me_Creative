import React from "react";
import { motion } from "motion/react";

const team = [
  {
    name: "Ngọc Ánh Trịnh",
    position: "Founder / Executive Producer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
    quote: "Thấu hiểu thị trường, nhạy bén trong việc truyền tải những ý tưởng truyền thông có chiều sâu và sức lan toả.",
  },
  {
    name: "Ngô Quang Tùng",
    position: "Founder / Executive Producer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    quote: "Giám tuyển của các triển lãm đương đại và nghệ thuật thị giác, với dự cảm đặc biệt về nghệ thuật.",
  },
  {
    name: "Mạnh Nguyễn",
    position: "Founder / Executive Creative Director",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
    quote: "Nhà sản xuất dày dặn kinh nghiệm với sự thấu hiểu đa thể loại, một tổng thể hài hoà và cân đối.",
  },
  {
    name: "Tuấn Hann",
    position: "Founder / Planning Director",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80",
    quote: "Người kể chuyện bằng hình ảnh sáng tạo và độc bản - Người gieo mộng mơ và tin vào những điều tốt đẹp.",
  },
];

export const Team = () => {
  return (
    <section id="team" className="py-28 px-6 bg-secondary-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-accent-gold text-sm font-bold tracking-widest uppercase mb-4">Đội ngũ</h2>
          <h3 className="text-4xl md:text-6xl font-heading font-bold">NHỮNG NGƯỜI <span className="text-accent-gold">DẪN ĐẦU</span></h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-black rounded-xl overflow-hidden border border-white/5 hover:border-accent-gold/30 transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 text-center">
                <h4 className="text-xl font-heading font-bold mb-2">{member.name}</h4>
                <p className="text-accent-gold text-sm font-bold tracking-widest uppercase mb-4">
                  {member.position}
                </p>
                <p className="text-secondary-medium italic text-sm font-body">
                  "{member.quote}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
