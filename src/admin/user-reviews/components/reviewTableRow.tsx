import { Edit, Trash, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { UserReview } from "@/admin/types/reviews";

type Props = {
  review: UserReview;
  onEdit: () => void;
  onDelete: () => void;
};

const StarRating = ({ stars }: { stars: number }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3.5 h-3.5 ${
          i < stars
            ? "text-amber-400 fill-amber-400"
            : "text-gray-300 dark:text-gray-600 fill-gray-300 dark:fill-gray-600"
        }`}
      />
    ))}
  </div>
);


const StatusBadge = ({ status }: { status: UserReview["status"] }) => {
  const styles =
    status === "Published"
      ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
      : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400";
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${styles}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
          status === "Published" ? "bg-green-500" : "bg-amber-500"
        }`}
      />
      {status}
    </span>
  );
};

const ReviewTableRow = ({ review, onEdit, onDelete }: Props) => {
  const initials = review.userName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const avatarColors = [
    "bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400",
    "bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400",
    "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400",
    "bg-rose-100 dark:bg-rose-900/50 text-rose-600 dark:text-rose-400",
    "bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400",
  ];
  const avatarColor = avatarColors[review.id % avatarColors.length];

  return (
    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
      {/* USER INFO */}
      <td className="px-3.5 py-3">
        <div className="flex items-center gap-3">
          <div
            className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${avatarColor}`}
          >
            {initials}
          </div>
          <div>
            <p className="font-semibold text-gray-900 dark:text-gray-100 text-sm leading-snug">
              {review.userName}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {review.userEmail}
            </p>
          </div>
        </div>
      </td>

      {/* REVIEW CONTENT */}
      <td
        className="px-3.5 py-3 text-sm text-gray-500 dark:text-gray-400 max-w-xs truncate"
        title={review.review}
      >
        <span className="italic">"{review.review}"</span>
      </td>

      {/* STARS */}
      <td className="px-3.5 py-3">
        <StarRating stars={review.stars} />
      </td>

      {/* STATUS */}
      <td className="px-3.5 py-3">
        <StatusBadge status={review.status} />
      </td>

      {/* DATE */}
      <td className="px-3.5 py-3 text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
        {new Date(review.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </td>

      {/* ACTIONS */}
      <td className="px-3.5 py-3 text-right">
        <div className="flex items-center justify-end gap-1.5">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-gray-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 cursor-pointer"
            onClick={onEdit}
            title="Edit Review"
          >
            <Edit className="w-3.5 h-3.5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-gray-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 cursor-pointer"
            onClick={onDelete}
            title="Delete Review"
          >
            <Trash className="w-3.5 h-3.5" />
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default ReviewTableRow;
