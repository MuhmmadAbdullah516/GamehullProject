import type { FormEvent, RefObject } from "react";

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

export type CashoutRequestTabProps = {
  filteredGames: GameCard[];
  gameDropdownRef: RefObject<HTMLDivElement | null>;
  gameSearch: string;
  onGameSearchChange: (value: string) => void;
  onRedirectToGame: () => void;
  onSelectGame: (game: GameCard) => void;
  onSetTab: (tab: CashoutTab) => void;
  onToggleGameList: () => void;
  selectedGame: GameCard | null;
  showGameList: boolean;
};

export type CashoutTabsProps = {
  activeTab: CashoutTab;
  onTabChange: (tab: CashoutTab) => void;
};

export type CashoutWalletFormProps = {
  formState: WalletFormState;
  onAddressChange: (value: string) => void;
  onLabelChange: (value: string) => void;
  onSaveWallet: (event: FormEvent<HTMLFormElement>) => void;
  onSelectWalletMethod: (method: WalletMethodOption) => void;
  onToggleMethodList: () => void;
};

export type CashoutWalletsTabProps = CashoutWalletFormProps & {
  onAddFirstWallet: () => void;
  onOpenDeleteModal: (wallet: SavedWallet) => void;
  onToggleAddWalletForm: () => void;
  savedWallets: SavedWallet[];
};

export type DeleteWalletModalProps = {
  onCancel: () => void;
  onConfirm: () => void;
  wallet: SavedWallet | null;
};

export type EmptyWalletStateProps = {
  onAddFirstWallet: () => void;
};

export type GameAccountSelectorProps = Omit<CashoutRequestTabProps, "onSetTab">;

export type SavedWalletListProps = {
  onOpenDeleteModal: (wallet: SavedWallet) => void;
  savedWallets: SavedWallet[];
};
