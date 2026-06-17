import { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { ArrowLeft, User, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { AdminUser, UserRole, UserStatus } from "../types/users";
import { createUserSchema } from "@/schemas/user-schema";
import type { CreateUserFields } from "@/types/validation";
import UserStatusBadge from "./components/UserStatusBadge";

const inputClass =
  "w-full px-4 py-3 bg-gray-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:text-slate-200 transition-all";
const labelClass =
  "block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2";
const ROLE_INFO = [
  {
    r: "Player" as UserRole,
    desc: "Can play games and manage personal wallet.",
  },
  {
    r: "Agent" as UserRole,
    desc: "Can manage players and process transactions.",
  },
  { r: "Admin" as UserRole, desc: "Full access to all admin panel features." },
];

const UserForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams<{ id: string }>();
  const isEditMode = Boolean(id);
  const editingUser = location.state?.user as AdminUser | undefined;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<UserRole>("Player");
  const [status, setStatus] = useState<UserStatus>("Active");
  const [balance, setBalance] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (isEditMode && !editingUser) {
      navigate("/admin/users");
      return;
    }
    if (editingUser) {
      setName(editingUser.name);
      setEmail(editingUser.email);
      setRole(editingUser.role);
      setStatus(editingUser.status);
      setBalance(editingUser.balance.replace(/[$,]/g, ""));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const dataToValidate: CreateUserFields = {
      name,
      email,
      role,
      status,
      balance: balance || undefined,
    };
    const result = createUserSchema.safeParse(dataToValidate);
    if (!result.success) {
      setError(
        Object.values(result.error.flatten().fieldErrors)
          .flat()
          .find(Boolean) || "Please fix errors.",
      );
      return;
    }
    let bal = balance.trim();
    if (!bal) bal = "$0.00";
    else if (!bal.startsWith("$")) {
      const n = parseFloat(bal);
      bal = !isNaN(n)
        ? `$${n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
        : `$${bal}`;
    }
    const user: AdminUser = isEditMode
      ? {
          ...editingUser!,
          name: name.trim(),
          email: email.trim().toLowerCase(),
          role,
          status,
          balance: bal,
        }
      : {
          id: Date.now().toString(),
          name: name.trim(),
          email: email.trim().toLowerCase(),
          role,
          status,
          balance: bal,
          joinDate: new Date().toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          }),
        };
    navigate("/admin/users", {
      state: { action: isEditMode ? "edit" : "add", user },
    });
  };

  const previewBalance = balance
    ? balance.startsWith("$")
      ? balance
      : `$${balance}`
    : "$0.00";

  return (
    <div className="p-6 lg:p-8 space-y-6">
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={() => navigate("/admin/users")}
          className="p-2.5 rounded-xl hover:bg-white dark:hover:bg-slate-800 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all text-slate-500 cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            {isEditMode ? "Edit User" : "Add New User"}
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Users / {isEditMode ? `Edit — ${editingUser?.name}` : "New Account"}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Form Panel — left 2/3 */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-6 sm:p-8">
          <h2 className="text-base font-bold text-gray-800 dark:text-gray-100 mb-1">
            User Information
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            Fill in the details to {isEditMode ? "update" : "create"} the user
            account.
          </p>
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="p-4 text-sm text-red-600 bg-red-50 dark:bg-red-950/30 dark:text-red-400 rounded-xl border border-red-100 dark:border-red-900/30">
                {error}
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className={labelClass}>
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="e.g. John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email Address
                </label>
                <input
                  id="email"
                  type="text"
                  placeholder="e.g. john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="status" className={labelClass}>
                  Status
                </label>
                <div className="relative">
                  <select
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value as UserStatus)}
                    className={`${inputClass} appearance-none pr-10 cursor-pointer dark:bg-slate-900`}
                  >
                    <option value="Active">Active</option>
                    <option value="Pending">Pending</option>
                    <option value="Banned">Banned</option>
                  </select>
                  <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                </div>
              </div>
              <div>
                <label htmlFor="balance" className={labelClass}>
                  Balance
                </label>
                <input
                  id="balance"
                  type="text"
                  placeholder="e.g. 500.00"
                  value={balance}
                  onChange={(e) => setBalance(e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>
            {/* Role Selector Cards */}
            <div>
              <label className={labelClass}>Role</label>
              <div className="grid grid-cols-1 md:grid-cols-3  gap-3">
                {ROLE_INFO.map(({ r, desc }) => (
                  <div
                    key={r}
                    onClick={() => setRole(r)}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${role === r ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border-slate-100 dark:border-slate-700 hover:border-slate-200 dark:hover:border-slate-600"}`}
                  >
                    <p
                      className={`text-sm font-bold mb-1.5 ${role === r ? "text-blue-600" : "text-slate-600 dark:text-slate-400"}`}
                    >
                      {r}
                    </p>
                    <p className="text-xs text-slate-400 dark:text-slate-500 leading-snug">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col md:justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-700">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/admin/users")}
                className="rounded-full px-6 py-5 cursor-pointer"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-5 cursor-pointer"
              >
                {isEditMode ? "Save Changes" : "Create User"}
              </Button>
            </div>
          </form>
        </div>

        {/* Preview Panel — right 1/3 */}
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-6">
            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-5">
              Live Preview
            </p>
            <div className="flex flex-col items-center text-center gap-3 pb-5 border-b border-slate-100 dark:border-slate-700">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-3xl font-black shadow-lg shadow-blue-500/20">
                {name ? (
                  name.charAt(0).toUpperCase()
                ) : (
                  <User className="w-8 h-8" />
                )}
              </div>
              <div>
                <p className="font-bold text-gray-900 dark:text-gray-100">
                  {name || "Full Name"}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                  {email || "email@example.com"}
                </p>
              </div>
              <UserStatusBadge status={status} />
            </div>
            <div className="space-y-3 pt-4">
              {[
                { label: "Role", value: role },
                { label: "Balance", value: previewBalance },
                {
                  label: "Join Date",
                  value: new Date().toLocaleDateString("en-US", {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                  }),
                },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-center">
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {label}
                  </span>
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-amber-50 dark:bg-amber-900/20 rounded-2xl border border-amber-100 dark:border-amber-800/30 p-5">
            <p className="text-xs font-bold text-amber-700 dark:text-amber-400 mb-2">
              ⚠ Permission Note
            </p>
            <p className="text-xs text-amber-600 dark:text-amber-500 leading-relaxed">
              Admin role users have full access to all management panels. Assign
              this role carefully.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
