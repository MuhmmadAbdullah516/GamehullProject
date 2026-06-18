export type TransactionType   = "Deposit" | "Withdraw" | "Bonus" | "Refund";
export type TransactionStatus = "Completed" | "Pending" | "Failed" | "Cancelled";

export type AdminTransaction = {
  id: string;
  userName: string;
  userEmail: string;
  type: TransactionType;
  amount: string;       // e.g. "$250.00"
  status: TransactionStatus;
  gamePlatform: string; // e.g. "Fire Kirin"
  reference: string;    // e.g. "GH-20260519-FA357FDD"
  date: string;         // e.g. "May 18, 2026 15:53"
};
