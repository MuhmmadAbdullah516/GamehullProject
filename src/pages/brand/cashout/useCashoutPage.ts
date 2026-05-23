import { type FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

import games from "@/data/games.json";
import type { GameCard } from "@/types/games";
import type { CashoutTab, SavedWallet, WalletMethod, WalletMethodOption } from "./cashout-types";

function makeWalletLabel(methodLabel: string) {
  return `${methodLabel.replace(/[^a-z0-9]/gi, "").toUpperCase()} WALLET`;
}

function useCashoutPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const tabParam = searchParams.get("tab");
  const activeTab: CashoutTab = tabParam === "wallets" ? "wallets" : "request";
  const [showAddWalletForm, setShowAddWalletForm] = useState(false);
  const [showGameList, setShowGameList] = useState(false);
  const [showMethodList, setShowMethodList] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [savedWallets, setSavedWallets] = useState<SavedWallet[]>([]);
  const [walletToDelete, setWalletToDelete] = useState<SavedWallet | null>(null);
  const [gameSearch, setGameSearch] = useState("");
  const [selectedGame, setSelectedGame] = useState<GameCard | null>(null);
  const [walletMethod, setWalletMethod] = useState<WalletMethod>("");
  const [walletMethodLabel, setWalletMethodLabel] = useState("Select method...");
  const [walletAddress, setWalletAddress] = useState("");
  const [walletLabel, setWalletLabel] = useState("");
  const gameDropdownRef = useRef<HTMLDivElement | null>(null);
  const canViewCashout = (location.state as { fromWithdraw?: boolean } | null)?.fromWithdraw === true;
  const dynamicGames = useMemo(() => games as GameCard[], []);
  const filteredGames = useMemo(() => {
    if (!gameSearch.trim()) return dynamicGames;
    const normalizedSearch = gameSearch.toLowerCase();
    return dynamicGames.filter((game) => game.name.toLowerCase().includes(normalizedSearch));
  }, [dynamicGames, gameSearch]);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!gameDropdownRef.current?.contains(event.target as Node)) {
        setShowGameList(false);
      }
    }

    if (showGameList) {
      window.addEventListener("pointerdown", handlePointerDown);
    }

    return () => window.removeEventListener("pointerdown", handlePointerDown);
  }, [showGameList]);

  function setTab(tabName: CashoutTab) {
    navigate(`/cashout?tab=${tabName}`, { state: location.state });
  }

  function selectGame(game: GameCard) {
    setSelectedGame(game);
    setShowGameList(false);
    setGameSearch("");
  }

  function redirectToGame() {
    if (!selectedGame) {
      toast.error("Please select a game first.");
      return;
    }
    navigate(`/games/${selectedGame.slug}`);
  }

  function selectWalletMethod(method: WalletMethodOption) {
    setWalletMethod(method.value);
    setWalletMethodLabel(method.label);
    setShowMethodList(false);
  }

  function openDeleteModal(wallet: SavedWallet) {
    setWalletToDelete(wallet);
    setDeleteModal(true);
  }

  function closeDeleteModal() {
    setDeleteModal(false);
    setWalletToDelete(null);
  }

  function removeWallet() {
    if (!walletToDelete) return;

    setSavedWallets((currentWallets) => currentWallets.filter((wallet) => wallet.id !== walletToDelete.id));
    toast.success("Cashout wallet removed successfully.");
    closeDeleteModal();
  }

  function handleSaveWallet(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (savedWallets.length >= 5) {
      toast.error("You can save up to 5 cashout wallets.");
      return;
    }

    if (!walletMethod) {
      toast.error("Please select a payment method.");
      return;
    }

    if (!walletAddress.trim()) {
      toast.error("Please enter your wallet address or tag.");
      return;
    }

    const trimmedAddress = walletAddress.trim();
    const trimmedLabel = walletLabel.trim();

    setSavedWallets((currentWallets) => [
      ...currentWallets,
      {
        address: trimmedAddress,
        id: Date.now(),
        label: trimmedLabel || makeWalletLabel(walletMethodLabel),
        method: walletMethodLabel,
      },
    ]);
    toast.success("Cashout wallet saved successfully.");
    setShowAddWalletForm(false);
    setWalletMethod("");
    setWalletMethodLabel("Select method...");
    setWalletAddress("");
    setWalletLabel("");
  }

  return {
    activeTab,
    canViewCashout,
    deleteModal,
    filteredGames,
    gameDropdownRef,
    gameSearch,
    handleSaveWallet,
    openDeleteModal,
    redirectToGame,
    removeWallet,
    savedWallets,
    selectGame,
    selectWalletMethod,
    selectedGame,
    setGameSearch,
    setShowAddWalletForm,
    setShowGameList,
    setShowMethodList,
    setTab,
    showAddWalletForm,
    showGameList,
    showMethodList,
    walletAddress,
    walletLabel,
    walletMethod,
    walletMethodLabel,
    walletToDelete,
    closeDeleteModal,
    setWalletAddress,
    setWalletLabel,
  };
}

export default useCashoutPage;
