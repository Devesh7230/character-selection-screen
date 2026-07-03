import { Character } from "../types";
import { User, Calendar, MapPin, Mic, FileText } from "lucide-react";
import HolographicPanel from "./HolographicPanel";
import { motion } from "motion/react";

interface ProfileTabProps {
  character: Character;
}

export default function ProfileTab({ character }: ProfileTabProps) {
  const profile = character.profile;

  // Element specific styles
  const elementTheme = {
    Cryo: { border: "border-cyan-500/20", glow: "shadow-[0_0_50px_rgba(34,211,238,0.25)]", text: "text-cyan-400" },
    Anemo: { border: "border-emerald-500/20", glow: "shadow-[0_0_50px_rgba(52,211,153,0.25)]", text: "text-emerald-400" },
    Geo: { border: "border-amber-500/20", glow: "shadow-[0_0_50px_rgba(245,158,11,0.25)]", text: "text-amber-400" },
    Pyro: { border: "border-rose-500/20", glow: "shadow-[0_0_50px_rgba(244,63,94,0.25)]", text: "text-rose-400" },
    Hydro: { border: "border-blue-500/20", glow: "shadow-[0_0_50px_rgba(59,130,246,0.25)]", text: "text-blue-400" },
    Electro: { border: "border-fuchsia-500/20", glow: "shadow-[0_0_50px_rgba(217,70,239,0.25)]", text: "text-fuchsia-400" },
    Dendro: { border: "border-green-500/20", glow: "shadow-[0_0_50px_rgba(34,197,94,0.25)]", text: "text-green-400" },
  };

  const currentTheme = elementTheme[character.element] || elementTheme.Cryo;

  return (
    <div id="tab-profile-view" className="flex flex-col lg:flex-row items-center justify-between w-full h-full space-y-6 lg:space-y-0 lg:space-x-8 px-4 py-2">
      
      {/* COLUMN 1: LEFT SIDE - BIOGRAPHICAL DOSSIER */}
      <div className="w-full lg:w-[450px] flex flex-col space-y-4">
        
        {/* Core Profile Metrics Block */}
        <HolographicPanel element={character.element} className="p-5 flex flex-col space-y-4">
          <h3 className="text-xs font-semibold font-mono tracking-widest text-slate-400 uppercase flex items-center space-x-2">
            <User className="w-3.5 h-3.5" />
            <span>METRIC DOSSIER</span>
          </h3>

          <div className="space-y-3.5 border-t border-white/5 pt-3">
            {/* Metric 1: Region */}
            <div className="flex items-center justify-between text-xs">
              <span className="flex items-center space-x-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5" />
                <span>Region of Origin</span>
              </span>
              <span className="font-sans font-bold text-white uppercase tracking-wider bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full">
                {profile.region}
              </span>
            </div>

            {/* Metric 2: Birthday */}
            <div className="flex items-center justify-between text-xs">
              <span className="flex items-center space-x-2 text-slate-400">
                <Calendar className="w-3.5 h-3.5" />
                <span>Birthday</span>
              </span>
              <span className="font-mono font-semibold text-slate-200">
                {profile.birthday}
              </span>
            </div>

            {/* Metric 3: Voice Actor */}
            <div className="flex items-center justify-between text-xs">
              <span className="flex items-center space-x-2 text-slate-400">
                <Mic className="w-3.5 h-3.5 text-yellow-400" />
                <span>Voice Actor</span>
              </span>
              <span className={`font-sans font-bold ${currentTheme.text}`}>
                {profile.voiceActor}
              </span>
            </div>
          </div>
        </HolographicPanel>

        {/* Narrative Biography Block */}
        <HolographicPanel element={character.element} className="p-5 flex-1 flex flex-col space-y-3">
          <h3 className="text-xs font-semibold font-mono tracking-widest text-slate-400 uppercase flex items-center space-x-2 border-b border-white/15 pb-2">
            <FileText className="w-3.5 h-3.5" />
            <span>CHARACTER CHRONOLOGY</span>
          </h3>

          <div className="text-xs text-slate-300 leading-relaxed font-sans overflow-y-auto max-h-[220px] pr-2 scrollbar-thin scrollbar-thumb-white/10">
            <p className="indent-4 mb-4">
              {profile.storyText}
            </p>
            <p className="italic text-slate-400 pl-3 border-l border-white/10">
              "The stars align differently in the sky for those who hold elements. To walk the path of {character.element} requires unmatched focus and complete adherence to destiny."
            </p>
          </div>
        </HolographicPanel>

      </div>

      {/* COLUMN 2: CENTER - HERO CHARACTER PORTRAIT (AS REQUESTED) */}
      <div className="flex-1 flex items-center justify-center relative min-h-[400px] lg:min-h-[500px]">
        {/* Concentric rings behind character */}
        <div className="absolute w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-full border border-double border-white/5 animate-[spin_40s_infinite_linear] pointer-events-none" />
        
        <motion.div
          key={character.id + "-profile"}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative max-w-sm md:max-w-md z-10 drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
        >
          <img
            src={character.images.mainRender}
            alt={character.name}
            className={`object-contain max-h-[420px] md:max-h-[520px] rounded-3xl mx-auto border border-white/10 ${currentTheme.glow}`}
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>

    </div>
  );
}
