"use client";

import { motion } from "framer-motion";
import { Calendar, ChevronDown, BarChart3, FileText, TrendingUp } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const news = [
  {
    title: "Sosialisasi OSS-RBA untuk Pelaku UMKM",
    date: "15 Des 2024",
    excerpt: "DPMPTSP Kabupaten Lembata mengadakan sosialisasi sistem OSS-RBA untuk pelaku UMKM di wilayah Lembata.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
  },
  {
    title: "Pelayanan Perizinan Semakin Mudah",
    date: "10 Des 2024",
    excerpt: "Dengan sistem digital terpadu, masyarakat dapat mengajukan perizinan dari mana saja tanpa harus datang ke kantor.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=250&fit=crop",
  },
  {
    title: "Capaian Pelayanan Tahun 2024",
    date: "5 Des 2024",
    excerpt: "DPMPTSP berhasil memproses lebih dari 500 perizinan dengan tingkat kepuasan masyarakat mencapai 98%.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
  },
];

const agenda = [
  { title: "Rapat Koordinasi Pelayanan Perizinan", date: "20 Des 2024", status: "upcoming" },
  { title: "Workshop Digitalisasi Layanan Publik", date: "25 Des 2024", status: "upcoming" },
  { title: "Evaluasi Kinerja Pelayanan Q4", date: "28 Des 2024", status: "upcoming" },
];

const faq = [
  {
    q: "Apa itu NIB?",
    a: "NIB (Nomor Induk Berusaha) adalah identitas pelaku usaha yang diterbitkan melalui sistem OSS setelah melakukan pendaftaran.",
  },
  {
    q: "Berapa lama proses layanan?",
    a: "Waktu proses bervariasi sesuai jenis layanan, umumnya 1-14 hari kerja sesuai SOP.",
  },
  {
    q: "Bagaimana cara ajukan SIP?",
    a: "Pengajuan SIP dapat dilakukan melalui formulir online di website ini atau datang langsung ke kantor DPMPTSP.",
  },
  {
    q: "Apa saja syarat NIB?",
    a: "Syarat NIB berbeda untuk perseorangan, koperasi, dan badan usaha. Lihat detail di menu Persyaratan NIB.",
  },
  {
    q: "Bagaimana menghubungi DPMPTSP?",
    a: "Hubungi via telepon/WA 0821-9383-8156 atau datang ke kantor di Jln. Trans Lembata, Lewoleba Timur.",
  },
];

const transparansi = [
  { title: "Laporan SKM", icon: BarChart3, value: "98%" },
  { title: "Grafik IKM", icon: TrendingUp, value: "Baik" },
  { title: "Laporan Realisasi", icon: FileText, value: "2024" },
  { title: "Laporan Pelayanan", icon: FileText, value: "Q4" },
];

export function InformationSection() {
  return (
    <section id="informasi" className="py-20 bg-gradient-to-b from-[#f8fafc] to-white relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots opacity-20" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#0a2b5e]/10 text-[#0a2b5e] rounded-full text-sm font-medium mb-4">
            Info Terkini
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2b5e]">Informasi & Publikasi</h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-[#0a2b5e] mb-6 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#d4af37]" />
              Berita & Update
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {news.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="glassmorphism-card rounded-2xl overflow-hidden hover-lift group cursor-pointer"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute bottom-3 left-3 text-xs text-white/90 bg-[#0a2b5e]/80 px-2 py-1 rounded">
                      {item.date}
                    </span>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-[#0a2b5e] mb-2 line-clamp-2">{item.title}</h4>
                    <p className="text-sm text-gray-600 line-clamp-2">{item.excerpt}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#0a2b5e] mb-6 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#d4af37]" />
              Agenda & Kegiatan
            </h3>
            <div className="space-y-4">
              {agenda.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="relative">
                    <div className="w-3 h-3 rounded-full bg-[#d4af37]" />
                    {idx < agenda.length - 1 && (
                      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-[#d4af37]/30" />
                    )}
                  </div>
                  <div className="glassmorphism-card rounded-xl p-4 flex-1">
                    <p className="font-medium text-[#0a2b5e] text-sm">{item.title}</p>
                    <p className="text-xs text-gray-500 mt-1">{item.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-[#0a2b5e] mb-6 flex items-center gap-2">
              <ChevronDown className="w-5 h-5 text-[#d4af37]" />
              FAQ - Pertanyaan Umum
            </h3>
            <Accordion type="single" collapsible className="space-y-3">
              {faq.map((item, idx) => (
                <AccordionItem
                  key={idx}
                  value={`faq-${idx}`}
                  className="glassmorphism-card rounded-xl border-none overflow-hidden"
                >
                  <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-[#0a2b5e]/5 transition-colors text-left">
                    <span className="font-medium text-[#0a2b5e] text-sm">{item.q}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-3 text-sm text-gray-600">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-[#0a2b5e] mb-6 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-[#d4af37]" />
              Transparansi Publik
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {transparansi.map((item, idx) => (
                <div key={idx} className="glassmorphism-card rounded-2xl p-6 hover-lift cursor-default group">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0a2b5e] to-[#1e4a8f] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-2xl font-bold text-[#d4af37]">{item.value}</p>
                  <p className="text-sm text-gray-600">{item.title}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
