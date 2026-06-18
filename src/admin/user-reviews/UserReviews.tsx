import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Plus, Trash, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import type { UserReview } from "../types/reviews";
import reviewData from "@/admin/user-reviews/data/reviews.json";
import ReviewTableRow from "./components/reviewTableRow";
import ReviewPagination from "./components/reviewPagination";

const ITEMS_PER_PAGE = 10;

const UserReviews = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [reviews, setReviews] = useState<UserReview[]>(() => {
    const state = location.state as {
      action?: string;
      review?: UserReview;
    } | null;
    if (!state?.action || !state?.review) return reviewData as UserReview[];

    if (state.action === "add") {
      return [state.review, ...(reviewData as UserReview[])];
    }

    return (reviewData as UserReview[]).map((r) =>
      r.id === state.review!.id ? state.review! : r,
    );
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [reviewToDelete, setReviewToDelete] = useState<UserReview | null>(null);
  const processedRef = useRef(false);

  useEffect(() => {
    const state = location.state as {
      action?: string;
      review?: UserReview;
    } | null;
    if (!state?.action || !state?.review || processedRef.current) return;

    processedRef.current = true;

    if (state.action === "add") {
      toast.success("Review has been added successfully.");
    } else if (state.action === "edit") {
      toast.success("Review has been updated successfully.");
    }
    window.history.replaceState({}, "");
  }, [location.state]);

  const totalPages = Math.max(1, Math.ceil(reviews.length / ITEMS_PER_PAGE));
  const paginatedReviews = reviews.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const handleDelete = (review: UserReview) => setReviewToDelete(review);

  const handleConfirmDelete = () => {
    if (!reviewToDelete) return;
    setReviews((prev) => prev.filter((r) => r.id !== reviewToDelete.id));
    toast.success("Review deleted successfully.");
    setReviewToDelete(null);
  };

  return (
    <div className="p-4 max-w-7xl mx-auto space-y-4">
      {/* ── Header ── */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div>
          <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">
            User Reviews
          </h1>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            Manage and moderate customer feedback — {reviews.length} total
            reviews
          </p>
        </div>
        <Button
          onClick={() => navigate("/admin/user-reviews/new")}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-5 py-5 flex items-center gap-2 cursor-pointer text-sm shadow-lg shadow-blue-500/20"
        >
          <Plus className="w-4 h-4" /> Add New Review
        </Button>
      </div>

      {/* ── Table ── */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-700">
              <tr>
                {[
                  "User Info",
                  "Review Content",
                  "Stars",
                  "Status",
                  "Date",
                  "Actions",
                ].map((h) => (
                  <th
                    key={h}
                    className={`px-3.5 py-2.5 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider ${
                      h === "Actions" ? "text-right" : ""
                    }`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {paginatedReviews.length > 0 ? (
                paginatedReviews.map((review) => (
                  <ReviewTableRow
                    key={review.id}
                    review={review}
                    onEdit={() =>
                      navigate(`/admin/user-reviews/${review.id}/edit`, {
                        state: { review },
                      })
                    }
                    onDelete={() => handleDelete(review)}
                  />
                ))
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    className="px-5 py-12 text-center text-sm text-gray-500 dark:text-gray-400"
                  >
                    <div className="flex flex-col items-center gap-2">
                      <MessageSquare className="w-8 h-8 text-gray-300 dark:text-gray-600" />
                      <span>No reviews found for this filter.</span>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <ReviewPagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={reviews.length}
          itemsOnPage={paginatedReviews.length}
          onPageChange={setCurrentPage}
        />
      </div>

      {/* ── Delete Confirmation Dialog ── */}
      <Dialog
        open={!!reviewToDelete}
        onOpenChange={(open) => {
          if (!open) setReviewToDelete(null);
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
              Are you sure you want to delete the review by{" "}
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                {reviewToDelete?.userName}
              </span>
              ? This action cannot be undone.
            </p>
            <div className="flex gap-3 w-full">
              <Button
                variant="outline"
                onClick={() => setReviewToDelete(null)}
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

export default UserReviews;
