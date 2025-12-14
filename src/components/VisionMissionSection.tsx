"use client";

import { motion } from "framer-motion";
import { Target, Rocket, CheckCircle2 } from "lucide-react";

const missionItems = [
  "Meningkatkan kualitas pelayanan publik berbasis digital.",
  "Memperkuat tata kelola perizinan yang transparan dan akuntabel.",
  "Mendorong pertumbuhan investasi yang kondusif dan berdaya saing.",
  "Menjamin kepastian hukum dalam pelayanan perizinan dan non-perizinan.",
  "Mempercepat proses layanan melalui inovasi dan integrasi data.",
];

export function VisionMissionSection() {
  return (
    <section id="visi-misi" className="py-20 bg-gradient-to-b from-[#f8fafc] to-white relative overflow-hidden">
      <div className="absolute inset-0 pattern-grid opacity-50" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#0a2b5e]/10 text-[#0a2b5e] rounded-full text-sm font-medium mb-4">
            Arah & Tujuan
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2b5e]">Visi & Misi</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37] to-[#f5e8b0] rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform" />
            <div className="relative bg-gradient-to-br from-[#d4af37] to-[#c9a430] rounded-3xl p-8 md:p-10 text-[#0a2b5e] h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/30 rounded-2xl flex items-center justify-center">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">VISI</h3>
              </div>
              <p className="text-lg md:text-xl font-medium leading-relaxed">
                &ldquo;Terwujudnya pelayanan perizinan dan penanaman modal yang profesional, transparan, efektif, dan berorientasi pada kemajuan investasi daerah.&rdquo;
              </p>
              <div className="absolute bottom-4 right-4 opacity-10">
                <Target className="w-32 h-32" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a2b5e] to-[#1e4a8f] rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform" />
            <div className="relative bg-gradient-to-br from-[#0a2b5e] to-[#1e4a8f] rounded-3xl p-8 md:p-10 text-white h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                  <Rocket className="w-8 h-8 text-[#d4af37]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">MISI</h3>
              </div>
              <ul className="space-y-4 stagger-animation">
                {missionItems.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#d4af37] mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="absolute bottom-4 right-4 opacity-10">
                <Rocket className="w-32 h-32" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
