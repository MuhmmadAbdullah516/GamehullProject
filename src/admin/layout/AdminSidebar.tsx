import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import type {AdminSidebarLinkProps} from "@/admin/types/layout"
import {
  LayoutDashboard,
  Users,
  Puzzle,
  ReceiptText,
  MessageSquareText,
  CircleHelp,
  Pencil,
  Mail,
  Blocks,
  ChevronDown,
  User,
  LogOut,
} from "lucide-react";

const AdminSidebar = () => {
  const [isProvidersOpen, setIsProvidersOpen] = useState(false);
  // Uses your exact original spacing: p-2.5, text-sm, rounded-full, font-semibold
  const getLinkClasses = ({ isActive }:AdminSidebarLinkProps) =>
    `flex items-center rounded-full p-2.5 text-sm font-semibold transition-colors ${
      isActive
        ? "bg-[#edf2fe] text-blue-600"
        : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
    }`;

  // Your exact original icon sizing
  const iconClasses = "inline-block mr-2 w-4 h-4";
  const getSubLinkClasses = ({ isActive }: AdminSidebarLinkProps) =>
    `text-sm font-semibold transition-colors ${
      isActive ? "text-blue-600" : "text-slate-500 hover:text-slate-800"
    }`;

  return (
    // Kept your original p-4 and gap-1
    <aside className="flex flex-col p-4 bg-white dark:bg-gray-800 shadow w-64 gap-1 h-full overflow-y-auto">
      <NavLink to="/admin" end className={getLinkClasses}>
        <LayoutDashboard className={iconClasses} />
        Dashboard
      </NavLink>

      <NavLink to="/admin/users" className={getLinkClasses}>
        <Users className={iconClasses} />
        Users
      </NavLink>

      <NavLink to="/admin/games" className={getLinkClasses}>
        <Puzzle className={iconClasses} />
        Games
      </NavLink>

      <NavLink to="/admin/transactions" className={getLinkClasses}>
        <ReceiptText className={iconClasses} />
        Transactions
      </NavLink>

      <NavLink to="/admin/contact-messages" className={getLinkClasses}>
        <MessageSquareText className={iconClasses} />
        Contact Messages
      </NavLink>

      <NavLink to="/admin/faq" className={getLinkClasses}>
        <CircleHelp className={iconClasses} />
        FAQ Management
      </NavLink>

      <NavLink to="/admin/user-reviews" className={getLinkClasses}>
        <Pencil className={iconClasses} />
        User Reviews
      </NavLink>

      <NavLink to="/admin/email-settings" className={getLinkClasses}>
        <Mail className={iconClasses} />
        Email Settings
      </NavLink>

      {/* Game Providers with Chevron Down */}
      <Button
        onClick={() => setIsProvidersOpen(!isProvidersOpen)}
        variant="ghost"
        className="w-full flex items-center justify-between rounded-full p-2.5 text-sm font-semibold text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition-colors"
      >
        <div className="flex items-center flex-1 justify-between">
          <div className="flex items-center">
            <Blocks className={iconClasses} />
            Game Providers
          </div>
          <ChevronDown
            className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${
              isProvidersOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </Button>
      {isProvidersOpen && (
        <div className="ml-[18px] pl-4 border-l border-slate-200 flex flex-col gap-3 mt-1 mb-2 py-1">
          <NavLink
            to="/admin/game-providers/overview"
            className={getSubLinkClasses}
          >
            Providers Overview
          </NavLink>
          <NavLink
            to="/admin/game-providers/dashboard"
            className={getSubLinkClasses}
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/admin/game-providers/accounts"
            className={getSubLinkClasses}
          >
            Accounts
          </NavLink>
          <NavLink
            to="/admin/game-providers/transfers"
            className={getSubLinkClasses}
          >
            Transfers
          </NavLink>
          <NavLink
            to="/admin/game-providers/api-tools"
            className={getSubLinkClasses}
          >
            API Tools
          </NavLink>
          <NavLink
            to="/admin/game-providers/logs"
            className={getSubLinkClasses}
          >
            Logs
          </NavLink>
          <NavLink
            to="/admin/game-providers/settings"
            className={getSubLinkClasses}
          >
            Settings
          </NavLink>
        </div>
      )}
      <div className="h-[1px] w-full shrink-0 bg-slate-200 dark:bg-slate-700 my-2" />

      {/* Subtle Gray Divider matching your spacing */}

      <NavLink to="/admin/profile" className={getLinkClasses}>
        <User className={iconClasses} />
        Profile
      </NavLink>

      <NavLink to="/admin/logout" className={getLinkClasses}>
        <LogOut className={iconClasses} />
        Logout
      </NavLink>
    </aside>
  );
};

export default AdminSidebar;
