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
  // BUG-05 fix: "Today" only counts prizes won on the current calendar day
  const todayWon = useMemo(
    () =>
      history
        .filter((item) => new Date(item.createdAt).toDateString() === new Date().toDateString())
        .reduce((sum, item) => sum + item.prize.value, 0),
    [history],
  );

  const stats = [
    { label: "Today", value: formatCurrency(todayWon) },
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
      toast.warning("Please log in to spin the wheel.");
      return;
    }
    if (totalSpinsAvailable <= 0) {
      toast.warning(`Next free spin in ${formatCountdown(countdown)}.`);
      return;
    }

    const prizeIndex = Math.floor(Math.random() * prizes.length);
    const prize = prizes[prizeIndex];
    // BUG-07 fix: read spin type BEFORE any state mutation (avoid stale closure)
    const spinType = freeSpinUsedToday ? "Deposit" : "Free";
    setSpinning(true);
    // BUG-04 fix: rotate to an absolute angle that places the chosen prize under the pointer.
    // Each of 8 prizes occupies 45°. We add 5 full rotations (1800°) so the wheel
    // visibly spins multiple times before landing on the prize segment.
    setRotation(1800 + prizeIndex * 45);

    window.setTimeout(() => {
      // Consume the appropriate spin type
      if (spinType === "Free") {
        setFreeSpinUsedToday(true);
      } else {
        setDepositSpins((current) => Math.max(current - 1, 0));
      }
      setHistory((current) => [
        { createdAt: new Date(), id: Date.now(), prize, type: spinType },
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
