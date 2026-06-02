import type { Prize } from "@/types/free-spin";

export const prizes: Prize[] = [
  { label: "$2", value: 2 },
  { label: "$3", value: 3 },
  { label: "$4", value: 4 },
  { label: "$5", value: 5 },
  { label: "$2", value: 2 },
  { label: "$3", value: 3 },
  { label: "$4", value: 4 },
  { label: "$5", value: 5 },
];

export function formatCurrency(value: number) {
  return `$${value.toFixed(2)}`;
}

export function formatCountdown(totalSeconds: number) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return [hours, minutes, seconds].map((part) => String(part).padStart(2, "0")).join(":");
}
