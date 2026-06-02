import type { GameCard } from "@/types/games";

export type FaqSectionProps = {
  onToggle: (index: number) => void;
  openIndex: number | null;
};

export type GamesPreviewSectionProps = {
  games: GameCard[];
};
