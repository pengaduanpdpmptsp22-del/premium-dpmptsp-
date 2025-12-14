"use client";

import { motion } from "framer-motion";
import { Briefcase, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const functions = [
  "Perumusan kebijakan teknis di bidang perizinan dan penanaman modal.",
  "Pelaksanaan pelayanan perizinan dan non-perizinan secara terpadu.",
  "Pembinaan, pengendalian, dan pengawasan kegiatan penanaman modal.",
  "Pengelolaan data dan informasi perizinan.",
  "Penyusunan laporan pelaksanaan tugas dan administrasi dinas.",
  "Pelaksanaan fungsi lain yang diberikan Kepala Daerah.",
];

export function TaskFunctionSection() {
  return (
    <section id="tugas-fungsi" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0a2b5e] via-[#d4af37] to-[#0a2b5e]" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#d4af37]/20 text-[#0a2b5e] rounded-full text-sm font-medium mb-4">
            Tupoksi
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2b5e]">Tugas & Fungsi</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="glassmorphism-card rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-[#0a2b5e] to-[#1e4a8f] rounded-2xl flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0a2b5e] mb-3">Tugas Pokok</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Menyelenggarakan urusan pemerintahan di bidang penanaman modal dan pelayanan terpadu satu pintu sesuai ketentuan peraturan perundang-undangan.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl font-bold text-[#0a2b5e] mb-6 flex items-center gap-3">
            <span className="w-10 h-10 bg-[#d4af37] rounded-xl flex items-center justify-center">
              <ChevronDown className="w-5 h-5 text-[#0a2b5e]" />
            </span>
            Fungsi
          </h3>

          <Accordion type="single" collapsible className="space-y-3">
            {functions.map((func, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="glassmorphism-card rounded-xl border-none overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-[#0a2b5e]/5 transition-colors">
                  <div className="flex items-center gap-4">
                    <span className="w-8 h-8 bg-[#0a2b5e] text-white rounded-lg flex items-center justify-center text-sm font-bold">
                      {idx + 1}
                    </span>
                    <span className="text-left font-medium text-[#0a2b5e]">{func}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="ml-12 text-gray-600 leading-relaxed">
                    <p>
                      Fungsi ini dilaksanakan sesuai dengan peraturan perundang-undangan yang berlaku dan standar operasional prosedur (SOP) yang telah ditetapkan oleh DPMPTSP Kabupaten Lembata.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
