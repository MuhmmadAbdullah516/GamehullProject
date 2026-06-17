import type { UserStatus } from "@/admin/types/users";

type Props = { status: UserStatus };

const statusConfig: Record<UserStatus, string> = {
  Active:  "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  Banned:  "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  Pending: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
};

const UserStatusBadge = ({ status }: Props) => (
  <span className={`px-2.5 py-1 text-xs rounded-full font-medium ${statusConfig[status]}`}>
    {status}
  </span>
);

export default UserStatusBadge;
