import { Character } from "../types";
import { Star, Shield, Heart, Swords, ShieldAlert, Sparkles, Flame } from "lucide-react";
import HolographicPanel from "./HolographicPanel";
import { motion } from "motion/react";

interface AttributesTabProps {
  character: Character;
}

export default function AttributesTab({ character }: AttributesTabProps) {
  // Stats icons map
  const statsConfig = [
    { key: "maxHp", label: "Max HP", icon: Heart, color: "text-rose-400" },
    { key: "atk", label: "ATK", icon: Swords, color: "text-amber-400" },
    { key: "def", label: "DEF", icon: Shield, color: "text-blue-400" },
    { key: "elementalMastery", label: "Elemental Mastery", icon: Sparkles, color: "text-emerald-400" },
    { key: "maxStamina", label: "Max Stamina", icon: Flame, color: "text-orange-400" },
  ];

  // Element specific colors
  const elementColors = {
    Cryo: { glow: "shadow-[0_0_50px_rgba(34,211,238,0.25)]", text: "text-cyan-400", bg: "bg-cyan-500/20" },
    Anemo: { glow: "shadow-[0_0_50px_rgba(52,211,153,0.25)]", text: "text-emerald-400", bg: "bg-emerald-500/20" },
    Geo: { glow: "shadow-[0_0_50px_rgba(245,158,11,0.25)]", text: "text-amber-500", bg: "bg-amber-500/20" },
    Pyro: { glow: "shadow-[0_0_50px_rgba(244,63,94,0.25)]", text: "text-rose-500", bg: "bg-rose-500/20" },
    Hydro: { glow: "shadow-[0_0_50px_rgba(59,130,246,0.25)]", text: "text-blue-500", bg: "bg-blue-500/20" },
    Electro: { glow: "shadow-[0_0_50px_rgba(217,70,239,0.25)]", text: "text-fuchsia-500", bg: "bg-fuchsia-500/20" },
    Dendro: { glow: "shadow-[0_0_50px_rgba(34,197,94,0.25)]", text: "text-green-500", bg: "bg-green-500/20" },
  };

  const currentTheme = elementColors[character.element] || elementColors.Cryo;

  return (
    <div id="tab-attributes-view" className="flex flex-col lg:flex-row items-center justify-between w-full h-full space-y-5 lg:space-y-0 lg:space-x-8 px-2 sm:px-4 py-1 md:py-2">
      
      {/* LEFT / CENTER: Full Character 2D Image with ambient background glowing effect */}
      <div className="flex-1 flex items-center justify-center relative min-h-[320px] sm:min-h-[400px] lg:min-h-[500px] w-full">
        {/* Holographic grid and circular runes backdrop */}
        <div className="absolute w-[300px] h-[300px] md:w-[420px] md:h-[420px] rounded-full border border-white/5 bg-radial from-white/[0.03] to-transparent animate-[spin_40s_infinite_linear] pointer-events-none" />
        <div className="absolute w-[240px] h-[240px] md:w-[350px] md:h-[350px] rounded-full border border-dashed border-white/10 pointer-events-none animate-[spin_60s_infinite_reverse]" />
        
        {/* Main Character Render with Slide Up Fade In */}
        <motion.div
          key={character.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-full max-w-[22rem] md:max-w-md lg:max-w-lg z-10 drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
        >
          <img
            src={character.images.mainRender}
            alt={character.name}
            className={`object-contain w-full max-h-[420px] md:max-h-[520px] rounded-3xl mx-auto border border-white/10 ${currentTheme.glow}`}
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>

      {/* RIGHT SIDEBAR: Character Details and Core Stats */}
      <div className="w-full lg:w-[420px] flex flex-col space-y-4">
        
        {/* Character Title Card */}
        <HolographicPanel element={character.element} className="p-4 sm:p-5 flex flex-col space-y-3">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
            <div className="min-w-0">
              <div className="flex items-center space-x-2">
                <span className={`text-xs px-2.5 py-0.5 rounded-full font-mono font-bold tracking-widest ${currentTheme.bg} ${currentTheme.text}`}>
                  {character.element}
                </span>
                <span className="text-xs text-slate-400 font-mono">Level {character.level}</span>
              </div>
              <h1 className="text-3xl sm:text-3xl font-sans font-black tracking-wide text-white mt-1.5 break-words">{character.name}</h1>
            </div>

            {/* Five Star indicator */}
            <div className="flex items-center space-x-0.5 bg-yellow-500/10 border border-yellow-500/20 rounded-md px-2 py-1 self-start sm:self-auto">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed font-sans italic border-l-2 border-white/10 pl-3">
            "{character.description}"
          </p>
        </HolographicPanel>

        {/* Detailed Stats Panel */}
        <HolographicPanel element={character.element} className="p-4 sm:p-5 flex flex-col space-y-4">
          <h3 className="text-xs font-semibold font-mono tracking-widest text-slate-400 uppercase flex items-center space-x-2">
            <span className="w-1.5 h-1.5 bg-current rotate-45" />
            <span>BASE PROPERTIES</span>
          </h3>

          <div className="space-y-3.5">
            {statsConfig.map((stat) => {
              const IconComp = stat.icon;
              const val = character.stats[stat.key as keyof typeof character.stats];
              
              // Max scale representing max game attributes for visualization
              const maxScaleMap: Record<string, number> = {
                maxHp: 24000,
                atk: 3000,
                def: 3000,
                elementalMastery: 400,
                maxStamina: 240,
              };
              const maxVal = maxScaleMap[stat.key] || 1000;
              const fillPercent = Math.min((val / maxVal) * 100, 100);

              return (
                <div key={stat.key} className="flex flex-col space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-2 text-slate-300">
                      <IconComp className={`w-3.5 h-3.5 ${stat.color}`} />
                      <span>{stat.label}</span>
                    </div>
                    <span className="font-mono font-bold text-white tracking-wide">
                      {val.toLocaleString()}
                    </span>
                  </div>
                  {/* Glass progress gauge */}
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/10 relative">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${fillPercent}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className={`h-full bg-gradient-to-r from-white/20 to-current ${currentTheme.text}`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </HolographicPanel>

        {/* Friendship Level Card */}
        <HolographicPanel element={character.element} className="p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
              <Heart className="w-4.5 h-4.5 text-rose-400 animate-pulse" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-300 font-mono">FRIENDSHIP BOND</div>
              <div className="text-xs text-slate-500 font-mono">Level {character.friendshipLevel} / 10</div>
            </div>
          </div>

          {/* Mini progress line */}
          <div className="w-full sm:w-1/3 h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/10">
            <div 
              className="h-full bg-rose-500" 
              style={{ width: `${(character.friendshipLevel / 10) * 100}%` }}
            />
          </div>
        </HolographicPanel>

      </div>

    </div>
  );
}
