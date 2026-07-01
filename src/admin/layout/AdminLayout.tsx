import AdminHeader from "./AdminHeader";
import AdminSidebar from "@/admin/layout/AdminSidebar";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location.pathname]);
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="flex-shrink-0 z-20 shadow-sm relative">
        <AdminHeader onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      </div>
      <div className="flex flex-1 overflow-hidden relative">
        <div
          className={`fixed right-0 md:right-auto md:relative z-20 h-full md:translate-x-0  transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <AdminSidebar />
        </div>
        <main
          className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900"
          onClick={() => setIsSidebarOpen(false)}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
