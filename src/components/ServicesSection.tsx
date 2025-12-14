"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Building2,
  Briefcase,
  Rocket,
  Heart,
  GraduationCap,
  HardHat,
  Bus,
  Users,
  Store,
  Wallet,
  FileSearch,
  MessageSquare,
  Database,
  CheckCircle,
  AlertCircle,
  FileDown,
  ChevronRight,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const nibPerseorangan = [
  "KTP",
  "NPWP (jika ada)",
  "Nama & alamat usaha",
  "Deskripsi kegiatan usaha",
  "Status bangunan (sewa/milik/pinjam pakai)",
  "Perkiraan tenaga kerja",
  "Perkiraan nilai investasi (tanah, mesin, modal kerja 3 bulan, biaya operasional, omzet/tahun)",
  "Email aktif",
  "Nomor telepon",
  "Foto lokasi usaha (GPS Camera)",
  "Denah lokasi (titik koordinat)",
];

const nibKoperasi = [
  "Akta pendirian + SK AHU",
  "NPWP Koperasi",
  "KTP/NPWP Pengurus",
  "NIK KOPDES (penerbit Dinas Koprindag)",
  "Email resmi Koperasi",
  "Nomor telepon",
  "Data usaha (alamat, deskripsi, status bangunan)",
  "Perkiraan tenaga kerja",
  "Nilai investasi (tanah, mesin, modal kerja 3 bulan, omzet)",
  "Foto lokasi (GPS Camera)",
  "Denah lokasi (titik koordinat)",
];

const nibBadanUsaha = [
  "Akta pendirian + SK AHU",
  "NPWP Badan Usaha",
  "KTP/NPWP Pengurus",
  "Email resmi",
  "Nomor telepon",
  "Data usaha lengkap",
  "Perkiraan tenaga kerja",
  "Nilai investasi lengkap",
  "Foto lokasi (GPS Camera)",
  "Denah lokasi (titik koordinat)",
];

const sektoralData = [
  {
    id: "kesehatan",
    title: "Sektor Kesehatan",
    icon: Heart,
    color: "from-red-500 to-rose-500",
    items: [
      "SIPA – Izin Praktik Apoteker",
      "SIKTTK – Izin Praktik Tenaga Teknis Kefarmasian",
      "Izin Praktik Bidan",
      "Izin Praktik Dokter (Umum/Spesialis/Gigi)",
      "Izin Praktik Perawat",
      "Izin Praktik Perawat Gigi & Mulut",
      "Izin Praktik Fisioterapis",
      "Izin Praktik Sanitarian",
      "Izin Praktik Tenaga Penyuluh Kesmas",
      "Izin Penata Anestesi",
      "SIP-RMIK – Perekam Medis",
      "SIKRO – Refraksionis Optisien",
      "Izin Kerja Radiografer",
      "Izin Toko Obat",
      "Izin Apotek",
      "Izin Pendirian Optik",
      "Izin Optikal (SIPO)",
      "Izin Operasional Klinik",
      "Izin Operasional Rumah Sakit",
    ],
  },
  {
    id: "pendidikan",
    title: "Sektor Pendidikan",
    icon: GraduationCap,
    color: "from-blue-500 to-indigo-500",
    items: ["Izin Operasional Satuan Pendidikan", "Izin Pendirian Pendidikan Nonformal"],
  },
  {
    id: "putr",
    title: "Sektor Pekerjaan Umum & Tata Ruang",
    icon: HardHat,
    color: "from-orange-500 to-amber-500",
    items: ["PKKPR Berusaha", "PKKPR Non-Berusaha"],
  },
  {
    id: "perhubungan",
    title: "Sektor Perhubungan",
    icon: Bus,
    color: "from-green-500 to-emerald-500",
    items: ["Izin Trayek"],
  },
  {
    id: "tenagakerja",
    title: "Sektor Tenaga Kerja",
    icon: Users,
    color: "from-purple-500 to-violet-500",
    items: ["Layanan Tenaga Kerja"],
  },
  {
    id: "perdagangan",
    title: "Sektor Perdagangan",
    icon: Store,
    color: "from-cyan-500 to-teal-500",
    items: ["Tanda Daftar Gudang (TDG)"],
  },
  {
    id: "bapenda",
    title: "Sektor BAPENDA",
    icon: Wallet,
    color: "from-yellow-500 to-amber-500",
    items: ["Izin Reklame"],
  },
  {
    id: "kesbangpol",
    title: "Sektor Kesbangpol",
    icon: FileSearch,
    color: "from-slate-500 to-gray-600",
    items: [
      "Izin Penelitian",
      "Izin Selesai Penelitian",
      "Izin Seminar",
      "Izin Magang",
      "Izin KKN",
      "Izin KKBM",
      "Izin Pelaksanaan Survei",
    ],
  },
];

const nonPerizinan = [
  { icon: MessageSquare, title: "Konsultasi Layanan" },
  { icon: Database, title: "Informasi Data Perizinan" },
  { icon: CheckCircle, title: "Validasi Dokumen" },
  { icon: AlertCircle, title: "Pengaduan Masyarakat" },
  { icon: FileDown, title: "Permohonan Informasi Publik (PPID)" },
  { icon: FileText, title: "Surat Rekomendasi" },
];

