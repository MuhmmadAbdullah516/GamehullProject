import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Plus, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import type { AdminTransaction } from "@/admin/types/transactions";
import mockData from "./data/transactions.json";
import TransactionTableRow from "./components/TransactionTableRow";
import TransactionPagination from "./components/TransactionPagination";

const ITEMS_PER_PAGE = 10;

const Transactions = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [transactions, setTransactions] = useState<AdminTransaction[]>(
    mockData as AdminTransaction[]
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [toDelete, setToDelete] = useState<AdminTransaction | null>(null);
  const processedRef = useRef(false);

  useEffect(() => {
    if (processedRef.current) return;
    const state = location.state as { action?: string; tx?: AdminTransaction } | null;
    if (!state?.action || !state?.tx) return;
    processedRef.current = true;

    if (state.action === "add") {
      setTransactions((prev) => [state.tx!, ...prev]);
      toast.success(`Transaction ${state.tx.reference} created successfully.`);
    } else if (state.action === "edit") {
      setTransactions((prev) =>
        prev.map((t) => (t.id === state.tx!.id ? state.tx! : t))
      );
      toast.success(`Transaction ${state.tx.reference} updated successfully.`);
    }
    window.history.replaceState({}, "");
  }, [location.state]);

  const handleDelete = (tx: AdminTransaction) => setToDelete(tx);

  const handleConfirmDelete = () => {
    if (!toDelete) return;
    setTransactions((prev) => prev.filter((t) => t.id !== toDelete.id));
    toast.success(`Transaction ${toDelete.reference} deleted successfully.`);
    setToDelete(null);
  };

  const totalPages = Math.ceil(transactions.length / ITEMS_PER_PAGE);
  const paginatedTransactions = transactions.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="p-4 max-w-7xl mx-auto space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div>
          <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">
            Transactions Management
          </h1>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            Manage all financial records — {transactions.length} total
            transactions.
          </p>
        </div>
        <Button
          onClick={() => navigate("/admin/transactions/new")}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-5 py-5 flex items-center gap-2 cursor-pointer text-sm shadow-lg shadow-blue-500/20"
        >
          <Plus className="w-4 h-4" /> Add Transaction
        </Button>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-700">
              <tr>
                {["Transaction ID", "User", "Game Platform", "Type", "Amount", "Status", "Actions"].map(
                  (h) => (
                    <th
                      key={h}
                      className={`px-3.5 py-2.5 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider ${
                        h === "Actions" ? "text-right" : ""
                      }`}
                    >
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {paginatedTransactions.map((tx) => (
                <TransactionTableRow
                  key={tx.id}
                  tx={tx}
                  onEdit={() =>
                    navigate(`/admin/transactions/${tx.id}/edit`, {
                      state: { tx },
                    })
                  }
                  onDelete={() => handleDelete(tx)}
                />
              ))}
            </tbody>
          </table>
        </div>
        <TransactionPagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={transactions.length}
          itemsOnPage={paginatedTransactions.length}
          onPageChange={setCurrentPage}
        />
      </div>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={!!toDelete}
        onOpenChange={(open) => {
          if (!open) setToDelete(null);
        }}
      >
        <DialogContent className="max-w-md p-6 rounded-2xl">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400 mb-4">
              <Trash className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">
              Confirm Deletion
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
              Are you sure you want to delete transaction{" "}
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                {toDelete?.reference}
              </span>
              ? This action cannot be undone.
            </p>
            <div className="flex gap-3 w-full">
              <Button
                variant="outline"
                onClick={() => setToDelete(null)}
                className="flex-1 rounded-full cursor-pointer"
              >
                Cancel
              </Button>
              <Button
                onClick={handleConfirmDelete}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white rounded-full cursor-pointer"
              >
                Delete
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Transactions;
