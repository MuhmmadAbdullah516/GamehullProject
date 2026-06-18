import { Edit, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { FAQ } from "@/admin/types/faq";

type Props = {
  faq: FAQ;
  onEdit: () => void;
  onDelete: () => void;
};

const FaqTableRow = ({ faq, onEdit, onDelete }: Props) => {
  return (
    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
      {/* ORDER */}
      <td className="px-3.5 py-3 text-sm text-gray-500 dark:text-gray-400 font-mono">
        {faq.order}
      </td>

      {/* QUESTION */}
      <td className="px-3.5 py-3">
        <span className="font-semibold text-gray-900 dark:text-gray-100 text-sm">
          {faq.question}
        </span>
      </td>

      {/* ANSWER PREVIEW */}
      <td className="px-3.5 py-3 text-sm text-gray-500 dark:text-gray-400 max-w-sm truncate" title={faq.answer}>
        {faq.answer}
      </td>

      {/* ACTIONS */}
      <td className="px-3.5 py-3 text-right">
        <div className="flex items-center justify-end gap-1.5">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-gray-500 hover:text-blue-600 cursor-pointer"
            onClick={onEdit}
            title="Edit FAQ"
          >
            <Edit className="w-3.5 h-3.5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-gray-500 hover:text-red-650 cursor-pointer"
            onClick={onDelete}
            title="Delete FAQ"
          >
            <Trash className="w-3.5 h-3.5" />
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default FaqTableRow;
