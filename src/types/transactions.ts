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

export type TransactionEmptyStateProps = {
  isFiltered: boolean;
};

export type TransactionFilterBarProps = {
  filterGame: string;
  filterStatus: string;
  filterType: string;
  isFiltered: boolean;
  onGameChange: (value: string) => void;
  onReset: () => void;
  onStatusChange: (value: string) => void;
  onTypeChange: (value: string) => void;
};

export type TransactionTableProps = {
  currentPage: number;
  onPageChange: (page: number) => void;
  perPage: number;
  transactions: Transaction[];
  totalCount: number;
  totalPages: number;
};
