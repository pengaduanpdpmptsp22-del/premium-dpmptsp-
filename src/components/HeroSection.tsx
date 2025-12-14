"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Zap, Shield, Clock, Monitor } from "lucide-react";

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [displayText, setDisplayText] = useState("");
  const [showSubtitle, setShowSubtitle] = useState(false);
  const fullText = "Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu Kabupaten Lembata";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setShowSubtitle(true);
      }
    }, 40);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${p.opacity})`;
        ctx.fill();

        particles.slice(i + 1).forEach((p2) => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(212, 175, 55, ${0.1 * (1 - dist / 120)})`;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const stats = [
    { icon: Zap, value: "500+", label: "Perizinan Diproses" },
    { icon: Shield, value: "98%", label: "Tingkat Kepuasan" },
    { icon: Clock, value: "24 Jam", label: "Respon Cepat" },
    { icon: Monitor, value: "100%", label: "Digital" },
  ];

  return (
    <section id="beranda" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a2b5e] via-[#1e4a8f] to-[#0a2b5e]" />
      <canvas ref={canvasRef} className="absolute inset-0 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a2b5e]/80 via-transparent to-transparent z-20" />

      <div className="absolute top-20 left-10 w-20 h-20 bg-[#d4af37]/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-40 right-20 w-32 h-32 bg-[#d4af37]/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-white/10 rounded-full blur-xl animate-float" style={{ animationDelay: "4s" }} />

      <div className="relative z-30 max-w-6xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm mb-6"
        >
          <span className="w-2 h-2 bg-[#d4af37] rounded-full animate-pulse" />
          Portal Resmi Pemerintah Kabupaten Lembata
        </motion.div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          {displayText}
          <span className="inline-block w-1 h-12 bg-[#d4af37] ml-1 animate-pulse" />
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: showSubtitle ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-10"
        >
          Pelayanan mudah, cepat, transparan, dan pasti — untuk pembangunan Lembata yang maju.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showSubtitle ? 1 : 0, y: showSubtitle ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="https://tally.so/r/3qxMpO"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#1e4a8f] to-[#0a2b5e] text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all hover:scale-105 glow-blue"
          >
            <span>Ajukan Perizinan</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://oss.go.id/id"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#f5e8b0] text-[#0a2b5e] rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all hover:scale-105 glow-gold"
          >
            <span>Cek Status OSS-RBA</span>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: showSubtitle ? 1 : 0, y: showSubtitle ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glassmorphism rounded-2xl p-6 text-center group hover:bg-white/20 transition-all cursor-default"
            >
              <stat.icon className="w-8 h-8 text-[#d4af37] mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-sm text-white/70">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
