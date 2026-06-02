import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";

import { useAuth } from "@/hooks/auth/use-auth";
import type { PrizeHistoryItem } from "@/types/free-spin";
import { formatCountdown, formatCurrency, prizes } from "./free-spin-data";

export function useFreeSpin() {
  const { isAuthenticated } = useAuth();
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [countdown, setCountdown] = useState(18 * 60 * 60 + 10 * 60 + 5);
  const [freeSpinUsedToday, setFreeSpinUsedToday] = useState(false);
  const [depositSpins, setDepositSpins] = useState(0);
  const [history, setHistory] = useState<PrizeHistoryItem[]>([]);

  const depositAmount = 0;
  const depositTarget = 50;
  const depositProgress = Math.min((depositAmount / depositTarget) * 100, 100);
  const freeSpinsAvailable = freeSpinUsedToday ? 0 : 1;
  const totalSpinsAvailable = freeSpinsAvailable + depositSpins;
  const totalWon = useMemo(() => history.reduce((total, item) => total + item.prize.value, 0), [history]);
  const bestWin = useMemo(() => Math.max(0, ...history.map((item) => item.prize.value)), [history]);

  const stats = [
    { label: "Today", value: formatCurrency(totalWon) },
    { label: "Available", value: totalSpinsAvailable },
    { label: "Total Won", value: formatCurrency(totalWon) },
    { label: "Used Today", value: freeSpinUsedToday ? 1 : 0 },
    { label: "Lifetime", value: history.length },
    { label: "Best Win", value: formatCurrency(bestWin) },
  ];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown((current) => Math.max(current - 1, 0));
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  function handleSpin() {
    if (spinning) return;
    if (!isAuthenticated) {
      toast.warning("Spin not allowed. Your session has expired, please refresh and login again.");
      return;
    }
    if (totalSpinsAvailable <= 0) {
      toast.warning(`Next free spin in ${formatCountdown(countdown)}.`);
      return;
    }

    const prizeIndex = Math.floor(Math.random() * prizes.length);
    const prize = prizes[prizeIndex];
    setSpinning(true);
    setRotation((current) => current + 1440 + prizeIndex * 45);

    window.setTimeout(() => {
      setFreeSpinUsedToday((used) => {
        if (used) setDepositSpins((current) => Math.max(current - 1, 0));
        return true;
      });
      setHistory((current) => [
        { createdAt: new Date(), id: Date.now(), prize, type: freeSpinUsedToday ? "Deposit" : "Free" },
        ...current,
      ]);
      setSpinning(false);
      toast.success(`You won ${prize.label}!`);
    }, 4000);
  }

  return {
    countdown,
    depositAmount,
    depositProgress,
    depositSpins,
    freeSpinUsedToday,
    handleSpin,
    history,
    isAuthenticated,
    rotation,
    spinning,
    stats,
    totalSpinsAvailable,
  };
}
