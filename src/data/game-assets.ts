import cashMachineImage from "@/assets/games/cash-machine.svg";
import fireKirinImage from "@/assets/games/fire-kirin.svg";
import gameVaultImage from "@/assets/games/game-vault.svg";
import goldenDragonImage from "@/assets/games/golden-dragon.svg";
import juwaImage from "@/assets/games/juwa.webp";
import luckyTigerImage from "@/assets/games/lucky-tiger.svg";
import milkyWayImage from "@/assets/games/milky-way.svg";
import orionStarsImage from "@/assets/games/orion-stars.webp";
import pandaMasterImage from "@/assets/games/pandamaster.svg";
import riverSweepsImage from "@/assets/games/river-sweeps.svg";
import starCasinoImage from "@/assets/games/star-casino.svg";
import ultraPandaImage from "@/assets/games/ultra-panda.webp";
import vegasSweepsImage from "@/assets/games/vegas-sweeps.webp";
import type { GameCard, GameImageKey } from "@/types/games";

export const gameImages: Record<GameImageKey, string> = {
  "cash-machine": cashMachineImage,
  "fire-kirin": fireKirinImage,
  "game-vault": gameVaultImage,
  "golden-dragon": goldenDragonImage,
  juwa: juwaImage,
  "lucky-tiger": luckyTigerImage,
  "milky-way": milkyWayImage,
  "orion-stars": orionStarsImage,
  pandamaster: pandaMasterImage,
  "river-sweeps": riverSweepsImage,
  "star-casino": starCasinoImage,
  "ultra-panda": ultraPandaImage,
  "vegas-sweeps": vegasSweepsImage,
};

export const gameTagStyles: Record<GameCard["tag"], string> = {
  HOT: "bg-[#ff3045]",
  NEW: "bg-[#10b981]",
  TOP: "bg-[#f59e0b]",
};
