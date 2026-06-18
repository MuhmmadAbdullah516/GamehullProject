import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Plus, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import type { FAQ } from "@/admin/types/faq";
import faqsData from "@/admin/faq/data/question.json";
import FaqTableRow from "./components/faqTableRow";
import FaqPagination from "./components/faqPagination";
const ITEMS_PER_PAGE = 10;

const Faq = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [faqs, setFaqs] = useState<FAQ[]>(faqsData as FAQ[]);
  const [currentPage, setCurrentPage] = useState(1);
  const [faqToDelete, setFaqToDelete] = useState<FAQ | null>(null);
  const processedRef = useRef(false);

  useEffect(() => {
    if (processedRef.current) return;
    const state = location.state as { action?: string; faq?: FAQ } | null;
    if (!state?.action || !state?.faq) return;
    processedRef.current = true;

    if (state.action === "add") {
      setFaqs((prev) => [state.faq!, ...prev]);
      toast.success(`FAQ has been created successfully.`);
    } else if (state.action === "edit") {
      setFaqs((prev) =>
        prev.map((f) => (f.id === state.faq!.id ? state.faq! : f))
      );
      toast.success(`FAQ has been updated successfully.`);
    }
    window.history.replaceState({}, "");
  }, [location.state]);

  const handleDelete = (faq: FAQ) => {
    setFaqToDelete(faq);
  };

  const handleConfirmDelete = () => {
    if (!faqToDelete) return;
    setFaqs((prev) => prev.filter((f) => f.id !== faqToDelete.id));
    toast.success("FAQ deleted successfully.");
    setFaqToDelete(null);
  };

  // Sort FAQs based on their order number before paginating
  const sortedFaqs = [...faqs].sort((a, b) => a.order - b.order);

  const totalPages = Math.ceil(sortedFaqs.length / ITEMS_PER_PAGE);
  const paginatedFaqs = sortedFaqs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="p-4 max-w-7xl mx-auto space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div>
          <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">
            FAQ Management
          </h1>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            Manage customer FAQ directories — {faqs.length} published questions.
          </p>
        </div>
        <Button
          onClick={() => navigate("/admin/faq/new")}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-5 py-5 flex items-center gap-2 cursor-pointer text-sm shadow-lg shadow-blue-500/20"
        >
          <Plus className="w-4 h-4" /> Add New FAQ
        </Button>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-700">
              <tr>
                {["Order", "Question", "Answer Preview", "Action"].map((h) => (
                  <th
                    key={h}
                    className={`px-3.5 py-2.5 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider ${
                      h === "Action" ? "text-right" : ""
                    }`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {paginatedFaqs.length > 0 ? (
                paginatedFaqs.map((faq) => (
                  <FaqTableRow
                    key={faq.id}
                    faq={faq}
                    onEdit={() =>
                      navigate(`/admin/faq/${faq.id}/edit`, {
                        state: { faq },
                      })
                    }
                    onDelete={() => handleDelete(faq)}
                  />
                ))
              ) : (
                <tr>
                  <td
                    colSpan={4}
                    
                    className="px-5 py-8 text-center text-sm text-gray-500 dark:text-gray-400"
                  >
                    No FAQs found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <FaqPagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={sortedFaqs.length}
          itemsOnPage={paginatedFaqs.length}
          onPageChange={setCurrentPage}
        />
      </div>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={!!faqToDelete}
        onOpenChange={(open) => {
          if (!open) setFaqToDelete(null);
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
              Are you sure you want to delete the FAQ:{" "}
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                "{faqToDelete?.question}"
              </span>
              ? This action cannot be undone.
            </p>
            <div className="flex gap-3 w-full">
              <Button
                variant="outline"
                onClick={() => setFaqToDelete(null)}
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

export default Faq;
