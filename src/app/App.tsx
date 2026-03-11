import { useState, useCallback } from "react";
import { Download } from "lucide-react";
import { CvCorporate } from "./components/cv-corporate";
import type { Lang } from "./components/cv-data";

export default function App() {
  const [lang, setLang] = useState<Lang>("en");

  const exportPdf = useCallback(() => {
    window.print();
  }, []);

  return (
    <div className="min-h-screen bg-[#0f0f0f] flex flex-col items-center font-['Inter',sans-serif]">
      <div className="bg-[#1a1a1a] border-b border-white/5 px-6 py-4 flex items-center justify-between w-full shrink-0">
        <div>
          <h1 className="text-white text-[18px] font-semibold">CV – Valentin Portal</h1>
          <p className="text-white/40 text-[12px] mt-0.5">Corporate Template</p>
        </div>
        <div className="flex items-center gap-3">
          {/* Language selector */}
          <div className="flex items-center bg-white/5 rounded-lg overflow-hidden">
            {(["en", "fr"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 h-9 text-[13px] font-medium transition-colors ${
                  lang === l
                    ? "bg-white/15 text-white"
                    : "text-white/40 hover:text-white/70"
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            onClick={exportPdf}
            className="h-9 px-4 rounded-lg bg-white/10 hover:bg-white/15 flex items-center gap-2 text-white text-[13px] transition-colors"
          >
            <Download size={16} />
            Export PDF
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-auto flex justify-center p-8">
        <div className="shrink-0" style={{ transform: "scale(0.85)", transformOrigin: "top center" }}>
          <div id="cv-print" className="shadow-2xl">
            <CvCorporate lang={lang} />
          </div>
        </div>
      </div>
    </div>
  );
}
