export type GameImageKey =
  | "cash-machine"
  | "fire-kirin"
  | "game-vault"
  | "golden-dragon"
  | "juwa"
  | "lucky-tiger"
  | "milky-way"
  | "orion-stars"
  | "pandamaster"
  | "river-sweeps"
  | "star-casino"
  | "ultra-panda"
  | "vegas-sweeps";

export type GameCard = {
  id: number;
  slug: string;
  name: string;
  tag: "TOP" | "HOT" | "NEW";
  description: string;
  imageKey: GameImageKey;
  status: string;
  buttonText: string;
};