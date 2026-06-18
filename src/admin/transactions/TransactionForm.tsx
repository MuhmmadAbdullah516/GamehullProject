import { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { ArrowLeft, ChevronDown, Check, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type {
  AdminTransaction,
  TransactionType,
  TransactionStatus,
} from "@/admin/types/transactions";
import { transactionSchema } from "@/schemas/transaction-schema";
import type { TransactionFields } from "@/types/validation";
import gamesData from "@/data/games.json";
import TransactionStatusBadge from "./components/TransactionStatusBadge";

/* ── Shared styles ── */
const inputClass =
  "w-full px-4 py-3 bg-gray-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 dark:text-slate-200 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600";
const labelClass =
  "block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2";
const triggerClass =
  "group w-full px-4 py-3 bg-gray-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-full text-sm text-left text-slate-700 dark:text-slate-200 transition-all flex items-center justify-between gap-2 hover:border-blue-400/60 dark:hover:border-blue-500/40 focus:outline-none focus:ring-2 focus:ring-blue-500/40 cursor-pointer";

/* ── Reusable custom dropdown ── */
function AdminSelect<T extends string>({
  id,
  value,
  options,
  onChange,
}: {
  id?: string;
  value: T;
  options: { label: string; value: T }[];
  onChange: (v: T) => void;
}) {
  const [open, setOpen] = useState(false);
  const selected = options.find((o) => o.value === value);
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <button id={id} type="button" className={triggerClass}>
          <span>{selected?.label ?? value}</span>
          <ChevronDown
            className={`w-4 h-4 shrink-0 transition-all duration-200 text-slate-400 group-hover:text-blue-400 ${
              open ? "rotate-180 text-blue-400" : ""
            }`}
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        sideOffset={6}
        className="min-w-[var(--radix-dropdown-menu-trigger-width)] max-h-60 overflow-y-auto"
      >
        {options.map((opt) => (
          <DropdownMenuItem
            key={opt.value}
            onClick={() => {
              onChange(opt.value);
              setOpen(false);
            }}
            className="flex items-center justify-between gap-3 px-3 py-2"
          >
            <span>{opt.label}</span>
            {opt.value === value && (
              <Check className="w-3.5 h-3.5 text-blue-500 shrink-0" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

/* ── Options ── */
const TYPE_OPTIONS: { label: string; value: TransactionType }[] = [
  { label: "Deposit",  value: "Deposit"  },
  { label: "Withdraw", value: "Withdraw" },
  { label: "Bonus",    value: "Bonus"    },
  { label: "Refund",   value: "Refund"   },
];

const STATUS_OPTIONS: { label: string; value: TransactionStatus }[] = [
  { label: "Completed", value: "Completed" },
  { label: "Pending",   value: "Pending"   },
  { label: "Failed",    value: "Failed"    },
  { label: "Cancelled", value: "Cancelled" },
];

const PLATFORM_OPTIONS = gamesData.map((g) => ({
  label: g.name,
  value: g.name,
}));

/* ── Helper for generating reference ID matching GH-YYYYMMDD-HEX8 ── */
const generateReference = () => {
  const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const randomHex = Math.floor(Math.random() * 0xffffffff)
    .toString(16)
    .toUpperCase()
    .padStart(8, "0");
  return `GH-${dateStr}-${randomHex}`;
};

/* ── Helper for formatting date as 'May 18, 2026 15:53' ── */
const getFormattedDate = () => {
  return new Date()
    .toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
    .replace(",", "");
};

/* ── Component ── */
const TransactionForm = () => {
  const navigate  = useNavigate();
  const location  = useLocation();
  const { id }    = useParams<{ id: string }>();
  const isEditMode = Boolean(id);
  const editingTx  = location.state?.tx as AdminTransaction | undefined;

  const [userName,     setUserName]     = useState("");
  const [userEmail,    setUserEmail]    = useState("");
  const [type,         setType]         = useState<TransactionType>("Deposit");
  const [amount,       setAmount]       = useState("");
  const [gamePlatform, setGamePlatform] = useState(PLATFORM_OPTIONS[0]?.value || "Fire Kirin");
  const [status,       setStatus]       = useState<TransactionStatus>("Pending");
  const [error,        setError]        = useState("");

  useEffect(() => {
    if (isEditMode && !editingTx) {
      navigate("/admin/transactions");
      return;
    }
    if (editingTx) {
      setUserName(editingTx.userName);
      setUserEmail(editingTx.userEmail);
      setType(editingTx.type);
      setAmount(editingTx.amount.replace(/[$,]/g, ""));
      setGamePlatform(editingTx.gamePlatform);
      setStatus(editingTx.status);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const dataToValidate: TransactionFields = {
      userName,
      userEmail: userEmail.trim(),
      type,
      amount,
      gamePlatform,
      status,
    };

    const result = transactionSchema.safeParse(dataToValidate);
    if (!result.success) {
      setError(
        Object.values(result.error.flatten().fieldErrors)
          .flat()
          .find(Boolean) || "Please fix validation errors."
      );
      return;
    }

    const n = parseFloat(amount.replace(/[$,]/g, ""));
    const formatted = `$${n.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

    const tx: AdminTransaction = isEditMode
      ? {
          ...editingTx!,
          userName: userName.trim(),
          userEmail: userEmail.trim().toLowerCase(),
          type,
          amount: formatted,
          gamePlatform,
          status,
        }
      : {
          id: Date.now().toString(),
          userName: userName.trim(),
          userEmail: userEmail.trim().toLowerCase(),
          type,
          amount: formatted,
          gamePlatform,
          status,
          reference: generateReference(),
          date: getFormattedDate(),
        };

    navigate("/admin/transactions", {
      state: { action: isEditMode ? "edit" : "add", tx },
    });
  };

  const previewAmount = (() => {
    const cleanAmount = amount.replace(/[$,]/g, "");
    if (!cleanAmount.trim() || isNaN(parseFloat(cleanAmount))) {
      return "$0.00";
    }
    return `$${parseFloat(cleanAmount).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  })();

  const previewReference = editingTx?.reference || "GH-YYYYMMDD-XXXXXXXX";
  const previewDate = editingTx?.date || getFormattedDate();

  return (
    <div className="p-6 lg:p-8 space-y-6">
      {/* Back header */}
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={() => navigate("/admin/transactions")}
          className="p-2.5 rounded-full hover:bg-white dark:hover:bg-slate-800 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all text-slate-500 cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            {isEditMode ? "Edit Transaction" : "Add Transaction"}
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Transactions /{" "}
            {isEditMode ? `Edit — ${editingTx?.reference}` : "New Record"}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Form card — left 2/3 */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-6 sm:p-8">
          <h2 className="text-base font-bold text-gray-800 dark:text-gray-100 mb-1">
            Transaction Details
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            Fill in the details to {isEditMode ? "update" : "create"} the
            transaction record.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="p-4 text-sm text-red-600 bg-red-50 dark:bg-red-950/30 dark:text-red-400 rounded-xl border border-red-100 dark:border-red-900/30">
                {error}
              </div>
            )}

            {/* Row 1 — Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="userName" className={labelClass}>
                  User Name
                </label>
                <input
                  id="userName"
                  type="text"
                  placeholder="e.g. John Doe"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="userEmail" className={labelClass}>
                  User Email (Optional)
                </label>
                <input
                  id="userEmail"
                  type="text"
                  placeholder="e.g. john@example.com"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>

            {/* Row 2 — Type + Game Platform */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="type" className={labelClass}>Type</label>
                <AdminSelect
                  id="type"
                  value={type}
                  options={TYPE_OPTIONS}
                  onChange={setType}
                />
              </div>
              <div>
                <label htmlFor="gamePlatform" className={labelClass}>Game Platform</label>
                <AdminSelect
                  id="gamePlatform"
                  value={gamePlatform}
                  options={PLATFORM_OPTIONS}
                  onChange={setGamePlatform}
                />
              </div>
            </div>

            {/* Row 3 — Amount + Status */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="amount" className={labelClass}>Amount</label>
                <input
                  id="amount"
                  type="text"
                  placeholder="e.g. 250.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="status" className={labelClass}>Status</label>
                <AdminSelect
                  id="status"
                  value={status}
                  options={STATUS_OPTIONS}
                  onChange={setStatus}
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-700">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/admin/transactions")}
                className="rounded-full px-6 py-5 cursor-pointer"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-5 cursor-pointer"
              >
                {isEditMode ? "Save Changes" : "Create Transaction"}
              </Button>
            </div>
          </form>
        </div>

        {/* Live Preview Panel — right 1/3 */}
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-6">
            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-5">
              Live Preview
            </p>

            <div className="flex flex-col items-center text-center gap-3 pb-5 border-b border-slate-100 dark:border-slate-700">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-3xl font-black shadow-lg shadow-blue-500/20">
                {userName ? (
                  userName.charAt(0).toUpperCase()
                ) : (
                  <User className="w-8 h-8" />
                )}
              </div>
              <div>
                <p className="font-bold text-gray-900 dark:text-gray-100">
                  {userName || "User Name"}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                  {userEmail || "No Email"}
                </p>
              </div>
              <TransactionStatusBadge status={status} />
            </div>

            <div className="space-y-3 pt-4">
              {[
                { label: "Transaction ID", value: previewReference },
                { label: "Game Platform", value: gamePlatform },
                { label: "Type", value: type },
                { label: "Amount", value: previewAmount },
                { label: "Date", value: previewDate },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-center">
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {label}
                  </span>
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300 font-mono">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 rounded-2xl border border-amber-100 dark:border-amber-800/30 p-5">
            <p className="text-xs font-bold text-amber-700 dark:text-amber-400 mb-2">
              ⚠ Transaction Audit Note
            </p>
            <p className="text-xs text-amber-600 dark:text-amber-500 leading-relaxed">
              All created and updated transactions are recorded in the ledger audit logs. Ensure information accuracy before saving.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionForm;
