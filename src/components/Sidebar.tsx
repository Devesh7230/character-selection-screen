import { Character } from "../types";
import { Shield, Swords, Sparkles, Award, User } from "lucide-react";

interface SidebarProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
  character: Character;
}

export default function Sidebar({ activeTab, onSelectTab, character }: SidebarProps) {
  // Tabs configuration with specialized icons
  const tabs = [
    { id: "Attributes", name: "Attributes", icon: Shield },
    { id: "Weapons", name: "Weapons", icon: Swords },
    { id: "Constellation", name: "Constellation", icon: Sparkles },
    { id: "Talents", name: "Talents", icon: Award },
    { id: "Profile", name: "Profile", icon: User },
  ];

  // Element specific styles
  const elementStyles = {
    Cryo: {
      gradient: "from-cyan-500/20 to-transparent border-cyan-400",
      text: "text-cyan-200",
      diamondBg: "bg-cyan-300",
    },
    Anemo: {
      gradient: "from-emerald-500/20 to-transparent border-emerald-400",
      text: "text-emerald-200",
      diamondBg: "bg-emerald-300",
    },
    Geo: {
      gradient: "from-amber-500/20 to-transparent border-amber-500",
      text: "text-amber-200",
      diamondBg: "bg-amber-300",
    },
    Pyro: {
      gradient: "from-rose-500/20 to-transparent border-rose-500",
      text: "text-rose-200",
      diamondBg: "bg-rose-300",
    },
    Hydro: {
      gradient: "from-blue-500/20 to-transparent border-blue-500",
      text: "text-blue-200",
      diamondBg: "bg-blue-300",
    },
    Electro: {
      gradient: "from-fuchsia-500/20 to-transparent border-fuchsia-500",
      text: "text-fuchsia-200",
      diamondBg: "bg-fuchsia-300",
    },
    Dendro: {
      gradient: "from-green-500/20 to-transparent border-green-500",
      text: "text-green-200",
      diamondBg: "bg-green-300",
    },
  };

  const style = elementStyles[character.element] || elementStyles.Cryo;

  return (
    <div id="sidebar-tabs" className="w-full md:w-64 flex flex-row md:flex-col items-center md:items-start space-x-1 space-y-0 md:space-x-0 md:space-y-4 px-2 sm:px-4 py-2 md:py-6 border-b md:border-b-0 md:border-r border-white/10 bg-white/5 md:bg-transparent">
      {/* Optional decorative tribe icon / header on desktop */}
      <div className="hidden md:block px-4 pb-4 border-b border-white/10 w-full mb-2">
        <h2 className="text-xs font-mono tracking-widest text-slate-400 uppercase">SYSTEM DIAGNOSTICS</h2>
        <div className="text-lg font-sans font-bold tracking-tight text-white mt-1 flex items-center space-x-2">
          <span>{character.name}</span>
          <span className="text-xs font-normal text-slate-500 font-mono">Lvl {character.level}</span>
        </div>
      </div>

      <nav className="flex flex-row md:flex-col w-full overflow-x-auto md:overflow-visible no-scrollbar gap-2 md:gap-0 md:space-y-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              id={`sidebar-tab-${tab.id.toLowerCase()}`}
              onClick={() => onSelectTab(tab.id)}
              className={`
                flex flex-none md:flex-auto items-center space-x-3 md:space-x-4 py-3 px-4 md:px-6 rounded-r-full w-auto md:w-full text-left font-sans transition-all duration-200 cursor-pointer whitespace-nowrap
                ${isActive 
                  ? `bg-gradient-to-r ${style.gradient} border-l-4 ${style.text}`
                  : "text-slate-400 hover:text-white border-l-4 border-transparent opacity-60 hover:opacity-100"
                }
              `}
            >
              {/* Rotating Diamond Frames */}
              <div className={`w-5 h-5 border border-white/40 rotate-45 flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${isActive ? "border-white" : ""}`}>
                {isActive && (
                  <div className={`w-1.5 h-1.5 rotate-45 ${style.diamondBg}`} />
                )}
              </div>

              {/* Tab Title */}
              <span className="font-bold tracking-widest text-xs uppercase">
                {tab.name}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
