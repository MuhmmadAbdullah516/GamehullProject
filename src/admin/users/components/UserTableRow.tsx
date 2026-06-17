import { Edit, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { AdminUser } from "@/admin/types/users";
import UserStatusBadge from "./UserStatusBadge";

type Props = {
  user: AdminUser;
  onEdit: () => void;
  onDelete: () => void;
};

const UserTableRow = ({ user, onEdit, onDelete }: Props) => (
  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
    <td className="px-5 py-3">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 text-sm font-bold shrink-0">
          {user.name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-gray-900 dark:text-gray-100 text-sm">{user.name}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">{user.email}</p>
        </div>
      </div>
    </td>
    <td className="px-5 py-3 text-sm"><span className="font-medium">{user.role}</span></td>
    <td className="px-5 py-3 text-sm font-mono">{user.balance}</td>
    <td className="px-5 py-3 text-sm text-gray-500 dark:text-gray-400">{user.joinDate}</td>
    <td className="px-5 py-3"><UserStatusBadge status={user.status} /></td>
    <td className="px-5 py-3 text-right">
      <div className="flex items-center justify-end gap-1.5">
        <Button variant="ghost" size="icon" className="h-7 w-7 text-gray-500 hover:text-blue-600 cursor-pointer" onClick={onEdit}>
          <Edit className="w-3.5 h-3.5" />
        </Button>
        <Button variant="ghost" size="icon" className="h-7 w-7 text-gray-500 hover:text-red-600 cursor-pointer" onClick={onDelete}>
          <Trash className="w-3.5 h-3.5" />
        </Button>
    
      </div>
    </td>
  </tr>
);

export default UserTableRow;
