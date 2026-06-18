import type { TransactionStatus } from "@/types/transactions";

export type TransactionType = "Deposit" | "Withdrawal" | "Bonus" | "Refund";
export type TransdactionStatus =
  | "Completed"
  | "Pending"
  | "Failed"
  | "Cancelled";

export type AdminTransaction = {
  id: string;
  UserId: string;
  UserName: string;
  UserEmail: string;
  type: TransactionType;
  amount: string;
  status: TransactionStatus;
  method: string;
  reference: string;
  date:string;
};
