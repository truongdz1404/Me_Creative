import React from "react";
import { motion } from "motion/react";
import { getAllTeamMembers } from "../data/team";

export const Team = () => {
  const team = getAllTeamMembers();

  return (
    <section id="team" className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-accent-gold text-sm font-bold tracking-widest uppercase mb-4">Đội ngũ</h2>
          <h3 className="text-4xl md:text-6xl font-heading font-bold text-gray-900">NHỮNG NGƯỜI <span className="text-accent-gold">DẪN ĐẦU</span></h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-accent-gold/50 hover:shadow-lg transition-all duration-300"
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
                <h4 className="text-xl font-heading font-bold mb-2 text-gray-900">{member.name}</h4>
                <p className="text-accent-gold text-sm font-bold tracking-widest uppercase mb-4">
                  {member.position}
                </p>
                <p className="text-gray-600 italic text-sm font-body">
                  "{member.bio}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
