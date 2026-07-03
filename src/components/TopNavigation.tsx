import { Character } from "../types";
import { Sparkles } from "lucide-react";

interface TopNavigationProps {
  characters: Character[];
  activeCharacter: Character;
  onSelectCharacter: (character: Character) => void;
}

export default function TopNavigation({
  characters,
  activeCharacter,
  onSelectCharacter,
}: TopNavigationProps) {
  const activeIndex = characters.findIndex((c) => c.id === activeCharacter.id);

  const handlePrev = () => {
    if (characters.length === 0) return;
    const safeActiveIndex = activeIndex >= 0 ? activeIndex : 0;
    const prevIndex = (safeActiveIndex - 1 + characters.length) % characters.length;
    onSelectCharacter(characters[prevIndex]);
  };

  const handleNext = () => {
    if (characters.length === 0) return;
    const safeActiveIndex = activeIndex >= 0 ? activeIndex : 0;
    const nextIndex = (safeActiveIndex + 1) % characters.length;
    onSelectCharacter(characters[nextIndex]);
  };

  // Map element types to colors/badges
  const elementColors = {
    Cryo: { ring: "border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]", bg: "bg-cyan-500/20 text-cyan-200", icon: "❄️" },
    Anemo: { ring: "border-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.5)]", bg: "bg-emerald-500/20 text-emerald-200", icon: "🍃" },
    Geo: { ring: "border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)]", bg: "bg-amber-500/20 text-amber-200", icon: "🪨" },
    Pyro: { ring: "border-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.5)]", bg: "bg-rose-500/20 text-rose-200", icon: "🔥" },
    Hydro: { ring: "border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]", bg: "bg-blue-500/20 text-blue-200", icon: "💧" },
    Electro: { ring: "border-fuchsia-500 shadow-[0_0_15px_rgba(217,70,239,0.5)]", bg: "bg-fuchsia-500/20 text-fuchsia-200", icon: "⚡" },
    Dendro: { ring: "border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)]", bg: "bg-green-500/20 text-green-200", icon: "🌱" },
  };

  return (
    <div id="top-navigation" className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3 w-full px-4 md:px-6 py-4 border-b border-white/10 bg-white/5 backdrop-blur-xl">
      {/* Active character element status banner */}
      <div className="flex items-center min-w-0">
        <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase flex items-center space-x-1.5 ${elementColors[activeCharacter.element]?.bg || "bg-white/10 text-white"}`}>
          <span>{elementColors[activeCharacter.element]?.icon}</span>
          <span className="truncate">{activeCharacter.element} / {activeCharacter.name}</span>
        </span>
      </div>

      {/* Center Carousel of Character Thumbnails */}
      <div className="flex items-center min-w-0 space-x-2 md:space-x-4">
        {/* L1 Bumper Indicator (fully clickable) */}
        <button
          id="l1-bumper"
          onClick={handlePrev}
          className="text-xs font-bold text-cyan-400 px-2.5 py-1 border border-cyan-400/30 bg-cyan-400/10 rounded tracking-widest uppercase cursor-pointer active:scale-95 transition-all"
          title="Previous Character (or Press Q)"
        >
          L1
        </button>

        {/* Character Thumbs List */}
        <div className="flex items-center gap-2 md:gap-3 max-w-[46vw] md:max-w-[54vw] xl:max-w-[680px] overflow-x-auto no-scrollbar px-2 py-2 scroll-smooth">
          {characters.map((char) => {
            const isActive = char.id === activeCharacter.id;
            const elementInfo = elementColors[char.element];
            return (
              <button
                key={char.id}
                id={`char-thumb-${char.id}`}
                onClick={() => onSelectCharacter(char)}
                className={`
                  relative group w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border transition-all duration-300 cursor-pointer p-0.5 flex-none
                  ${isActive 
                    ? `scale-110 border-2 ${elementInfo.ring} z-20` 
                    : "border-white/20 opacity-60 hover:opacity-100 hover:scale-105 z-10"
                  }
                `}
              >
                {/* Background base layer to ensure nice image contrasts */}
                <div className={`absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent rounded-full`} />
                
                {/* Face image (centered object-cover object-top) */}
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-800">
                  <img
                    src={char.images.profileThumb}
                    alt={char.name}
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Micro element badge on thumb corner */}
                <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-slate-900/80 border border-white/20 text-[9px] flex items-center justify-center">
                  {elementInfo?.icon}
                </span>

                {/* Selected dot indicator like the design layout */}
                {isActive && (
                  <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* R1 Bumper Indicator (fully clickable) */}
        <button
          id="r1-bumper"
          onClick={handleNext}
          className="text-xs font-bold text-cyan-400 px-2.5 py-1 border border-cyan-400/30 bg-cyan-400/10 rounded tracking-widest uppercase cursor-pointer active:scale-95 transition-all"
          title="Next Character (or Press E)"
        >
          R1
        </button>
      </div>

      {/* Decorative Server-Side UTC indicator / Gaming Time */}
      <div className="hidden md:flex items-center justify-end space-x-1.5 text-xs text-slate-400 font-mono min-w-0">
        <Sparkles className="w-3.5 h-3.5 text-yellow-400 animate-pulse" />
        <span>SYS ACTIVE</span>
      </div>
    </div>
  );
}
