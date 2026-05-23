import type { GameCard } from "@/types/games";

export type CashoutTab = "request" | "wallets";
export type WalletMethod = "cashapp" | "chime" | "crypto" | "venmo" | "";

export type WalletMethodOption = {
  label: string;
  value: Exclude<WalletMethod, "">;
};

export type SavedWallet = {
  address: string;
  id: number;
  label: string;
  method: string;
};

export type GameSelectorState = {
  filteredGames: GameCard[];
  gameSearch: string;
  selectedGame: GameCard | null;
  showGameList: boolean;
};

export type WalletFormState = {
  showAddWalletForm: boolean;
  showMethodList: boolean;
  walletAddress: string;
  walletLabel: string;
  walletMethod: WalletMethod;
  walletMethodLabel: string;
};
