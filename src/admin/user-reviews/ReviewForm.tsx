import { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { ArrowLeft, Star, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { reviewSchema } from "@/schemas/review-schema";
import type { UserReview } from "@/admin/types/reviews";

/* ── Shared styles matching FaqForm / UserForm pattern ── */
const inputClass =
  "w-full px-4 py-3 bg-gray-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 dark:text-slate-200 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600";
const textareaClass =
  "w-full px-4 py-3 bg-gray-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 dark:text-slate-200 transition-all min-h-28 resize-none placeholder:text-slate-400 dark:placeholder:text-slate-600";
const labelClass =
  "block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2";

const ReviewForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams<{ id: string }>();
  const isEditMode = Boolean(id);
  const editingReview = location.state?.review as UserReview | undefined;

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [review, setReview] = useState("");
  const [stars, setStars] = useState(5);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [status, setStatus] = useState<"Published" | "Pending">("Pending");
  const [error, setError] = useState("");

  useEffect(() => {
    if (isEditMode && !editingReview) {
      navigate("/admin/user-reviews");
      return;
    }
    if (editingReview) {
      setUserName(editingReview.userName);
      setUserEmail(editingReview.userEmail);
      setReview(editingReview.review);
      setStars(editingReview.stars);
      setStatus(editingReview.status);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const result = reviewSchema.safeParse({
      userName,
      userEmail,
      review,
      stars: String(stars),
      status,
    });

    if (!result.success) {
      setError(
        Object.values(result.error.flatten().fieldErrors)
          .flat()
          .find(Boolean) || "Please fix validation errors."
      );
      return;
    }

    const savedReview: UserReview = isEditMode
      ? {
          ...editingReview!,
          userName: userName.trim(),
          userEmail: userEmail.trim(),
          review: review.trim(),
          stars,
          status,
        }
      : {
          id: Date.now(),
          userName: userName.trim(),
          userEmail: userEmail.trim(),
          review: review.trim(),
          stars,
          status,
          date: new Date().toISOString().split("T")[0],
        };

    navigate("/admin/user-reviews", {
      state: { action: isEditMode ? "edit" : "add", review: savedReview },
    });
  };

  return (
    <div className="p-6 lg:p-8 space-y-6">
      {/* ── Header ── */}
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={() => navigate("/admin/user-reviews")}
          className="p-2.5 rounded-full hover:bg-white dark:hover:bg-slate-800 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all text-slate-500 cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            {isEditMode ? "Edit Review" : "Add New Review"}
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            User Reviews /{" "}
            {isEditMode
              ? `Edit — ${editingReview?.userName}`
              : "New Entry"}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* ── Main Form ── */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-6 sm:p-8">
          <h2 className="text-base font-bold text-gray-800 dark:text-gray-100 mb-1">
            Review Details
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            Fill in the user's review information below.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Error banner */}
            {error && (
              <div className="p-4 text-sm text-red-600 bg-red-50 dark:bg-red-950/30 dark:text-red-400 rounded-xl border border-red-100 dark:border-red-900/30">
                {error}
              </div>
            )}

            {/* User Name + Email — side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="userName" className={labelClass}>
                  User Name
                </label>
                <input
                  id="userName"
                  type="text"
                  placeholder="e.g. John Smith"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="userEmail" className={labelClass}>
                  User Email
                </label>
                <input
                  id="userEmail"
                  type="email"
                  placeholder="e.g. john@example.com"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>

            {/* Review Content */}
            <div>
              <label htmlFor="review" className={labelClass}>
                Review Content
              </label>
              <textarea
                id="review"
                placeholder="Write the user's review here..."
                value={review}
                onChange={(e) => setReview(e.target.value)}
                className={textareaClass}
              />
              <p className="mt-1 text-xs text-gray-400 dark:text-gray-500 text-right">
                {review.length}/500
              </p>
            </div>

            {/* Star Rating */}
            <div>
              <label className={labelClass}>Star Rating</label>
              <div className="flex items-center gap-2 mt-1">
                {Array.from({ length: 5 }, (_, i) => {
                  const val = i + 1;
                  const filled = val <= (hoveredStar || stars);
                  return (
                    <button
                      key={i}
                      type="button"
                      onMouseEnter={() => setHoveredStar(val)}
                      onMouseLeave={() => setHoveredStar(0)}
                      onClick={() => setStars(val)}
                      className="focus:outline-none cursor-pointer transition-transform hover:scale-110"
                      aria-label={`Rate ${val} star${val !== 1 ? "s" : ""}`}
                    >
                      <Star
                        className={`w-7 h-7 transition-colors ${
                          filled
                            ? "text-amber-400 fill-amber-400"
                            : "text-gray-300 dark:text-gray-600"
                        }`}
                      />
                    </button>
                  );
                })}
                <span className="ml-2 text-sm font-semibold text-gray-600 dark:text-gray-400">
                  {stars} / 5
                </span>
              </div>
            </div>

            {/* Status */}
            <div>
              <label className={labelClass}>Status</label>
              <div className="flex items-center gap-3">
                {(["Published", "Pending"] as const).map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setStatus(opt)}
                    className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all cursor-pointer ${
                      status === opt
                        ? opt === "Published"
                          ? "bg-green-600 text-white border-green-600 shadow-sm shadow-green-500/20"
                          : "bg-amber-500 text-white border-amber-500 shadow-sm shadow-amber-500/20"
                        : "bg-white dark:bg-slate-900 text-gray-500 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-700">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/admin/user-reviews")}
                className="rounded-full px-6 py-5 cursor-pointer"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-5 cursor-pointer"
              >
                {isEditMode ? "Save Changes" : "Add Review"}
              </Button>
            </div>
          </form>
        </div>

        {/* ── Preview Panel ── */}
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-6">
            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-5">
              Live Preview
            </p>

            <div className="border border-slate-100 dark:border-slate-700 rounded-2xl p-4 bg-gray-50 dark:bg-gray-900/50 space-y-3">
              {/* Avatar + name */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xs font-bold shrink-0">
                  {userName
                    ? userName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)
                        .toUpperCase()
                    : "?"}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 dark:text-gray-100">
                    {userName || "User Name"}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {userEmail || "email@example.com"}
                  </p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < stars
                        ? "text-amber-400 fill-amber-400"
                        : "text-gray-300 dark:text-gray-600"
                    }`}
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="text-xs text-gray-600 dark:text-gray-400 italic leading-relaxed">
                "{review || "Review content will appear here..."}"
              </p>

              {/* Status */}
              <span
                className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${
                  status === "Published"
                    ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                    : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                    status === "Published" ? "bg-green-500" : "bg-amber-500"
                  }`}
                />
                {status}
              </span>
            </div>
          </div>

          {/* Info notice */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-800/30 p-5">
            <div className="flex items-start gap-2">
              <MessageSquare className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-blue-700 dark:text-blue-400 mb-1">
                  Moderation Note
                </p>
                <p className="text-xs text-blue-600 dark:text-blue-500 leading-relaxed">
                  Set status to <strong>Published</strong> to make this review
                  visible to site visitors, or <strong>Pending</strong> to keep
                  it in moderation queue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
