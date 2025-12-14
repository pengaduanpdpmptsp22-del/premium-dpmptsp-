"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Crown, Users, Briefcase, Database, Building } from "lucide-react";

interface OrgNode {
  id: string;
  title: string;
  level: number;
  icon: React.ElementType;
  children?: OrgNode[];
}

const orgStructure: OrgNode = {
  id: "kepala",
  title: "Kepala Dinas",
  level: 0,
  icon: Crown,
  children: [
    {
      id: "sekretaris",
      title: "Sekretaris",
      level: 1,
      icon: Users,
      children: [
        { id: "umum", title: "Subbagian Umum & Kepegawaian", level: 2, icon: Users },
        { id: "keuangan", title: "Subbagian Keuangan", level: 2, icon: Briefcase },
      ],
    },
    {
      id: "pelayanan",
      title: "Bidang Penyelenggaraan Pelayanan Perizinan",
      level: 1,
      icon: Building,
      children: [
        { id: "pelayanan-perizinan", title: "Seksi Pelayanan Perizinan", level: 2, icon: Building },
        { id: "verifikasi", title: "Seksi Verifikasi & Validasi", level: 2, icon: Building },
      ],
    },
    {
      id: "penanaman",
      title: "Bidang Penanaman Modal",
      level: 1,
      icon: Briefcase,
      children: [
        { id: "fasilitasi", title: "Seksi Fasilitasi dan Promosi Penanaman Modal", level: 2, icon: Briefcase },
        { id: "pengendalian", title: "Seksi Pengendalian Pelaksanaan Penanaman Modal", level: 2, icon: Briefcase },
      ],
    },
    {
      id: "data",
      title: "Bidang Data & Informasi",
      level: 1,
      icon: Database,
      children: [
        { id: "pengelolaan", title: "Seksi Pengelolaan Data", level: 2, icon: Database },
        { id: "sistem", title: "Seksi Sistem Informasi", level: 2, icon: Database },
      ],
    },
    {
      id: "upt",
      title: "UPT / Loket Pelayanan",
      level: 1,
      icon: Building,
    },
  ],
};

function OrgNodeCard({ node, expanded, onToggle }: { node: OrgNode; expanded: string[]; onToggle: (id: string) => void }) {
  const hasChildren = node.children && node.children.length > 0;
  const isExpanded = expanded.includes(node.id);
  const Icon = node.icon;

  const levelColors = [
    "from-[#d4af37] to-[#c9a430] text-[#0a2b5e]",
    "from-[#0a2b5e] to-[#1e4a8f] text-white",
    "from-[#1e4a8f] to-[#2d5aa0] text-white",
  ];

  return (
    <div className="flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative"
      >
        <button
          onClick={() => hasChildren && onToggle(node.id)}
          className={`relative px-6 py-4 rounded-2xl bg-gradient-to-r ${levelColors[Math.min(node.level, 2)]} shadow-lg hover:shadow-xl transition-all hover:scale-105 min-w-[200px] max-w-[280px] ${hasChildren ? "cursor-pointer" : "cursor-default"}`}
        >
          <div className="flex items-center justify-center gap-3">
            <Icon className="w-5 h-5" />
            <span className="font-semibold text-sm text-center">{node.title}</span>
            {hasChildren && (
              <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
            )}
          </div>
          {node.level === 0 && (
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#d4af37] rounded-full flex items-center justify-center">
              <Crown className="w-3 h-3 text-[#0a2b5e]" />
            </div>
          )}
        </button>
      </motion.div>

      <AnimatePresence>
        {hasChildren && isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4"
          >
            <div className="w-0.5 h-6 bg-[#d4af37] mx-auto" />
            <div className="flex flex-wrap justify-center gap-4">
              {node.children?.map((child, idx) => (
                <div key={child.id} className="flex flex-col items-center">
                  <div className="w-0.5 h-4 bg-[#0a2b5e]/30" />
                  <OrgNodeCard node={child} expanded={expanded} onToggle={onToggle} />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function OrganizationSection() {
  const [expanded, setExpanded] = useState<string[]>(["kepala"]);

  const toggleNode = (id: string) => {
    setExpanded((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <section id="struktur" className="py-20 bg-gradient-to-b from-white to-[#f8fafc] relative overflow-hidden">
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
            Organisasi
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2b5e] mb-4">Struktur Organisasi</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Klik pada setiap bagian untuk melihat detail struktur organisasi DPMPTSP Kabupaten Lembata
          </p>
        </motion.div>

        <div className="flex justify-center overflow-x-auto pb-8">
          <OrgNodeCard node={orgStructure} expanded={expanded} onToggle={toggleNode} />
        </div>

        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          <button
            onClick={() => setExpanded(["kepala", "sekretaris", "pelayanan", "penanaman", "data", "upt"])}
            className="px-4 py-2 bg-[#0a2b5e] text-white rounded-lg text-sm hover:bg-[#1e4a8f] transition-colors"
          >
            Tampilkan Semua
          </button>
          <button
            onClick={() => setExpanded(["kepala"])}
            className="px-4 py-2 bg-white text-[#0a2b5e] border border-[#0a2b5e] rounded-lg text-sm hover:bg-[#0a2b5e]/5 transition-colors"
          >
            Tutup Semua
          </button>
        </div>
      </div>
    </section>
  );
}
