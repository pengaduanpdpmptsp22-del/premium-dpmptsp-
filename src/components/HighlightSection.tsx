"use client";

import { motion } from "framer-motion";
import { Zap, Eye, Monitor } from "lucide-react";

const highlights = [
  {
    icon: Zap,
    title: "Pelayanan Cepat",
    description: "Komitmen pelayanan terstandar sesuai ketentuan OSS-RBA.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Eye,
    title: "Transparansi & Kepastian",
    description: "Informasi syarat, alur, dan layanan tersedia jelas dan dapat diakses publik.",
    color: "from-[#d4af37] to-[#f5e8b0]",
  },
  {
    icon: Monitor,
    title: "Terintegrasi Digital",
    description: "Layanan NIB, OSS-RBA, dan berbagai izin sektor dalam satu portal.",
    color: "from-emerald-500 to-emerald-600",
  },
];

export function HighlightSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#f8fafc] relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#0a2b5e]/10 text-[#0a2b5e] rounded-full text-sm font-medium mb-4">
            Keunggulan Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2b5e] mb-4">
            Mengapa Memilih DPMPTSP Lembata?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami berkomitmen memberikan pelayanan terbaik untuk masyarakat dan pelaku usaha
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group"
            >
              <div className="relative glassmorphism-card rounded-2xl p-8 h-full hover-lift cursor-default overflow-hidden">
                <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-[#0a2b5e] via-[#d4af37] to-[#0a2b5e] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-border">
                  <div className="w-full h-full bg-white rounded-2xl" />
                </div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#0a2b5e] mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>

                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-r from-[#0a2b5e]/5 to-[#d4af37]/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
