import { getCvData, labels, type Lang } from "./cv-data";
import { Mail, Phone, Globe, MapPin, Briefcase, GraduationCap, Code, Heart, Home, Users, Wrench, Star } from "lucide-react";

export function CvCorporate({ lang = "en" }: { lang?: Lang }) {
  const data = getCvData(lang);
  const l = labels[lang];
  return (
    <div className="w-[794px] h-[1123px] bg-white text-[#2c3e50] font-['Poppins',sans-serif] relative overflow-hidden">
      {/* Top bar */}
      <div className="h-[120px] bg-gradient-to-r from-[#1a3a5c] to-[#2980b9] relative">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "20px 20px" }} />
        <div className="absolute bottom-0 left-0 right-0 h-[40px] bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />
      </div>

      <div className="flex px-8 -mt-[90px] relative z-10">
        {/* Photo */}
        <div className="w-[130px] h-[130px] rounded-2xl overflow-hidden border-4 border-white shadow-xl shrink-0">
          <img src={data.photo} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="ml-5 pt-2">
          <h1 className="text-[28px] font-bold text-white leading-tight">{data.name}</h1>
          <p className="text-[13px] text-white/80 tracking-[2px] uppercase">{data.title}</p>
        </div>
      </div>

      {/* Contact bar */}
      <div className="flex gap-5 px-8 py-2.5 mt-2 bg-[#f8f9fa] border-y border-[#e9ecef] flex-wrap">
        {[
          { icon: Phone, text: data.phone },
          { icon: Mail, text: data.email },
          { icon: Home, text: data.address },
          { icon: MapPin, text: data.location },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <item.icon size={12} className="text-[#2980b9]" />
            <span className="text-[9px] text-[#666]">{item.text}</span>
          </div>
        ))}
      </div>

      <div className="flex px-8 py-4 gap-8">
        {/* Main */}
        <div className="flex-1">
          {/* About */}
          <div className="mb-5">
            <h2 className="text-[11px] font-bold uppercase tracking-[2px] text-[#1a3a5c] mb-2 flex items-center gap-2">
              <span className="w-5 h-0.5 bg-[#2980b9]" />{l.profile}
            </h2>
            <p className="text-[10px] leading-[1.8] text-[#555]">{data.about}</p>
          </div>

          {/* Experience */}
          <div className="mb-5">
            <h2 className="text-[11px] font-bold uppercase tracking-[2px] text-[#1a3a5c] mb-3 flex items-center gap-2">
              <Briefcase size={12} className="text-[#2980b9]" />{l.experience}
            </h2>
            <div className="space-y-3">
              {data.experience.map((exp, i) => (
                <div key={i} className="relative pl-3.5 border-l-2 border-[#2980b9]/20">
                  <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-[#2980b9]" />
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-[11px] font-bold text-[#1a3a5c]">{exp.role}</h3>
                      <p className="text-[9px] text-[#2980b9]">{exp.company}</p>
                    </div>
                    <span className="text-[8px] bg-[#2980b9]/10 text-[#2980b9] px-2 py-0.5 rounded font-medium shrink-0">{exp.period}</span>
                  </div>
                  <p className="text-[9px] leading-[1.7] text-[#666] mt-1">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-[11px] font-bold uppercase tracking-[2px] text-[#1a3a5c] mb-3 flex items-center gap-2">
              <GraduationCap size={12} className="text-[#2980b9]" />{l.education}
            </h2>
            {data.education.map((edu, i) => (
              <div key={i} className="mb-2.5 pl-3.5 border-l-2 border-[#2980b9]/20 relative">
                <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-[#2980b9]" />
                <h3 className="text-[11px] font-bold text-[#1a3a5c]">{edu.school}</h3>
                <p className="text-[9px] text-[#666]">{edu.degree}</p>
                <span className="text-[8px] text-[#2980b9]">{edu.year}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-[190px] shrink-0">
          {/* Skills */}
          <div className="mb-4 bg-[#f8f9fa] rounded-xl p-3.5">
            <h2 className="text-[10px] font-bold uppercase tracking-[2px] text-[#1a3a5c] mb-2.5 flex items-center gap-1.5">
              <Users size={11} className="text-[#2980b9]" />{l.softSkills}
            </h2>
            <div className="space-y-2">
              {data.softSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-0.5">
                    <span className="text-[9px] text-[#555]">{skill.name}</span>
                    <span className="text-[8px] text-[#2980b9]">{skill.rating * 20}%</span>
                  </div>
                  <div className="w-full bg-[#e9ecef] rounded-full h-1">
                    <div className="bg-[#2980b9] h-1 rounded-full" style={{ width: `${skill.rating * 20}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-4 bg-[#f8f9fa] rounded-xl p-3.5">
            <h2 className="text-[10px] font-bold uppercase tracking-[2px] text-[#1a3a5c] mb-2.5 flex items-center gap-1.5">
              <Code size={11} className="text-[#2980b9]" />{l.technical}
            </h2>
            <div className="flex flex-wrap gap-1">
              {data.skills.map((s) => (
                <span key={s} className="bg-white text-[#1a3a5c] text-[8px] px-2 py-0.5 rounded-md border border-[#e9ecef] font-medium">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="mb-4 bg-[#f8f9fa] rounded-xl p-3.5">
            <h2 className="text-[10px] font-bold uppercase tracking-[2px] text-[#1a3a5c] mb-2.5 flex items-center gap-1.5">
              <Wrench size={11} className="text-[#2980b9]" />{l.tools}
            </h2>
            <div className="flex flex-wrap gap-1">
              {data.software.map((s) => (
                <span key={s} className="bg-white text-[#1a3a5c] text-[8px] px-2 py-0.5 rounded-md border border-[#e9ecef] font-medium">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="mb-4 bg-[#f8f9fa] rounded-xl p-3.5">
            <h2 className="text-[10px] font-bold uppercase tracking-[2px] text-[#1a3a5c] mb-2.5 flex items-center gap-1.5">
              <Heart size={11} className="text-[#2980b9]" />{l.interests}
            </h2>
            <div className="flex flex-wrap gap-1">
              {data.interests.map((h) => (
                <span key={h} className="text-[8px] text-[#555] bg-white px-2 py-0.5 rounded-md border border-[#e9ecef]">
                  {h}
                </span>
              ))}
            </div>
          </div>

          {/* Other */}
          <div className="bg-[#f8f9fa] rounded-xl p-3.5">
            <h2 className="text-[10px] font-bold uppercase tracking-[2px] text-[#1a3a5c] mb-2.5 flex items-center gap-1.5">
              <Star size={11} className="text-[#2980b9]" />{l.other}
            </h2>
            <div className="space-y-1">
              {data.extras.map((e) => (
                <p key={e} className="text-[8px] text-[#555]">• {e}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}