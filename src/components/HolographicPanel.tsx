import React from "react";

interface HolographicPanelProps {
  id?: string;
  className?: string;
  element?: "Cryo" | "Anemo" | "Geo" | "Pyro" | "Hydro" | "Electro" | "Dendro";
  children: React.ReactNode;
  onClick?: () => void;
}

export default function HolographicPanel({
  id,
  className = "",
  element = "Cryo",
  children,
  onClick,
}: HolographicPanelProps) {
  // Color presets based on character elements
  const themeMap = {
    Cryo: {
      border: "border-white/10 hover:border-white/20",
      bg: "bg-white/5",
      shadow: "shadow-[0_0_20px_rgba(34,211,238,0.15)]",
      glow: "from-cyan-500/10 to-transparent",
      textGlow: "text-cyan-200",
    },
    Anemo: {
      border: "border-white/10 hover:border-white/20",
      bg: "bg-white/5",
      shadow: "shadow-[0_0_20px_rgba(52,211,153,0.15)]",
      glow: "from-emerald-500/10 to-transparent",
      textGlow: "text-emerald-200",
    },
    Geo: {
      border: "border-white/10 hover:border-white/20",
      bg: "bg-white/5",
      shadow: "shadow-[0_0_20px_rgba(245,158,11,0.15)]",
      glow: "from-amber-500/10 to-transparent",
      textGlow: "text-amber-200",
    },
    Pyro: {
      border: "border-white/10 hover:border-white/20",
      bg: "bg-white/5",
      shadow: "shadow-[0_0_20px_rgba(244,63,94,0.15)]",
      glow: "from-rose-500/10 to-transparent",
      textGlow: "text-rose-200",
    },
    Hydro: {
      border: "border-white/10 hover:border-white/20",
      bg: "bg-white/5",
      shadow: "shadow-[0_0_20px_rgba(59,130,246,0.15)]",
      glow: "from-blue-500/10 to-transparent",
      textGlow: "text-blue-200",
    },
    Electro: {
      border: "border-white/10 hover:border-white/20",
      bg: "bg-white/5",
      shadow: "shadow-[0_0_20px_rgba(217,70,239,0.15)]",
      glow: "from-fuchsia-500/10 to-transparent",
      textGlow: "text-fuchsia-200",
    },
    Dendro: {
      border: "border-white/10 hover:border-white/20",
      bg: "bg-white/5",
      shadow: "shadow-[0_0_20px_rgba(34,197,94,0.15)]",
      glow: "from-green-500/10 to-transparent",
      textGlow: "text-green-200",
    },
  };

  const t = themeMap[element] || themeMap.Cryo;

  return (
    <div
      id={id}
      onClick={onClick}
      className={`
        relative overflow-hidden rounded-xl border backdrop-blur-xl transition-all duration-300
        ${t.border} ${t.bg} ${t.shadow}
        ${onClick ? "cursor-pointer active:scale-[0.98]" : ""}
        ${className}
      `}
    >
      {/* Moving Metallic Sheen Diagonal Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent bg-[length:200%_200%] animate-[shimmer_8s_infinite_linear]" />
      
      {/* Subtle element ambient corner glow */}
      <div className={`absolute -top-12 -left-12 w-24 h-24 rounded-full bg-gradient-to-br ${t.glow} blur-2xl pointer-events-none`} />
      
      {/* Content wrapper */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
