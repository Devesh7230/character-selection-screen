import { useState, useEffect } from "react";
import { Character } from "./types";
import { characterData } from "./data/characterData";
import TopNavigation from "./components/TopNavigation";
import Sidebar from "./components/Sidebar";
import AttributesTab from "./components/AttributesTab";
import WeaponsTab from "./components/WeaponsTab";
import ConstellationTab from "./components/ConstellationTab";
import TalentsTab from "./components/TalentsTab";
import ProfileTab from "./components/ProfileTab";
import { Keyboard, HelpCircle } from "lucide-react";

export default function App() {
  // Manage state of our character database so locks can be toggled interactively
  const [characters, setCharacters] = useState<Character[]>(characterData);
  const [activeCharacterId, setActiveCharacterId] = useState<string>(characterData[0]?.id || "");
  const [activeTab, setActiveTab] = useState<string>("Attributes");
  const [showControlsHint, setShowControlsHint] = useState<boolean>(true);

  // Get active character reference
  const activeCharacter = characters.find((c) => c.id === activeCharacterId) || characters[0];

  useEffect(() => {
    if (!activeCharacter && characters.length > 0) {
      setActiveCharacterId(characters[0].id);
      return;
    }

    if (activeCharacter && activeCharacter.id !== activeCharacterId) {
      setActiveCharacterId(activeCharacter.id);
    }
  }, [activeCharacter, activeCharacterId, characters]);

  // Keybindings (Q to go left, E to go right)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Avoid firing when inputting text
      if (document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA") {
        return;
      }

      if (characters.length === 0) return;

      const activeIndex = characters.findIndex((c) => c.id === activeCharacterId);
      const safeActiveIndex = activeIndex >= 0 ? activeIndex : 0;

      if (event.key.toLowerCase() === "q") {
        const prevIndex = (safeActiveIndex - 1 + characters.length) % characters.length;
        setActiveCharacterId(characters[prevIndex].id);
      } else if (event.key.toLowerCase() === "e") {
        const nextIndex = (safeActiveIndex + 1) % characters.length;
        setActiveCharacterId(characters[nextIndex].id);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeCharacterId, characters]);

  // Interactive toggle function for Constellation lock states
  const handleToggleConstellation = (nodeId: number) => {
    setCharacters((prevChars) =>
      prevChars.map((char) => {
        if (char.id !== activeCharacterId) return char;

        const updatedConstellations = char.constellations.map((node) => {
          if (node.id !== nodeId) return node;
          return { ...node, isLocked: !node.isLocked };
        });

        return { ...char, constellations: updatedConstellations };
      })
    );
  };

  // Interactive toggle function for Talent lock states
  const handleToggleTalent = (nodeId: number) => {
    setCharacters((prevChars) =>
      prevChars.map((char) => {
        if (char.id !== activeCharacterId) return char;

        const updatedTalents = char.talents.map((node) => {
          if (node.id !== nodeId) return node;
          return { ...node, isLocked: !node.isLocked };
        });

        return { ...char, talents: updatedTalents };
      })
    );
  };

  // Render the specific layout view based on selected tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "Attributes":
        return <AttributesTab character={activeCharacter} />;
      case "Weapons":
        return <WeaponsTab character={activeCharacter} />;
      case "Constellation":
        return (
          <ConstellationTab
            character={activeCharacter}
            onToggleConstellation={handleToggleConstellation}
          />
        );
      case "Talents":
        return (
          <TalentsTab
            character={activeCharacter}
            onToggleTalent={handleToggleTalent}
          />
        );
      case "Profile":
        return <ProfileTab character={activeCharacter} />;
      default:
        return <AttributesTab character={activeCharacter} />;
    }
  };

  // Element specific full-screen background atmospheres (rich deeply saturated core glows behind the frosted card panels)
  const backgroundAtmosphere = {
    Cryo: "bg-radial from-cyan-950/60 via-slate-950 to-neutral-950 text-cyan-400",
    Anemo: "bg-radial from-emerald-950/60 via-zinc-950 to-neutral-950 text-emerald-400",
    Geo: "bg-radial from-amber-950/45 via-stone-950 to-neutral-950 text-amber-500",
    Pyro: "bg-radial from-rose-950/60 via-neutral-950 to-black text-rose-500",
    Hydro: "bg-radial from-blue-950/60 via-slate-950 to-neutral-950 text-blue-500",
    Electro: "bg-radial from-fuchsia-950/60 via-neutral-950 to-black text-fuchsia-500",
    Dendro: "bg-radial from-green-950/60 via-stone-950 to-neutral-950 text-green-500",
  };

  const bgStyle = backgroundAtmosphere[activeCharacter.element] || backgroundAtmosphere.Cryo;

  return (
    <main
      id="genshin-app-viewport"
      className={`relative w-full min-h-screen text-white flex flex-col justify-between overflow-x-hidden select-none transition-all duration-700 ${bgStyle}`}
    >
      {/* BACKGROUND FLOATING EFFECTS: Element Particle Shimmers */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Subtle radial element glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full opacity-20 bg-gradient-to-tr from-current via-transparent to-transparent blur-3xl" />
        
        {/* Particle effect loops */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.02] via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* 1. TOP CAROUSEL SELECTOR & L1/R1 DESIGN */}
        <TopNavigation
          characters={characters}
          activeCharacter={activeCharacter}
          onSelectCharacter={(char) => setActiveCharacterId(char.id)}
        />

        {/* 2. CORE LAYOUT SPLIT: Left Sidebar + Centered Content Stage */}
        <div className="flex-1 flex flex-col md:flex-row items-stretch w-full max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-8 space-y-6 md:space-y-0">
          
          {/* LEFT SIDEBAR (ATTRIBUTES, WEAPONS, CONSTELLATION, TALENTS, PROFILE) */}
          <Sidebar
            activeTab={activeTab}
            onSelectTab={(tab) => setActiveTab(tab)}
            character={activeCharacter}
          />

          {/* MAIN TAB CONTENT VIEW STAGE */}
          <section className="flex-1 min-h-[500px] flex items-center justify-center pl-0 md:pl-8">
            {renderTabContent()}
          </section>
        </div>

        {/* 3. CONSOLE FOOTER CONTROLS HUD */}
        <footer id="hud-footer" className="w-full px-6 py-3 border-t border-white/10 bg-white/5 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-mono space-y-2 sm:space-y-0">
          
          {/* Control Guide Buttons */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1.5">
              <span className="bg-white/5 text-cyan-300 border border-white/10 px-2 py-0.5 rounded text-[10px] font-bold">Q</span>
              <span className="bg-white/5 text-cyan-300 border border-white/10 px-2 py-0.5 rounded text-[10px] font-bold">E</span>
              <span className="text-slate-300">Switch character</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-1.5">
              <span className="text-white">● Click Nodes</span>
              <span className="text-slate-400">Toggle unlock</span>
            </div>
          </div>

          {/* Optional control layout disclaimer */}
          <div className="flex items-center space-x-4">
            {showControlsHint && (
              <span className="hidden sm:inline-block text-[10px] bg-cyan-950/40 text-cyan-300 border border-cyan-500/20 px-2 py-0.5 rounded">
                Pro Keyboard bindings active
              </span>
            )}
            <div className="flex items-center space-x-1">
              <span>DESIGN STATUS:</span>
              <span className="text-white font-bold tracking-wider uppercase">ACTIVE PROTOCOL</span>
            </div>
          </div>

        </footer>
      </div>
    </main>
  );
}
