"use client";

import { useState, useEffect } from "react";
import { Eye, Sun, Type, Volume2, Contrast, Minus, Plus } from "lucide-react";

type ThemeMode = "normal" | "grayscale" | "elderly" | "high-contrast";

export function AccessibilityBar() {
  const [theme, setTheme] = useState<ThemeMode>("normal");
  const [fontSize, setFontSize] = useState(100);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    document.documentElement.classList.remove(
      "theme-grayscale",
      "theme-elderly",
      "theme-high-contrast"
    );
    if (theme !== "normal") {
      document.documentElement.classList.add(`theme-${theme}`);
    }
  }, [theme]);

  useEffect(() => {
    document.documentElement.style.setProperty("--font-scale", String(fontSize / 100));
  }, [fontSize]);

  const handleSpeak = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const mainContent = document.querySelector("main")?.textContent || "";
    const utterance = new SpeechSynthesisUtterance(mainContent.slice(0, 5000));
    utterance.lang = "id-ID";
    utterance.rate = 0.9;
    utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  const themes: { mode: ThemeMode; label: string; icon: React.ReactNode }[] = [
    { mode: "normal", label: "Normal", icon: <Sun className="w-4 h-4" /> },
    { mode: "grayscale", label: "Buta Warna", icon: <Eye className="w-4 h-4" /> },
    { mode: "elderly", label: "Lansia", icon: <Type className="w-4 h-4" /> },
    { mode: "high-contrast", label: "Kontras Tinggi", icon: <Contrast className="w-4 h-4" /> },
  ];

  return (
    <div className="bg-[#0a2b5e] text-white py-2 px-4 z-[100] relative">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-1 text-xs">
          <span className="hidden sm:inline text-[#d4af37] font-medium mr-2">Aksesibilitas:</span>
          {themes.map((t) => (
            <button
              key={t.mode}
              onClick={() => setTheme(t.mode)}
              className={`px-2 py-1 rounded text-xs flex items-center gap-1 transition-all ${
                theme === t.mode
                  ? "bg-[#d4af37] text-[#0a2b5e] font-semibold"
                  : "bg-white/10 hover:bg-white/20"
              }`}
              aria-pressed={theme === t.mode}
              aria-label={`Tema ${t.label}`}
            >
              {t.icon}
              <span className="hidden md:inline">{t.label}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <span className="text-xs hidden sm:inline text-[#d4af37]">Ukuran:</span>
            <button
              onClick={() => setFontSize(Math.max(80, fontSize - 10))}
              className="p-1 rounded bg-white/10 hover:bg-white/20 transition-all"
              aria-label="Perkecil teks"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="text-xs w-10 text-center">{fontSize}%</span>
            <button
              onClick={() => setFontSize(Math.min(150, fontSize + 10))}
              className="p-1 rounded bg-white/10 hover:bg-white/20 transition-all"
              aria-label="Perbesar teks"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>

          <button
            onClick={handleSpeak}
            className={`px-2 py-1 rounded text-xs flex items-center gap-1 transition-all ${
              isSpeaking
                ? "bg-red-500 text-white"
                : "bg-[#d4af37] text-[#0a2b5e] hover:bg-[#f5e8b0]"
            }`}
            aria-label={isSpeaking ? "Hentikan pembacaan" : "Baca layar"}
          >
            <Volume2 className="w-4 h-4" />
            <span className="hidden sm:inline">{isSpeaking ? "Hentikan" : "Baca Layar"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
