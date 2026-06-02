import type { GameCard, PlatformDetails } from "@/types/games";

export type AccountFieldProps = {
  id: string;
  label: string;
  onCopy: () => void;
  onToggle?: () => void;
  showValue?: boolean;
  value: string;
};

export type GameAccountPanelProps = {
  game: GameCard;
};

export type CashinDialogProps = {
  gameName: string;
  onComplete: (amount: string) => void;
};

export type GameDetailHeroProps = {
  game: GameCard;
};

export type PlatformInfoProps = {
  details: PlatformDetails;
};
