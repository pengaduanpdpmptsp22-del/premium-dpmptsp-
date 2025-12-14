"use client";

import { motion } from "framer-motion";
import { Building2, Award, Users, FileCheck } from "lucide-react";

export function ProfileSection() {
  return (
    <section id="profil" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#0a2b5e]/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#d4af37]/5 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-[#d4af37]/20 text-[#0a2b5e] rounded-full text-sm font-medium mb-4">
              Tentang Kami
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a2b5e] mb-6 leading-tight">
              Profil Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu Kabupaten Lembata
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu (DPMPTSP) Kabupaten Lembata merupakan perangkat daerah yang bertugas menyelenggarakan pelayanan perizinan, penanaman modal, serta pelayanan non-perizinan secara terpadu.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              DPMPTSP berkomitmen memberikan pelayanan yang cepat, tepat, transparan, akuntabel, dan sesuai ketentuan peraturan perundang-undangan, untuk mendukung iklim investasi yang kondusif dan pembangunan daerah yang berkelanjutan.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-10">
              {[
                { icon: Award, label: "Pelayanan Berkualitas" },
                { icon: Users, label: "Tim Profesional" },
                { icon: FileCheck, label: "Proses Transparan" },
                { icon: Building2, label: "Fasilitas Modern" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-[#f8fafc] rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-[#0a2b5e] flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-[#0a2b5e]">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0a2b5e] to-[#1e4a8f] rounded-3xl transform rotate-3" />
              <div className="relative bg-gradient-to-br from-[#1e4a8f] to-[#0a2b5e] rounded-3xl p-8 text-white">
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center animate-float">
                      <Building2 className="w-16 h-16 text-[#d4af37]" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#d4af37] rounded-full animate-pulse" />
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "2018", label: "Tahun Berdiri" },
                    { value: "50+", label: "Pegawai Aktif" },
                    { value: "100+", label: "Jenis Layanan" },
                    { value: "24/7", label: "Online Support" },
                  ].map((stat, idx) => (
                    <div key={idx} className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm">
                      <p className="text-2xl md:text-3xl font-bold text-[#d4af37]">{stat.value}</p>
                      <p className="text-sm text-white/70">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-4 h-4 bg-[#d4af37]/20 rounded-full animate-float"
                  style={{
                    top: `${20 + i * 30}%`,
                    left: `${10 + i * 20}%`,
                    animationDelay: `${i * 0.5}s`,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
