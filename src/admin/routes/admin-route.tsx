import { Route, Routes } from "react-router-dom";
import AdminLayout from "@/admin/layout/AdminLayout";
import Dashboard from "@/admin/dashboard/Dashboard";
import Games from "@/admin/games/Games";
import GameForm from "@/admin/games/GameForm";
import Users from "@/admin/users/Users";
import UserForm from "@/admin/users/UserForm"; // ← ADD THIS
import Transactions from "@/admin/transactions/Transactions";
import TransactionForm from "@/admin/transactions/TransactionForm";
import ContactMessages from "@/admin/contact-messages/ContactMessages";
import Faq from "@/admin/faq/Faq";
import UserReviews from "@/admin/user-reviews/UserReviews";
import ReviewForm from "@/admin/user-reviews/ReviewForm";
import EmailSettings from "@/admin/email-settings/EmailSettings";
import Profile from "@/admin/profile/Profile";
import Overview from "@/admin/game-providers/Overview";
import ProviderDashboard from "@/admin/game-providers/ProviderDashboard";
import Accounts from "@/admin/game-providers/Accounts";
import Transfers from "@/admin/game-providers/Transfers";
import ApiTools from "@/admin/game-providers/ApiTools";
import Logs from "@/admin/game-providers/Logs";
import Settings from "@/admin/game-providers/Settings";
import FaqForm from "@/admin/faq/components/faqForm";


const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="games" element={<Games />} />
        <Route path="games/new" element={<GameForm />} />
        <Route path="games/:id/edit" element={<GameForm />} />
        <Route path="users" element={<Users />} />
        <Route path="users/new" element={<UserForm />} /> {/* ← ADD THIS */}
        <Route path="users/:id/edit" element={<UserForm />} />{" "}
        {/* ← ADD THIS */}
        <Route path="transactions" element={<Transactions />} />
        <Route path="transactions/new" element={<TransactionForm />} />
        <Route path="transactions/:id/edit" element={<TransactionForm />} />
        <Route path="contact-messages" element={<ContactMessages />} />
       <Route path="faq" element={<Faq />} />
<Route path="faq/new" element={<FaqForm />} />
<Route path="faq/:id/edit" element={<FaqForm />} />

        <Route path="user-reviews" element={<UserReviews />} />
        <Route path="user-reviews/new" element={<ReviewForm />} />
        <Route path="user-reviews/:id/edit" element={<ReviewForm />} />
        <Route path="email-settings" element={<EmailSettings />} />
        <Route path="profile" element={<Profile />} />
        <Route path="game-providers">
          <Route path="overview" element={<Overview />} />
          <Route path="dashboard" element={<ProviderDashboard />} />
          <Route path="accounts" element={<Accounts />} />
          <Route path="transfers" element={<Transfers />} />
          <Route path="api-tools" element={<ApiTools />} />
          <Route path="logs" element={<Logs />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
