import { Edit, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { AdminTransaction } from "@/admin/types/transactions";
import { gameImages } from "@/data/game-assets";
import type { GameImageKey } from "@/types/games";
import TransactionStatusBadge from "./TransactionStatusBadge";

type Props = {
  tx: AdminTransaction;
  onEdit: () => void;
  onDelete: () => void;
};

const typeConfig: Record<string, string> = {
  Deposit:  "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  Withdraw: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  Bonus:    "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  Refund:   "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400",
};

const TransactionTableRow = ({ tx, onEdit, onDelete }: Props) => {
  // Normalize the platform name to match keys in gameImages
  const slug = tx.gamePlatform
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace("panda-master", "pandamaster") as GameImageKey;
  const imgSrc = gameImages[slug];

  return (
    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
      {/* TRANSACTION ID */}
      <td className="px-3.5 py-3 text-sm text-gray-500 dark:text-gray-400 font-mono">
        {tx.reference}
      </td>

      {/* USER */}
      <td className="px-3.5 py-3">
        <div className="flex flex-col">
          <p className="font-semibold text-gray-900 dark:text-gray-100 text-sm">
            {tx.userName || "Unknown User"}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {tx.userEmail || "No Email"}
          </p>
        </div>
      </td>

      {/* GAME PLATFORM */}
      <td className="px-3.5 py-3">
        <div className="flex items-center gap-2">
          {imgSrc ? (
            <img
              src={imgSrc}
              alt={tx.gamePlatform}
              className="w-6 h-6 rounded-md object-cover bg-slate-100 dark:bg-slate-800 shrink-0"
            />
          ) : (
            <div className="w-6 h-6 rounded-md bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 text-[10px] font-bold shrink-0">
              {tx.gamePlatform.charAt(0)}
            </div>
          )}
          <span className="font-semibold text-gray-900 dark:text-gray-100 text-sm">
            {tx.gamePlatform}
          </span>
        </div>
      </td>

      {/* TYPE */}
      <td className="px-3.5 py-3">
        <span className={`px-2.5 py-1 text-xs rounded-full font-medium ${typeConfig[tx.type] || "bg-slate-100 text-slate-700"}`}>
          {tx.type}
        </span>
      </td>

      {/* AMOUNT */}
      <td className="px-3.5 py-3 text-sm font-mono text-gray-900 dark:text-gray-100">
        {tx.amount}
      </td>

      {/* STATUS */}
      <td className="px-3.5 py-3">
        <div className="flex flex-col items-start gap-0.5">
          <TransactionStatusBadge status={tx.status} />
          <span className="text-[11px] text-gray-400 dark:text-gray-500 font-mono">
            {tx.date}
          </span>
        </div>
      </td>

      {/* ACTIONS */}
      <td className="px-3.5 py-3 text-right">
        <div className="flex items-center justify-end gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-gray-500 hover:text-blue-600 cursor-pointer"
            onClick={onEdit}
            title="Edit"
          >
            <Edit className="w-3.5 h-3.5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-gray-500 hover:text-red-650 cursor-pointer"
            onClick={onDelete}
            title="Delete"
          >
            <Trash className="w-3.5 h-3.5" />
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default TransactionTableRow;
