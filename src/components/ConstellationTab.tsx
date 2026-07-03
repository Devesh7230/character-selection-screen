import { useState } from "react";
import { Character, NodeItem } from "../types";
import { Lock, Unlock, X, Sparkles, Star } from "lucide-react";
import HolographicPanel from "./HolographicPanel";
import { motion, AnimatePresence } from "motion/react";

interface ConstellationTabProps {
  character: Character;
  onToggleConstellation: (nodeId: number) => void;
}

export default function ConstellationTab({
  character,
  onToggleConstellation,
}: ConstellationTabProps) {
  const [selectedNode, setSelectedNode] = useState<NodeItem | null>(null);

  // SVG Node Coordinates for a balanced emblem shape (0-100 percentage scale for responsive SVG positioning)
  // We can vary coordinates slightly based on character name to give each character a unique layout!
  const getCoordinates = (charId: string) => {
    switch (charId) {
      case "skirk":
        // Diamond sword-like structure
        return [
          { x: 50, y: 15 },  // Node 1 (Tip)
          { x: 30, y: 40 },  // Node 2 (Left Guard)
          { x: 70, y: 40 },  // Node 3 (Right Guard)
          { x: 50, y: 55 },  // Node 4 (Hilt top)
          { x: 50, y: 75 },  // Node 5 (Hilt bottom)
          { x: 50, y: 90 },  // Node 6 (Pommel)
        ];
      case "chasca":
        // Bird wing-like structure
        return [
          { x: 50, y: 20 },  // Node 1 (Head)
          { x: 20, y: 40 },  // Node 2 (Left wing joint)
          { x: 80, y: 40 },  // Node 3 (Right wing joint)
          { x: 10, y: 65 },  // Node 4 (Left wing tip)
          { x: 90, y: 65 },  // Node 5 (Right wing tip)
          { x: 50, y: 80 },  // Node 6 (Tail)
        ];
      case "mavuika":
        // Flaming Crown emblem
        return [
          { x: 50, y: 25 },  // Node 1 (Center Spike)
          { x: 25, y: 35 },  // Node 2 (Left Peak)
          { x: 75, y: 35 },  // Node 3 (Right Peak)
          { x: 30, y: 70 },  // Node 4 (Left Base)
          { x: 70, y: 70 },  // Node 5 (Right Base)
          { x: 50, y: 85 },  // Node 6 (Bottom jewel)
        ];
      default:
        return [
          { x: 50, y: 15 },
          { x: 25, y: 45 },
          { x: 75, y: 45 },
          { x: 50, y: 60 },
          { x: 35, y: 85 },
          { x: 65, y: 85 },
        ];
    }
  };

  const coords = getCoordinates(character.id);

  // Connection paths (which nodes link together with lines)
  const getConnections = (charId: string) => {
    switch (charId) {
      case "skirk":
        return [
          [0, 1], [0, 2], [1, 3], [2, 3], [3, 4], [4, 5]
        ];
      case "chasca":
        return [
          [0, 1], [0, 2], [1, 3], [2, 4], [1, 5], [2, 5]
        ];
      case "mavuika":
        return [
          [0, 1], [0, 2], [1, 3], [2, 4], [3, 5], [4, 5], [3, 4]
        ];
      default:
        return [
          [0, 1], [0, 2], [1, 3], [2, 3], [3, 4], [3, 5], [4, 5]
        ];
    }
  };

  const connections = getConnections(character.id);

  const elementTheme = {
    Cryo: { glow: "stroke-cyan-400 shadow-cyan-400", nodeColor: "bg-cyan-300 shadow-[0_0_15px_#22d3ee]", activeBg: "bg-cyan-500", text: "text-cyan-400" },
    Anemo: { glow: "stroke-emerald-400 shadow-emerald-400", nodeColor: "bg-emerald-300 shadow-[0_0_15px_#34d399]", activeBg: "bg-emerald-500", text: "text-emerald-400" },
    Geo: { glow: "stroke-amber-400 shadow-amber-400", nodeColor: "bg-amber-300 shadow-[0_0_15px_#fbbf24]", activeBg: "bg-amber-500", text: "text-amber-400" },
    Pyro: { glow: "stroke-rose-400 shadow-rose-400", nodeColor: "bg-rose-300 shadow-[0_0_15px_#f43f5e]", activeBg: "bg-rose-500", text: "text-rose-400" },
    Hydro: { glow: "stroke-blue-400 shadow-blue-400", nodeColor: "bg-blue-300 shadow-[0_0_15px_#3b82f6]", activeBg: "bg-blue-500", text: "text-blue-400" },
    Electro: { glow: "stroke-fuchsia-400 shadow-fuchsia-400", nodeColor: "bg-fuchsia-300 shadow-[0_0_15px_#d946ef]", activeBg: "bg-fuchsia-500", text: "text-fuchsia-400" },
    Dendro: { glow: "stroke-green-400 shadow-green-400", nodeColor: "bg-green-300 shadow-[0_0_15px_#22c55e]", activeBg: "bg-green-500", text: "text-green-400" },
  };

  const currentTheme = elementTheme[character.element] || elementTheme.Cryo;

  return (
    <div
      id="tab-constellation-view"
      className="relative w-full h-full min-h-[500px] flex flex-col items-center justify-center p-4 overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl"
    >
      {/* BACKGROUND: Dark Starry Sky */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/50 via-slate-950 to-black pointer-events-none" />
      <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center pointer-events-none mix-blend-color-dodge" />
      
      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-white rounded-full animate-ping duration-1000 opacity-20" />
      <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-cyan-200 rounded-full animate-ping duration-700 opacity-30" />
      <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-yellow-100 rounded-full animate-pulse opacity-15" />
      
      {/* HEADER STATEMENT */}
      <div className="absolute top-4 left-6 z-10 text-left">
        <h3 className="text-xs font-mono tracking-widest text-slate-400">CELESTIAL CHART</h3>
        <p className="text-lg font-sans font-black tracking-wide text-white">Constella Emblem</p>
      </div>

      {/* CENTER STAGE: SVG Constellation Diagram */}
      <div className="relative w-full max-w-[420px] aspect-square z-10 flex items-center justify-center">
        
        {/* Draw Connected Constellation Lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          {connections.map(([fromIdx, toIdx], lineIdx) => {
            const p1 = coords[fromIdx];
            const p2 = coords[toIdx];
            const fromLocked = character.constellations[fromIdx]?.isLocked;
            const toLocked = character.constellations[toIdx]?.isLocked;
            // Line glows only if both ends are unlocked
            const isLineActive = !fromLocked && !toLocked;

            return (
              <line
                key={lineIdx}
                x1={p1.x}
                y1={p1.y}
                x2={p2.x}
                y2={p2.y}
                className={`transition-all duration-500 ${
                  isLineActive 
                    ? `${currentTheme.glow} stroke-2 opacity-90` 
                    : "stroke-slate-800 stroke-[1.5] opacity-40"
                }`}
                style={{
                  filter: isLineActive ? `drop-shadow(0 0 4px currentColor)` : "none"
                }}
              />
            );
          })}
        </svg>

        {/* Shiny Interactive Star Nodes */}
        {character.constellations.map((node, index) => {
          const pt = coords[index];
          const isUnlocked = !node.isLocked;

          return (
            <button
              key={node.id}
              id={`constellation-node-${node.id}`}
              onClick={() => setSelectedNode(node)}
              className="absolute group transition-transform duration-300 hover:scale-125 z-20"
              style={{ left: `${pt.x}%`, top: `${pt.y}%`, transform: "translate(-50%, -50%)" }}
            >
              {/* Outer Pulsing Aura (Only for unlocked stars) */}
              {isUnlocked && (
                <div className="absolute -inset-4 rounded-full bg-current opacity-20 animate-ping pointer-events-none" style={{ color: "inherit" }} />
              )}

              {/* Star Core Button Visual */}
              <div
                className={`
                  w-6 h-6 rounded-full flex items-center justify-center border-2 transition-all duration-300
                  ${isUnlocked 
                    ? `${currentTheme.nodeColor} border-white text-white` 
                    : "bg-slate-950/90 border-slate-700 text-slate-500 hover:border-slate-400 hover:text-slate-200"
                  }
                `}
              >
                {isUnlocked ? (
                  <Star className="w-3.5 h-3.5 fill-current text-white animate-pulse" />
                ) : (
                  <Lock className="w-2.5 h-2.5" />
                )}
              </div>

              {/* Float-label identifying the node rank index (e.g. C1, C2) */}
              <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] font-mono font-bold text-slate-400 group-hover:text-white tracking-widest uppercase">
                C{index + 1}
              </span>
            </button>
          );
        })}
      </div>

      {/* SLEEK FLOATING MODAL POPUP FOR SELECTED NODE */}
      <AnimatePresence>
        {selectedNode && (
          <div className="absolute inset-0 z-40 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-sm"
            >
              <HolographicPanel element={character.element} className="p-6 relative">
                
                {/* Close Button */}
                <button
                  id="close-constellation-modal"
                  onClick={() => setSelectedNode(null)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Title */}
                <div className="flex items-center space-x-2 border-b border-white/10 pb-3 mb-4">
                  <Sparkles className={`w-4 h-4 ${currentTheme.text} animate-pulse`} />
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                      CONSTELLATION RANK {selectedNode.id}
                    </span>
                    <h3 className="text-xl font-sans font-black text-white">
                      {selectedNode.name}
                    </h3>
                  </div>
                </div>

                {/* Node Description Text */}
                <p className="text-xs text-slate-300 leading-relaxed font-sans mb-6 bg-white/5 p-3 rounded-lg border border-white/10">
                  {selectedNode.description}
                </p>

                {/* Activation Interactive Toggle */}
                <div className="flex items-center justify-between bg-white/5 p-3.5 rounded-lg border border-white/10">
                  <div className="flex items-center space-x-2">
                    {selectedNode.isLocked ? (
                      <Lock className="w-4 h-4 text-slate-400" />
                    ) : (
                      <Unlock className={`w-4 h-4 ${currentTheme.text}`} />
                    )}
                    <span className="text-xs font-semibold text-slate-200">
                      STATUS: {selectedNode.isLocked ? "LOCKED" : "ACTIVE"}
                    </span>
                  </div>

                  <button
                    id="toggle-activation-btn"
                    onClick={() => {
                      onToggleConstellation(selectedNode.id);
                      // Update active local modal state representation as well
                      setSelectedNode({
                        ...selectedNode,
                        isLocked: !selectedNode.isLocked,
                      });
                    }}
                    className={`
                      px-4 py-1.5 rounded text-xs font-bold font-mono tracking-wider transition-all duration-200 cursor-pointer active:scale-95
                      ${selectedNode.isLocked 
                        ? "bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-slate-950 shadow-[0_0_12px_rgba(245,158,11,0.3)]" 
                        : "bg-slate-800 hover:bg-slate-700 text-slate-300 border border-white/10"
                      }
                    `}
                  >
                    {selectedNode.isLocked ? "ACTIVATE" : "DEACTIVATE"}
                  </button>
                </div>

              </HolographicPanel>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
