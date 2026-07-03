import { useState } from "react";
import { Character, NodeItem } from "../types";
import { Lock, Unlock, X, Award, ShieldAlert } from "lucide-react";
import HolographicPanel from "./HolographicPanel";
import { motion, AnimatePresence } from "motion/react";

interface TalentsTabProps {
  character: Character;
  onToggleTalent: (nodeId: number) => void;
}

export default function TalentsTab({ character, onToggleTalent }: TalentsTabProps) {
  const [selectedNode, setSelectedNode] = useState<NodeItem | null>(null);

  // Antler-like branching structures for character talents
  const coords = [
    { x: 50, y: 15 },  // Node 1 (Normal Attack - Apex)
    { x: 50, y: 40 },  // Node 2 (Elemental Skill - Midpoint)
    { x: 20, y: 50 },  // Node 3 (Left Antler Tip)
    { x: 80, y: 50 },  // Node 4 (Right Antler Tip)
    { x: 50, y: 65 },  // Node 5 (Elemental Burst - Base)
    { x: 50, y: 88 },  // Node 6 (Passive Mastery - Root)
  ];

  // Connected line paths forming a stylized deer antler shape
  const connections = [
    [0, 1], // Apex to Midpoint
    [1, 2], // Midpoint to Left Tip
    [1, 3], // Midpoint to Right Tip
    [1, 4], // Midpoint to Base
    [2, 4], // Left Tip back to Base
    [3, 4], // Right Tip back to Base
    [4, 5], // Base to Root
  ];

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
      id="tab-talents-view"
      className="relative w-full h-full min-h-[500px] flex flex-col items-center justify-center p-4 overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl"
    >
      {/* BACKGROUND: Dark Starry Cosmic Sky */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/50 via-slate-950 to-black pointer-events-none" />
      <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center pointer-events-none mix-blend-color-dodge" />

      {/* Floating particles */}
      <div className="absolute top-1/3 left-2/3 w-1 h-1 bg-white rounded-full animate-ping duration-1000 opacity-20" />
      <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-violet-400 rounded-full animate-ping duration-800 opacity-25" />

      {/* HEADER STATEMENT */}
      <div className="absolute top-4 left-6 z-10 text-left">
        <h3 className="text-xs font-mono tracking-widest text-slate-400">COMBAT TRAINING</h3>
        <p className="text-lg font-sans font-black tracking-wide text-white">Talents Diagram</p>
      </div>

      {/* CENTER STAGE: SVG Branching Tree Diagram */}
      <div className="relative w-full max-w-[420px] aspect-square z-10 flex items-center justify-center">
        
        {/* Draw Branch Lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          {connections.map(([fromIdx, toIdx], lineIdx) => {
            const p1 = coords[fromIdx];
            const p2 = coords[toIdx];
            const fromLocked = character.talents[fromIdx]?.isLocked;
            const toLocked = character.talents[toIdx]?.isLocked;
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

        {/* Talent Antler Nodes */}
        {character.talents.map((node, index) => {
          const pt = coords[index];
          const isUnlocked = !node.isLocked;

          return (
            <button
              key={node.id}
              id={`talent-node-${node.id}`}
              onClick={() => setSelectedNode(node)}
              className="absolute group transition-transform duration-300 hover:scale-125 z-20"
              style={{ left: `${pt.x}%`, top: `${pt.y}%`, transform: "translate(-50%, -50%)" }}
            >
              {/* Outer Pulsing Aura (Only for unlocked talents) */}
              {isUnlocked && (
                <div className="absolute -inset-4 rounded-full bg-current opacity-25 animate-ping pointer-events-none" style={{ color: "inherit" }} />
              )}

              {/* Talent node circle badge */}
              <div
                className={`
                  w-6.5 h-6.5 rounded-full flex items-center justify-center border-2 transition-all duration-300
                  ${isUnlocked 
                    ? `${currentTheme.nodeColor} border-white text-white` 
                    : "bg-slate-950/90 border-slate-700 text-slate-500 hover:border-slate-400 hover:text-slate-200"
                  }
                `}
              >
                {isUnlocked ? (
                  <Award className="w-3.5 h-3.5 fill-current text-white animate-pulse" />
                ) : (
                  <Lock className="w-2.5 h-2.5" />
                )}
              </div>

              {/* Talent numerical index labeling (T1, T2 etc) */}
              <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] font-mono font-bold text-slate-400 group-hover:text-white tracking-widest uppercase">
                T{index + 1}
              </span>
            </button>
          );
        })}
      </div>

      {/* DETAILED MODAL POPUP FOR SELECTED NODE */}
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
                  id="close-talent-modal"
                  onClick={() => setSelectedNode(null)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Title */}
                <div className="flex items-center space-x-2 border-b border-white/10 pb-3 mb-4">
                  <Award className={`w-4 h-4 ${currentTheme.text} animate-pulse`} />
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                      TALENT NODE T{selectedNode.id}
                    </span>
                    <h3 className="text-xl font-sans font-black text-white">
                      {selectedNode.name}
                    </h3>
                  </div>
                </div>

                {/* Talent description text */}
                <p className="text-xs text-slate-300 leading-relaxed font-sans mb-6 bg-white/5 p-3 rounded-lg border border-white/10">
                  {selectedNode.description}
                </p>

                {/* Activation Toggle */}
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
                    id="toggle-talent-activation-btn"
                    onClick={() => {
                      onToggleTalent(selectedNode.id);
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
