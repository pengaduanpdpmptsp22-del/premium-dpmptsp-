"use client";

import { motion } from "framer-motion";
import {
  Building2,
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

const quickLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Profil Dinas", href: "#profil" },
  { label: "Layanan Perizinan", href: "#layanan" },
  { label: "Persyaratan NIB", href: "#persyaratan" },
  { label: "Pengaduan", href: "#pengaduan" },
  { label: "Kontak", href: "#kontak" },
];

const services = [
  { label: "NIB Perseorangan", href: "#layanan" },
  { label: "NIB Koperasi", href: "#layanan" },
  { label: "NIB Badan Usaha", href: "#layanan" },
  { label: "Perizinan Sektoral", href: "#layanan" },
  { label: "SIP Tenaga Kesehatan", href: "https://tally.so/r/3qxMpO" },
  { label: "OSS RBA", href: "https://oss.go.id/id" },
];

const socials = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

export function Footer() {
  return (
    <footer id="kontak" className="bg-gradient-to-br from-[#0a2b5e] to-[#071d40] text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-[#d4af37] to-[#f5e8b0] rounded-xl flex items-center justify-center">
                <Building2 className="w-8 h-8 text-[#0a2b5e]" />
              </div>
              <div>
                <p className="font-bold text-xl">DPMPTSP</p>
                <p className="text-sm text-white/70">Kabupaten Lembata</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu Kabupaten Lembata berkomitmen memberikan pelayanan perizinan yang cepat, transparan, dan akuntabel.
            </p>
            <div className="flex gap-3">
              {socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#d4af37] hover:text-[#0a2b5e] transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-6 bg-[#d4af37] rounded-full" />
              Tautan Cepat
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#d4af37] transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-[#d4af37] rounded-full" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-6 bg-[#d4af37] rounded-full" />
              Layanan
            </h3>
            <ul className="space-y-3">
              {services.map((service, idx) => (
                <li key={idx}>
                  <a
                    href={service.href}
                    target={service.href.startsWith("http") ? "_blank" : undefined}
                    rel={service.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-white/70 hover:text-[#d4af37] transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-[#d4af37] rounded-full" />
                    {service.label}
                    {service.href.startsWith("http") && <ExternalLink className="w-3 h-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            id="lokasi"
          >
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-6 bg-[#d4af37] rounded-full" />
              Kontak & Lokasi
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#d4af37] mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  Jln. Trans Lembata, Kelurahan Lewoleba Timur, Kecamatan Nubatukan, Kabupaten Lembata, NTT
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                <a href="tel:+6282193838156" className="text-white/70 text-sm hover:text-[#d4af37] transition-colors">
                  0821-9383-8156
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                <a href="mailto:dpmptsp@lembatakab.go.id" className="text-white/70 text-sm hover:text-[#d4af37] transition-colors">
                  dpmptsp@lembatakab.go.id
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  Senin - Jumat: 08.00 - 16.00 WITA
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} DPMPTSP Kabupaten Lembata. Hak Cipta Dilindungi.
            </p>
            <div className="flex items-center gap-4 text-sm text-white/50">
              <Link href="#" className="hover:text-[#d4af37] transition-colors">Kebijakan Privasi</Link>
              <span>|</span>
              <Link href="#" className="hover:text-[#d4af37] transition-colors">Syarat & Ketentuan</Link>
              <span>|</span>
              <Link href="#" className="hover:text-[#d4af37] transition-colors">Peta Situs</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
