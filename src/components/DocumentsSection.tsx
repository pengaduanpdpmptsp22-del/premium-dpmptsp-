"use client";

import { motion } from "framer-motion";
import { FileText, Download, FileSpreadsheet, File, ExternalLink } from "lucide-react";

const documents = [
  { name: "Contoh Berkas Persyaratan", type: "PDF", icon: FileText },
  { name: "Contoh Formulir Perizinan", type: "PDF", icon: FileText },
  { name: "Contoh Surat Pernyataan", type: "PDF", icon: FileText },
  { name: "Template Pengajuan", type: "DOCX", icon: FileSpreadsheet },
  { name: "Laporan Publik", type: "PDF", icon: File },
  { name: "File PDF Peraturan", type: "PDF", icon: FileText },
];

export function DocumentsSection() {
  return (
    <section id="dokumen" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#0a2b5e]/10 text-[#0a2b5e] rounded-full text-sm font-medium mb-4">
            Unduhan
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2b5e] mb-4">Formulir & Dokumen</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Download formulir dan dokumen yang diperlukan untuk pengajuan perizinan
          </p>
        </motion.div>

        <div className="glassmorphism-card rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-[#0a2b5e] to-[#1e4a8f] p-4">
            <div className="grid grid-cols-12 gap-4 text-white font-medium text-sm">
              <div className="col-span-6 md:col-span-7">Nama Dokumen</div>
              <div className="col-span-3 md:col-span-3 text-center">Tipe</div>
              <div className="col-span-3 md:col-span-2 text-center">Aksi</div>
            </div>
          </div>

          <div className="divide-y divide-gray-100">
            {documents.map((doc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-[#f8fafc] transition-colors group"
              >
                <div className="col-span-6 md:col-span-7 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0a2b5e]/10 flex items-center justify-center group-hover:bg-[#0a2b5e] group-hover:text-white transition-colors">
                    <doc.icon className="w-5 h-5 text-[#0a2b5e] group-hover:text-white" />
                  </div>
                  <span className="font-medium text-[#0a2b5e] text-sm md:text-base">{doc.name}</span>
                </div>
                <div className="col-span-3 md:col-span-3 text-center">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${doc.type === "PDF" ? "bg-red-100 text-red-600" : "bg-blue-100 text-blue-600"}`}>
                    {doc.type}
                  </span>
                </div>
                <div className="col-span-3 md:col-span-2 text-center">
                  <button className="inline-flex items-center justify-center gap-1 px-3 py-2 bg-[#d4af37] text-[#0a2b5e] rounded-lg text-sm font-medium hover:bg-[#f5e8b0] transition-colors group-hover:scale-105">
                    <Download className="w-4 h-4" />
                    <span className="hidden sm:inline">Unduh</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-sm text-gray-500 mt-6 italic"
        >
          * Upload file PDF asli akan dilakukan kemudian.
        </motion.p>
      </div>
    </section>
  );
}
