import { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { ArrowLeft, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { faqSchema } from "@/schemas/faq-schema";
import type { FAQ } from "@/admin/types/faq";
import type { FaqFields } from "@/types/validation";

/* ── Shared styles matching UserForm / TransactionForm ── */
const inputClass =
  "w-full px-4 py-3 bg-gray-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 dark:text-slate-200 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600";
const textareaClass =
  "w-full px-4 py-3 bg-gray-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 dark:text-slate-200 transition-all min-h-28 placeholder:text-slate-400 dark:placeholder:text-slate-600";
const labelClass =
  "block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2";

const FaqForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams<{ id: string }>();
  const isEditMode = Boolean(id);
  const editingFaq = location.state?.faq as FAQ | undefined;

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [order, setOrder] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (isEditMode && !editingFaq) {
      navigate("/admin/faq");
      return;
    }
    if (editingFaq) {
      setQuestion(editingFaq.question);
      setAnswer(editingFaq.answer);
      setOrder(String(editingFaq.order));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const dataToValidate: FaqFields = {
      question,
      answer,
      order,
    };

    const result = faqSchema.safeParse(dataToValidate);
    if (!result.success) {
      setError(
        Object.values(result.error.flatten().fieldErrors)
          .flat()
          .find(Boolean) || "Please fix validation errors."
      );
      return;
    }

    const faq: FAQ = isEditMode
      ? {
          ...editingFaq!,
          question: question.trim(),
          answer: answer.trim(),
          order: parseInt(order, 10),
        }
      : {
          id: Date.now(), // simple numeric ID
          question: question.trim(),
          answer: answer.trim(),
          order: parseInt(order, 10),
        };

    navigate("/admin/faq", {
      state: { action: isEditMode ? "edit" : "add", faq },
    });
  };

  return (
    <div className="p-6 lg:p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={() => navigate("/admin/faq")}
          className="p-2.5 rounded-full hover:bg-white dark:hover:bg-slate-800 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all text-slate-500 cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            {isEditMode ? "Edit FAQ" : "Add New FAQ"}
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            FAQs / {isEditMode ? `Edit — FAQ #${editingFaq?.order}` : "New Entry"}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Form panel — left 2/3 */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-6 sm:p-8">
          <h2 className="text-base font-bold text-gray-800 dark:text-gray-100 mb-1">
            FAQ Content
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            Fill in the details to publish or update this FAQ.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="p-4 text-sm text-red-600 bg-red-50 dark:bg-red-950/30 dark:text-red-400 rounded-xl border border-red-100 dark:border-red-900/30">
                {error}
              </div>
            )}

            {/* Question */}
            <div>
              <label htmlFor="question" className={labelClass}>
                Question
              </label>
              <input
                id="question"
                type="text"
                placeholder="e.g. What payment methods do you accept?"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className={inputClass}
              />
            </div>

            {/* Answer */}
            <div>
              <label htmlFor="answer" className={labelClass}>
                Answer
              </label>
              <textarea
                id="answer"
                placeholder="Write the detailed answer here..."
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className={textareaClass}
              />
            </div>

            {/* Order */}
            <div className="w-full sm:w-1/2">
              <label htmlFor="order" className={labelClass}>
                Sorting Order
              </label>
              <input
                id="order"
                type="text"
                placeholder="e.g. 1"
                value={order}
                onChange={(e) => setOrder(e.target.value)}
                className={inputClass}
              />
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-700">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/admin/faq")}
                className="rounded-full px-6 py-5 cursor-pointer"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-5 cursor-pointer"
              >
                {isEditMode ? "Save Changes" : "Create FAQ"}
              </Button>
            </div>
          </form>
        </div>

        {/* Live Preview Panel — right 1/3 */}
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-6">
            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-5">
              Live Accordion Preview
            </p>

            <div className="border border-slate-100 dark:border-slate-700 rounded-2xl p-4 bg-gray-50 dark:bg-gray-900/50">
              <div className="flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <h4 className="font-bold text-sm text-gray-900 dark:text-gray-100 leading-snug">
                    {question || "FAQ Question"}
                  </h4>
                  <p className="text-xs leading-relaxed text-gray-600 dark:text-gray-400 whitespace-pre-wrap">
                    {answer || "No answer draft provided yet."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 rounded-2xl border border-amber-100 dark:border-amber-800/30 p-5">
            <p className="text-xs font-bold text-amber-700 dark:text-amber-400 mb-2">
              ⚠ Ordering Notice
            </p>
            <p className="text-xs text-amber-600 dark:text-amber-500 leading-relaxed">
              FAQs are sorted in ascending order (smallest first) on the homepage. Use positive integers to maintain clean sorting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqForm;
