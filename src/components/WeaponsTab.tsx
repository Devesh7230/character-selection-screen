import { Character } from "../types";
import { Star, Swords, ShieldCheck, HelpCircle } from "lucide-react";
import HolographicPanel from "./HolographicPanel";
import { motion } from "motion/react";

interface WeaponsTabProps {
  character: Character;
}

export default function WeaponsTab({ character }: WeaponsTabProps) {
  const weapon = character.weapon;

  // Element specific colors
  const elementColors = {
    Cryo: { glow: "shadow-[0_0_55px_rgba(34,211,238,0.35)]", text: "text-cyan-400", border: "border-cyan-500/20" },
    Anemo: { glow: "shadow-[0_0_55px_rgba(52,211,153,0.35)]", text: "text-emerald-400", border: "border-emerald-500/20" },
    Geo: { glow: "shadow-[0_0_55px_rgba(245,158,11,0.35)]", text: "text-amber-500", border: "border-amber-500/20" },
    Pyro: { glow: "shadow-[0_0_55px_rgba(244,63,94,0.35)]", text: "text-rose-500", border: "border-rose-500/20" },
    Hydro: { glow: "shadow-[0_0_55px_rgba(59,130,246,0.35)]", text: "text-blue-500", border: "border-blue-500/20" },
    Electro: { glow: "shadow-[0_0_55px_rgba(217,70,239,0.35)]", text: "text-fuchsia-500", border: "border-fuchsia-500/20" },
    Dendro: { glow: "shadow-[0_0_55px_rgba(34,197,94,0.35)]", text: "text-green-500", border: "border-green-500/20" },
  };

  const currentTheme = elementColors[character.element] || elementColors.Cryo;

  return (
    <div id="tab-weapons-view" className="flex flex-col lg:flex-row items-stretch justify-between w-full h-full space-y-6 lg:space-y-0 lg:space-x-6 px-4 py-2">
      
      {/* COLUMN 1: LEFT SIDEBAR - WEAPON DETAILS & REFINEMENT */}
      <div className="w-full lg:w-[380px] flex flex-col space-y-4">
        
        {/* Core Weapon Title and Stars Card */}
        <HolographicPanel element={character.element} className="p-5 flex flex-col space-y-3">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
              {weapon.type}
            </span>
            <h2 className="text-2xl font-sans font-black tracking-wide text-white mt-1">
              {weapon.name}
            </h2>
          </div>

          {/* Rarity Stars */}
          <div className="flex items-center space-x-1">
            {[...Array(weapon.rarity)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          <p className="text-xs text-slate-400 italic">
            "A masterfully forged armaments of historical importance."
          </p>
        </HolographicPanel>

        {/* Weapons Numerical Properties */}
        <HolographicPanel element={character.element} className="p-5 flex flex-col space-y-4">
          <h4 className="text-xs font-semibold font-mono tracking-widest text-slate-400 uppercase">
            STATISTIC MULTIPLIERS
          </h4>

          <div className="grid grid-cols-2 gap-4">
            {/* Stat 1: Base ATK */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-3">
              <div className="flex items-center space-x-1.5 text-xs text-slate-400 mb-1">
                <Swords className="w-3.5 h-3.5 text-amber-400" />
                <span>Base ATK</span>
              </div>
              <div className="text-xl font-mono font-bold text-white">
                {weapon.baseAtk}
              </div>
            </div>

            {/* Stat 2: SubStat */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-3">
              <div className="flex items-center space-x-1.5 text-xs text-slate-400 mb-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span className="truncate">{weapon.subStat}</span>
              </div>
              <div className="text-xl font-mono font-bold text-white">
                {weapon.subStatValue}
              </div>
            </div>
          </div>
        </HolographicPanel>

        {/* Refinement Level & Ability Text */}
        <HolographicPanel element={character.element} className="p-5 flex-1 flex flex-col space-y-3">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-xs font-bold font-mono text-cyan-300">
              REFINEMENT RANK {weapon.refinement}
            </span>
            <span className="text-[10px] bg-white/5 border border-white/10 text-slate-300 px-2 py-0.5 rounded uppercase font-mono">
              Passive
            </span>
          </div>

          <div className="text-xs text-slate-200 leading-relaxed font-sans space-y-3">
            <p className="font-semibold text-white/95">
              {weapon.description.split(":")[0]}:
            </p>
            <p className="text-slate-300 pl-2 border-l border-white/15">
              {weapon.description.split(":")[1] || weapon.description}
            </p>
          </div>
        </HolographicPanel>

      </div>

      {/* COLUMN 2: CENTER - GLOWING WEAPON RENDER CARD */}
      <div className="flex-1 flex items-center justify-center relative min-h-[350px] lg:min-h-[500px]">
        {/* Futuristic glowing crosshair or circle rings behind weapon */}
        <div className="absolute w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-full border border-dashed border-cyan-500/10 animate-[spin_45s_infinite_linear] pointer-events-none" />
        <div className="absolute w-[1px] h-[360px] bg-gradient-to-b from-transparent via-white/10 to-transparent pointer-events-none" />
        <div className="absolute h-[1px] w-[360px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

        <motion.div
          key={weapon.name}
          initial={{ opacity: 0, scale: 0.85, rotate: -15 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative max-w-xs md:max-w-sm z-10 hover:scale-105 transition-transform duration-500"
        >
          {/* Inner holographic frame for weapon render */}
          <div className={`p-4 rounded-2xl border ${currentTheme.border} bg-white/5 backdrop-blur-xl ${currentTheme.glow}`}>
            <img
              src={character.images.weaponRender}
              alt={weapon.name}
              className="object-contain w-full h-[280px] md:h-[360px] rounded-xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>

      {/* COLUMN 3: RIGHT SIDE - MINI CHARACTER ART RENDER (AS REQUESTED) */}
      <div className="hidden xl:flex w-[260px] items-end justify-center relative select-none">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent z-10 pointer-events-none" />
        
        <motion.img
          key={character.id + "-weapon-right"}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 0.75, x: 0 }}
          transition={{ duration: 0.5 }}
          src={character.images.mainRender}
          alt={character.name}
          className="object-contain h-[450px] object-bottom opacity-70 z-0 pointer-events-none"
          referrerPolicy="no-referrer"
        />
      </div>

    </div>
  );
}
