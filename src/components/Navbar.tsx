"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Building2,
  FileText,
  ClipboardList,
  List,
  MessageSquare,
  Phone,
  MapPin,
  ChevronDown,
  Menu,
  X,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const menuItems = [
  { label: "Beranda", icon: Home, href: "#beranda" },
  {
    label: "Profil Dinas",
    icon: Building2,
    href: "#profil",
    submenu: [
      { label: "Tentang Kami", href: "#profil" },
      { label: "Visi & Misi", href: "#visi-misi" },
      { label: "Struktur Organisasi", href: "#struktur" },
      { label: "Tugas & Fungsi", href: "#tugas-fungsi" },
    ],
  },
  {
    label: "Layanan Perizinan",
    icon: FileText,
    href: "#layanan",
    submenu: [
      { label: "NIB (Perizinan Berusaha)", href: "#layanan-nib" },
      { label: "Perizinan Sektoral", href: "#layanan-sektoral" },
      { label: "Non-Perizinan", href: "#layanan-non" },
    ],
  },
  { label: "Persyaratan NIB", icon: ClipboardList, href: "#persyaratan" },
  { label: "Daftar Perizinan", icon: List, href: "#daftar" },
  { label: "Pengaduan", icon: MessageSquare, href: "#pengaduan" },
  { label: "Kontak", icon: Phone, href: "#kontak" },
  { label: "Lokasi", icon: MapPin, href: "#lokasi" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="#beranda" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0a2b5e] to-[#1e4a8f] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#d4af37] rounded-full animate-pulse" />
            </div>
            <div className={`${isScrolled ? "text-[#0a2b5e]" : "text-white"}`}>
              <p className="font-bold text-lg leading-tight">DPMPTSP</p>
              <p className="text-xs opacity-80">Kabupaten Lembata</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.submenu && setActiveSubmenu(item.label)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  href={item.href}
                  className={`px-3 py-2 rounded-lg flex items-center gap-1 text-sm font-medium transition-all ${
                    isScrolled
                      ? "text-[#0a2b5e] hover:bg-[#0a2b5e]/10"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                  {item.submenu && <ChevronDown className="w-3 h-3" />}
                </Link>

                <AnimatePresence>
                  {item.submenu && activeSubmenu === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
                    >
                      {item.submenu.map((sub, idx) => (
                        <Link
                          key={idx}
                          href={sub.href}
                          className="block px-4 py-3 text-sm text-[#0a2b5e] hover:bg-[#f5e8b0] transition-colors border-l-4 border-transparent hover:border-[#d4af37]"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://tally.so/r/3qxMpO"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#d4af37] to-[#f5e8b0] text-[#0a2b5e] rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all hover:scale-105 animate-pulse-glow"
            >
              <Sparkles className="w-4 h-4" />
              <span>Ajukan Perizinan</span>
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg ${
                isScrolled ? "text-[#0a2b5e]" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t mt-2"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
              {menuItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-[#0a2b5e] hover:bg-[#f5e8b0] rounded-lg transition-colors"
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                  {item.submenu && (
                    <div className="ml-8 mt-1 space-y-1">
                      {item.submenu.map((sub, idx) => (
                        <Link
                          key={idx}
                          href={sub.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-[#0a2b5e] hover:bg-[#f5e8b0]/50 rounded-lg"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a
                href="https://tally.so/r/3qxMpO"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-[#d4af37] to-[#f5e8b0] text-[#0a2b5e] rounded-xl font-semibold mt-4"
              >
                <Sparkles className="w-5 h-5" />
                <span>Ajukan Perizinan</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
