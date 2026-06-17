import { Users, Gamepad2, DollarSign, Activity } from "lucide-react";
import type { AdminStat, AdminActivity} from "@/admin/types/dashboard";

const stats: AdminStat[] = [
  {
    label: "Total Users",
    value: "1,245",
    icon: Users,
    color: "text-blue-500",
    bg: "bg-blue-100 dark:bg-blue-900/30",
  },
  {
    label: "Active Games",
    value: "34",
    icon: Gamepad2,
    color: "text-green-500",
    bg: "bg-green-100 dark:bg-green-900/30",
  },
  {
    label: "Total Revenue",
    value: "$45,231",
    icon: DollarSign,
    color: "text-amber-500",
    bg: "bg-amber-100 dark:bg-amber-900/30",
  },
  {
    label: "Active Sessions",
    value: "128",
    icon: Activity,
    color: "text-purple-500",
    bg: "bg-purple-100 dark:bg-purple-900/30",
  },
];

const recentActivity: AdminActivity[] = [
  {
    id: 1,
    user: "johndoe",
    action: "Deposited $500",
    time: "2 mins ago",
    status: "Completed",
  },
  {
    id: 2,
    user: "janedoe",
    action: "Played Sweet Bonanza",
    time: "15 mins ago",
    status: "Active",
  },
  {
    id: 3,
    user: "cryptomaster",
    action: "Withdrew $1,200",
    time: "1 hour ago",
    status: "Pending",
  },
  {
    id: 4,
    user: "luckyguy",
    action: "Registered account",
    time: "3 hours ago",
    status: "Completed",
  },
];

const Dashboard = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6 ">
      <div>
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          Dashboard Overview
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
          Welcome back, Admin.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex items-center gap-4"
          >
            <div className={`p-3 rounded-lg ${stat.bg}`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {stat.label}
              </p>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                {stat.value}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            Recent Activity
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600 dark:text-gray-400">
            <thead className="bg-gray-50 dark:bg-gray-800/50 text-gray-500 dark:text-gray-400 font-medium border-b border-gray-100 dark:border-gray-700">
              <tr>
                <th className="px-6 py-3">User</th>
                <th className="px-6 py-3">Action</th>
                <th className="px-6 py-3">Time</th>
                <th className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {recentActivity.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <td className="px-6 py-4 font-medium text-gray-800 dark:text-gray-200">
                    {item.user}
                  </td>
                  <td className="px-6 py-4">{item.action}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {item.time}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2.5 py-1 text-xs rounded-full font-medium ${
                        item.status === "Completed"
                          ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                          : item.status === "Active"
                            ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                            : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                      }`}
                    >
                      {String(item.status)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
