"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FileEdit,
  CreditCard,
  Search,
  MessageSquare,
  AlertTriangle,
  BarChart3,
  ExternalLink,
  Clock,
  CheckCircle,
  XCircle,
  Loader2,
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const portals = [
  {
    id: "perizinan",
    icon: FileEdit,
    title: "Pengajuan Perizinan & Non-Perizinan",
    description: "Ajukan SIP, perizinan tenaga kesehatan, dan layanan lainnya",
    cta: "Ajukan Sekarang",
    link: "https://tally.so/r/3qxMpO",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "nib",
    icon: CreditCard,
    title: "Pengajuan NIB",
    description: "Buat Nomor Induk Berusaha melalui OSS RBA",
    cta: "Buat NIB Online",
    link: "https://oss.go.id/id",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    id: "status",
    icon: Search,
    title: "Cek Status Pengajuan",
    description: "Lacak progress pengajuan perizinan Anda",
    cta: "Cek Status",
    isModal: true,
    color: "from-purple-500 to-purple-600",
  },
  {
    id: "konsultasi",
    icon: MessageSquare,
    title: "Konsultasi Layanan",
    description: "Tanyakan seputar layanan perizinan",
    cta: "Mulai Konsultasi",
    isModal: true,
    color: "from-cyan-500 to-cyan-600",
  },
  {
    id: "pengaduan",
    icon: AlertTriangle,
    title: "Pengaduan Masyarakat",
    description: "Sampaikan keluhan atau masukan",
    cta: "Segera Hadir",
    isDisabled: true,
    color: "from-orange-500 to-orange-600",
  },
  {
    id: "skm",
    icon: BarChart3,
    title: "Survey Pelayanan Publik (SKM)",
    description: "Bantu kami meningkatkan pelayanan",
    cta: "Isi Survey SKM",
    link: "#skm",
    color: "from-[#d4af37] to-[#c9a430]",
  },
];

function StatusModal() {
  const [trackingNo, setTrackingNo] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleCheck = () => {
    if (!trackingNo) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus(trackingNo.length > 5 ? "success" : "error");
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Masukkan nomor tracking..."
          value={trackingNo}
          onChange={(e) => setTrackingNo(e.target.value)}
          className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0a2b5e] focus:border-transparent"
        />
        <button
          onClick={handleCheck}
          disabled={status === "loading"}
          className="px-6 py-3 bg-[#0a2b5e] text-white rounded-xl font-medium hover:bg-[#1e4a8f] transition-colors disabled:opacity-50"
        >
          {status === "loading" ? <Loader2 className="w-5 h-5 animate-spin" /> : "Cek"}
        </button>
      </div>

      {status === "success" && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-green-50 rounded-xl">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle className="w-6 h-6 text-green-500" />
            <span className="font-semibold text-green-700">Pengajuan Ditemukan</span>
          </div>
          <div className="space-y-3">
            {["Pengajuan Diterima", "Verifikasi Dokumen", "Proses Review", "Selesai"].map((step, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${idx <= 2 ? "bg-green-500 text-white" : "bg-gray-200 text-gray-400"}`}>
                  {idx <= 2 ? <CheckCircle className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                </div>
                <span className={idx <= 2 ? "text-green-700" : "text-gray-400"}>{step}</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {status === "error" && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-red-50 rounded-xl flex items-center gap-3">
          <XCircle className="w-6 h-6 text-red-500" />
          <span className="text-red-700">Nomor tracking tidak ditemukan. Pastikan nomor yang dimasukkan benar.</span>
        </motion.div>
      )}
    </div>
  );
}

function ConsultationModal() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-xl font-bold text-[#0a2b5e] mb-2">Terima Kasih!</h3>
        <p className="text-gray-600">Pertanyaan Anda telah terkirim. Tim kami akan menghubungi Anda segera.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-[#0a2b5e] mb-1">Nama Lengkap</label>
        <input type="text" required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0a2b5e]" />
      </div>
      <div>
        <label className="block text-sm font-medium text-[#0a2b5e] mb-1">Email</label>
        <input type="email" required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0a2b5e]" />
      </div>
      <div>
        <label className="block text-sm font-medium text-[#0a2b5e] mb-1">Kategori</label>
        <select required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0a2b5e]">
          <option value="">Pilih kategori...</option>
          <option value="nib">NIB / Perizinan Berusaha</option>
          <option value="sip">SIP / Tenaga Kesehatan</option>
          <option value="sektoral">Perizinan Sektoral</option>
          <option value="lainnya">Lainnya</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-[#0a2b5e] mb-1">Pesan</label>
        <textarea required rows={4} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0a2b5e]" />
      </div>
      <button type="submit" className="w-full py-3 bg-[#0a2b5e] text-white rounded-xl font-semibold hover:bg-[#1e4a8f] transition-colors">
        Kirim Pertanyaan
      </button>
    </form>
  );
}

export function OnlinePortalSection() {
  return (
    <section id="portal" className="py-20 bg-gradient-to-br from-[#0a2b5e] to-[#1e4a8f] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-4">
            Layanan Digital
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Portal Layanan Online</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Akses berbagai layanan perizinan secara online kapan saja dan di mana saja
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portals.map((portal, idx) => (
            <motion.div
              key={portal.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {portal.isModal ? (
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="glassmorphism rounded-2xl p-6 cursor-pointer hover:bg-white/20 transition-all group h-full">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${portal.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <portal.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{portal.title}</h3>
                      <p className="text-white/70 text-sm mb-4">{portal.description}</p>
                      <span className="inline-flex items-center gap-1 text-[#d4af37] font-medium text-sm">
                        {portal.cta}
                        <ExternalLink className="w-4 h-4" />
                      </span>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${portal.color} flex items-center justify-center`}>
                          <portal.icon className="w-5 h-5 text-white" />
                        </div>
                        {portal.title}
                      </DialogTitle>
                    </DialogHeader>
                    {portal.id === "status" ? <StatusModal /> : <ConsultationModal />}
                  </DialogContent>
                </Dialog>
              ) : portal.isDisabled ? (
                <div className="glassmorphism rounded-2xl p-6 opacity-60 cursor-not-allowed h-full relative">
                  <div className="absolute top-4 right-4 px-2 py-1 bg-orange-500 text-white text-xs rounded-full">
                    Segera Hadir
                  </div>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${portal.color} flex items-center justify-center mb-4`}>
                    <portal.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{portal.title}</h3>
                  <p className="text-white/70 text-sm mb-4">{portal.description}</p>
                  <span className="inline-flex items-center gap-1 text-white/50 font-medium text-sm">
                    {portal.cta}
                  </span>
                </div>
              ) : (
                <a
                  href={portal.link}
                  target={portal.link?.startsWith("http") ? "_blank" : undefined}
                  rel={portal.link?.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="glassmorphism rounded-2xl p-6 block hover:bg-white/20 transition-all group h-full"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${portal.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <portal.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{portal.title}</h3>
                  <p className="text-white/70 text-sm mb-4">{portal.description}</p>
                  <span className="inline-flex items-center gap-1 text-[#d4af37] font-medium text-sm group-hover:gap-2 transition-all">
                    {portal.cta}
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
