import { useState, useCallback, useRef } from "react";
import { Download, Loader2 } from "lucide-react";
import { toCanvas } from "html-to-image";
import { jsPDF } from "jspdf";
import { CvCorporate } from "./components/cv-corporate";
import type { Lang } from "./components/cv-data";

const CV_W = 794;
const CV_H = 1123;
const SCALE = 5; // 5x resolution → 3970×5615 capture

export default function App() {
  const [lang, setLang] = useState<Lang>("en");
  const [exporting, setExporting] = useState(false);
  const cvRef = useRef<HTMLDivElement>(null);

  const exportPdf = useCallback(async () => {
    const cvEl = cvRef.current;
    if (!cvEl || exporting) return;
    setExporting(true);

    try {
      // Clone CV into an off-screen container at full scale (no 0.85 transform)
      const clone = cvEl.cloneNode(true) as HTMLElement;
      clone.style.position = "fixed";
      clone.style.left = "-9999px";
      clone.style.top = "0";
      clone.style.width = `${CV_W}px`;
      clone.style.height = `${CV_H}px`;
      clone.style.transform = "none";
      clone.style.boxShadow = "none";
      document.body.appendChild(clone);

      // Capture at high resolution
      const canvas = await toCanvas(clone, {
        width: CV_W,
        height: CV_H,
        pixelRatio: SCALE,
        cacheBust: true,
        skipAutoScale: true,
        style: {
          transform: "none",
          transformOrigin: "top left",
        },
      });

      document.body.removeChild(clone);

      // Use JPEG at maximum quality — much smaller file than PNG, still crisp
      const imgData = canvas.toDataURL("image/jpeg", 1.0);

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
        compress: false,
      });
      pdf.addImage(imgData, "JPEG", 0, 0, 210, 297, undefined, "NONE");
      pdf.save(`CV_Valentin_Portal_Corporate_${lang.toUpperCase()}.pdf`);
    } catch (err) {
      console.error("PDF export failed:", err);
    } finally {
      setExporting(false);
    }
  }, [exporting, lang]);

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
            disabled={exporting}
            className="h-9 px-4 rounded-lg bg-white/10 hover:bg-white/15 disabled:opacity-50 flex items-center gap-2 text-white text-[13px] transition-colors"
          >
            {exporting ? <Loader2 size={16} className="animate-spin" /> : <Download size={16} />}
            {exporting ? "Exporting..." : "Export PDF"}
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-auto flex justify-center p-8">
        <div className="shrink-0" style={{ transform: "scale(0.85)", transformOrigin: "top center" }}>
          <div ref={cvRef} className="shadow-2xl">
            <CvCorporate lang={lang} />
          </div>
        </div>
      </div>
    </div>
  );
}
