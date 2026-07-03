export interface CharacterStats {
  maxHp: number;
  atk: number;
  def: number;
  elementalMastery: number;
  maxStamina: number;
}

export interface CharacterImages {
  profileThumb: string;
  mainRender: string;
  weaponRender: string;
}

export interface WeaponData {
  name: string;
  type: string;
  rarity: number; // 1 to 5 stars
  baseAtk: number;
  subStat: string;
  subStatValue: string;
  refinement: number; // 1 to 5
  description: string;
}

export interface NodeItem {
  id: number;
  name: string;
  description: string;
  isLocked: boolean;
}

export interface ProfileData {
  storyText: string;
  voiceActor: string;
  birthday: string;
  region: string;
}

export interface Character {
  id: string;
  name: string;
  element: "Cryo" | "Anemo" | "Geo" | "Pyro" | "Hydro" | "Electro" | "Dendro";
  level: string; // e.g., "80/80"
  friendshipLevel: number;
  stats: CharacterStats;
  images: CharacterImages;
  description: string;
  weapon: WeaponData;
  constellations: NodeItem[];
  talents: NodeItem[];
  profile: ProfileData;
}
