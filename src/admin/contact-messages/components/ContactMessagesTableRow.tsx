import { Eye, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ContactMessage } from "@/admin/types/contact";

type Props = {
  msg: ContactMessage;
  onView: () => void;
  onDelete: () => void;
};

const statusConfig: Record<string, string> = {
  Unread:  "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  Read:    "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400",
  Replied: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
};

const ContactMessagesTableRow = ({ msg, onView, onDelete }: Props) => {
  return (
    <tr className="hover:bg-gray-50 dark:hover:bg-gray-750/50 transition-colors">
      {/* STATUS */}
      <td className="px-3.5 py-3">
        <span className={`px-2.5 py-1 text-xs rounded-full font-medium ${statusConfig[msg.status] || "bg-slate-100 text-slate-700"}`}>
          {msg.status}
        </span>
      </td>

      {/* FROM */}
      <td className="px-3.5 py-3">
        <div className="flex flex-col">
          <p className="font-semibold text-gray-900 dark:text-gray-100 text-sm">
            {msg.name || "Anonymous"}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {msg.email}
          </p>
        </div>
      </td>

      {/* SUBJECT */}
      <td className="px-3.5 py-3 text-sm text-gray-900 dark:text-gray-100 font-medium max-w-xs truncate" title={msg.subject}>
        {msg.subject}
      </td>

      {/* DATE */}
      <td className="px-3.5 py-3 text-sm text-gray-500 dark:text-gray-400 font-mono">
        {msg.date}
      </td>

      {/* ACTIONS */}
      <td className="px-3.5 py-3 text-right">
        <div className="flex items-center justify-end gap-1.5">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-gray-500 hover:text-blue-600 cursor-pointer"
            onClick={onView}
            title="View Message"
          >
            <Eye className="w-3.5 h-3.5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-gray-500 hover:text-red-650 cursor-pointer"
            onClick={onDelete}
            title="Delete Message"
          >
            <Trash className="w-3.5 h-3.5" />
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default ContactMessagesTableRow;
