import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Search, Filter, UserPlus, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import type { AdminUser } from "../types/users";
import mockUsers from "./data/user.json";
import UserTableRow from "./components/UserTableRow";
import UserPagination from "./components/UserPagination";

const ITEMS_PER_PAGE = 10;

const Users = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [users, setUsers] = useState<AdminUser[]>(mockUsers as AdminUser[]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [userToDelete, setUserToDelete] = useState<AdminUser | null>(null);

  useEffect(() => {
    const state = location.state as {
      action?: string;
      user?: AdminUser;
    } | null;
    if (!state?.action || !state?.user) return;
    if (state.action === "add") {
      setUsers((prev) => [state.user!, ...prev]);
      toast.success(`${state.user.name} has been created successfully.`);
    } else if (state.action === "edit") {
      setUsers((prev) =>
        prev.map((u) => (u.id === state.user!.id ? state.user! : u)),
      );
      toast.success(`${state.user.name} has been updated successfully.`);
    }
    window.history.replaceState({}, "");
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const handleDelete = (user: AdminUser) => {
    setUserToDelete(user);
  };

  const handleConfirmDelete = () => {
    if (!userToDelete) return;
    setUsers((prev) => prev.filter((u) => u.id !== userToDelete.id));
    toast.success(`${userToDelete.name} has been deleted successfully.`);
    setUserToDelete(null);
  };

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <div className="p-4 max-w-7xl mx-auto space-y-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div>
          <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">
            Users Management
          </h1>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            Manage players, agents, and administrators — {users.length} total
            accounts.
          </p>
        </div>
        <Button
          onClick={() => navigate("/admin/users/new")}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-5 py-5 flex items-center gap-2 cursor-pointer text-sm shadow-lg shadow-blue-500/20"
        >
          <UserPlus className="w-4 h-4" /> Add New User
        </Button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-3 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row gap-3 justify-between items-center">
        <div className="relative w-full sm:max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:text-gray-200"
          />
        </div>
        <Button
          variant="outline"
          className="flex items-center gap-2 border-gray-200 dark:border-gray-700 dark:text-gray-300 cursor-pointer text-sm"
        >
          <Filter className="w-4 h-4" /> Filters
        </Button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-700">
              <tr>
                {["User", "Role", "Balance", "Joined", "Status", "Actions"].map(
                  (h) => (
                    <th
                      key={h}
                      className={`px-5 py-2.5 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider ${h === "Actions" ? "text-right" : ""}`}
                    >
                      {h}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {paginatedUsers.map((user) => (
                <UserTableRow
                  key={user.id}
                  user={user}
                  onEdit={() =>
                    navigate(`/admin/users/${user.id}/edit`, {
                      state: { user },
                    })
                  }
                  onDelete={() => handleDelete(user)}
                />
              ))}
            </tbody>
          </table>
        </div>
        <UserPagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={filteredUsers.length}
          itemsOnPage={paginatedUsers.length}
          onPageChange={setCurrentPage}
        />
      </div>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={!!userToDelete}
        onOpenChange={(open) => {
          if (!open) setUserToDelete(null);
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
              Are you sure you want to delete{" "}
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                {userToDelete?.name}
              </span>
              ? This action cannot be undone.
            </p>
            <div className="flex gap-3 w-full">
              <Button
                variant="outline"
                onClick={() => setUserToDelete(null)}
                className="flex-1 rounded-xl cursor-pointer"
              >
                Cancel
              </Button>
              <Button
                onClick={handleConfirmDelete}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white rounded-xl cursor-pointer"
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

export default Users;
