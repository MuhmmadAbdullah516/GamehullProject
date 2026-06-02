import type { Transaction } from "@/types/transactions";

export const transactionTypeOptions = [
  { label: "All Types", value: "All Types" },
  { label: "Deposit", value: "Deposit" },
  { label: "Cash In", value: "Cash In" },
  { label: "Cash Out", value: "Cash Out" },
];

export const gameOptions = [{ label: "All Games", value: "All Games" }];

export const statusOptions = [
  { label: "All Status", value: "All Status" },
  { label: "Completed", value: "Completed" },
  { label: "Pending", value: "Pending" },
  { label: "Failed", value: "Failed" },
];

export const transactions: Transaction[] = [];