function NIBTab({ title, items, color }: { title: string; items: string[]; color: string }) {
  return (
    <div className={`bg-gradient-to-br ${color} rounded-2xl p-6 text-white`}>
      <h4 className="text-xl font-bold mb-4">{title}</h4>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
            <span className="text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ServicesSection() {
  const [expandedSektor, setExpandedSektor] = useState<string | null>("kesehatan");

  return (
    <section id="layanan" className="py-20 bg-gradient-to-b from-[#f8fafc] to-white relative overflow-hidden">
      <div className="absolute inset-0 pattern-grid opacity-30" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#0a2b5e]/10 text-[#0a2b5e] rounded-full text-sm font-medium mb-4">
            Layanan Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2b5e] mb-4">Layanan DPMPTSP</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Berbagai layanan perizinan dan non-perizinan untuk mendukung usaha dan investasi di Kabupaten Lembata
          </p>
        </motion.div>

        <Tabs defaultValue="nib" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-white rounded-2xl p-2 shadow-lg">
            <TabsTrigger value="nib" className="data-[state=active]:bg-[#0a2b5e] data-[state=active]:text-white rounded-xl py-3 font-medium">
              <FileText className="w-4 h-4 mr-2" />
              Perizinan Berusaha (NIB)
            </TabsTrigger>
            <TabsTrigger value="sektoral" className="data-[state=active]:bg-[#0a2b5e] data-[state=active]:text-white rounded-xl py-3 font-medium">
              <Building2 className="w-4 h-4 mr-2" />
              Perizinan Sektoral
            </TabsTrigger>
            <TabsTrigger value="non" className="data-[state=active]:bg-[#0a2b5e] data-[state=active]:text-white rounded-xl py-3 font-medium">
              <Briefcase className="w-4 h-4 mr-2" />
              Non-Perizinan
            </TabsTrigger>
          </TabsList>

          <TabsContent value="nib">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Tabs defaultValue="perseorangan" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6 bg-[#f8fafc] rounded-xl p-1">
                  <TabsTrigger value="perseorangan" className="rounded-lg text-sm">NIB Perseorangan</TabsTrigger>
                  <TabsTrigger value="koperasi" className="rounded-lg text-sm">NIB Koperasi</TabsTrigger>
                  <TabsTrigger value="badan" className="rounded-lg text-sm">NIB CV/PT/Yayasan</TabsTrigger>
                </TabsList>
                <TabsContent value="perseorangan">
                  <NIBTab title="NIB Perseorangan" items={nibPerseorangan} color="from-[#0a2b5e] to-[#1e4a8f]" />
                </TabsContent>
                <TabsContent value="koperasi">
                  <NIBTab title="NIB Koperasi" items={nibKoperasi} color="from-[#1e4a8f] to-[#2d5aa0]" />
                </TabsContent>
                <TabsContent value="badan">
                  <NIBTab title="NIB CV, PT, Yayasan" items={nibBadanUsaha} color="from-[#0a2b5e] to-[#1e4a8f]" />
                </TabsContent>
              </Tabs>
              <a
                href="https://oss.go.id/id"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#d4af37] to-[#f5e8b0] text-[#0a2b5e] rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-[1.02]"
              >
                <Rocket className="w-5 h-5" />
                Buat NIB di OSS RBA
                <ChevronRight className="w-5 h-5" />
              </a>
            </motion.div>
          </TabsContent>

          <TabsContent value="sektoral">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {sektoralData.map((sektor) => (
                <div
                  key={sektor.id}
                  className={`glassmorphism-card rounded-2xl overflow-hidden cursor-pointer transition-all ${expandedSektor === sektor.id ? "md:col-span-2 lg:col-span-2" : ""}`}
                  onClick={() => setExpandedSektor(expandedSektor === sektor.id ? null : sektor.id)}
                >
                  <div className={`bg-gradient-to-r ${sektor.color} p-4 text-white`}>
                    <div className="flex items-center gap-3">
                      <sektor.icon className="w-6 h-6" />
                      <span className="font-semibold">{sektor.title}</span>
                    </div>
                  </div>
                  <AnimatePresence>
                    {expandedSektor === sektor.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-4"
                      >
                        <ul className="space-y-2">
                          {sektor.items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                              <ChevronRight className="w-4 h-4 mt-0.5 text-[#0a2b5e]" />
                              {item}
                            </li>
                          ))}
                        </ul>
                        {sektor.id === "kesehatan" && (
                          <a
                            href="https://tally.so/r/3qxMpO"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#0a2b5e] text-white rounded-lg text-sm font-medium hover:bg-[#1e4a8f] transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Ajukan SIP / Perizinan Tenaga Kesehatan
                          </a>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
            <p className="text-center text-sm text-gray-500 mt-6 italic">
              Seluruh layanan mengikuti ketentuan peraturan perundang-undangan dan standar pelayanan pemerintah daerah.
            </p>
          </TabsContent>

          <TabsContent value="non">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {nonPerizinan.map((item, idx) => (
                <div
                  key={idx}
                  className="glassmorphism-card rounded-2xl p-6 hover-lift cursor-default group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0a2b5e] to-[#1e4a8f] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="font-semibold text-[#0a2b5e]">{item.title}</h4>
                </div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
