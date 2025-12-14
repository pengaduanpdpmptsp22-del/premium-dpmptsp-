"use client";

import { motion } from "framer-motion";
import { ClipboardList, BarChart3, TrendingUp, Users, Award, ExternalLink } from "lucide-react";

const stats = [
  { label: "Responden", value: "1,250+", icon: Users, color: "from-blue-500 to-blue-600" },
  { label: "Indeks Kepuasan", value: "3.45", icon: Award, color: "from-[#d4af37] to-[#c9a430]" },
  { label: "Kategori", value: "Baik", icon: TrendingUp, color: "from-emerald-500 to-emerald-600" },
  { label: "Periode", value: "2024", icon: BarChart3, color: "from-purple-500 to-purple-600" },
];

export function SKMSection() {
  return (
    <section id="skm" className="py-20 bg-gradient-to-b from-white to-[#f8fafc] relative overflow-hidden">
      <div className="absolute inset-0 pattern-grid opacity-30" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#d4af37]/20 text-[#0a2b5e] rounded-full text-sm font-medium mb-4">
            SKM
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2b5e] mb-4">Survei Kepuasan Masyarakat</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Sesuai PermenPAN RB, kami berkomitmen untuk transparansi dan peningkatan kualitas pelayanan publik
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glassmorphism-card rounded-3xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0a2b5e] to-[#1e4a8f] rounded-2xl flex items-center justify-center">
                <ClipboardList className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0a2b5e]">Isi Survei SKM</h3>
                <p className="text-gray-600 text-sm">Bantu kami meningkatkan pelayanan</p>
              </div>
            </div>

            <p className="text-gray-600 mb-6">
              Survei Kepuasan Masyarakat (SKM) dilakukan untuk mengukur tingkat kepuasan masyarakat terhadap pelayanan yang diberikan oleh DPMPTSP Kabupaten Lembata. Partisipasi Anda sangat berarti bagi peningkatan kualitas layanan kami.
            </p>

            <button className="w-full py-4 bg-gradient-to-r from-[#d4af37] to-[#f5e8b0] text-[#0a2b5e] rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all hover:scale-[1.02] animate-pulse-glow">
              <ClipboardList className="w-5 h-5" />
              Isi Survei SKM
              <ExternalLink className="w-4 h-4" />
            </button>

            <p className="text-center text-xs text-gray-500 mt-4 italic">
              * Link SKM akan diaktifkan setelah formulir resmi tersedia.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glassmorphism-card rounded-3xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#d4af37] to-[#c9a430] rounded-2xl flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-[#0a2b5e]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0a2b5e]">Hasil & Statistik SKM</h3>
                <p className="text-gray-600 text-sm">Transparansi pelayanan publik</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-[#f8fafc] rounded-xl p-4 text-center group hover:bg-white hover:shadow-lg transition-all"
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform`}>
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-2xl font-bold text-[#0a2b5e]">{stat.value}</p>
                  <p className="text-xs text-gray-500">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-[#0a2b5e] to-[#1e4a8f] rounded-xl p-4 text-white">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm">Progress Kepuasan</span>
                <span className="font-bold">86.25%</span>
              </div>
              <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "86.25%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-[#d4af37] to-[#f5e8b0] rounded-full"
                />
              </div>
            </div>

            <button className="w-full mt-4 py-3 border-2 border-[#0a2b5e] text-[#0a2b5e] rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-[#0a2b5e] hover:text-white transition-all">
              <BarChart3 className="w-5 h-5" />
              Lihat Hasil SKM Lengkap
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#0a2b5e] to-[#1e4a8f] rounded-3xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Komitmen Pelayanan Prima</h3>
          <p className="text-white/80 max-w-2xl mx-auto mb-6">
            DPMPTSP Kabupaten Lembata berkomitmen untuk terus meningkatkan kualitas pelayanan berdasarkan masukan dan evaluasi dari masyarakat. Setiap feedback sangat berharga bagi kami.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-6 py-3 bg-white/10 rounded-full backdrop-blur-sm">
              <span className="text-[#d4af37] font-bold">Cepat</span>
            </div>
            <div className="px-6 py-3 bg-white/10 rounded-full backdrop-blur-sm">
              <span className="text-[#d4af37] font-bold">Transparan</span>
            </div>
            <div className="px-6 py-3 bg-white/10 rounded-full backdrop-blur-sm">
              <span className="text-[#d4af37] font-bold">Akuntabel</span>
            </div>
            <div className="px-6 py-3 bg-white/10 rounded-full backdrop-blur-sm">
              <span className="text-[#d4af37] font-bold">Profesional</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
