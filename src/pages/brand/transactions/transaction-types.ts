import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";

export type TransactionKind = "Deposit" | "Cash In" | "Cash Out";
export type TransactionStatus = "Completed" | "Pending" | "Processing" | "Failed";

export type Transaction = {
  amount: string;
  date: string;
  details: string;
  game: string;
  id: string;
  status: TransactionStatus;
  time: string;
  type: TransactionKind;
};

export type FilterOption = {
  label: string;
  value: string;
};

export type FilterSelectProps = {
  icon: ComponentType<LucideProps>;
  label: string;
  options: FilterOption[];
  value: string;
  onChange: (value: string) => void;
};

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
