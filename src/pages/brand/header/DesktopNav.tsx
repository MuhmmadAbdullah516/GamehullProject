import { NavLink } from "react-router-dom";

import { navigationItems } from "./header-data";

function DesktopNav() {
  return (
    <nav className="mx-4 hidden items-center gap-1 lg:flex">
      {navigationItems.map((item) => (
        <NavLink
          className={({ isActive }) =>
            `inline-flex cursor-pointer items-center rounded-full px-4 py-2 text-base font-semibold no-underline transition-colors ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-white/55 dark:hover:bg-white/[0.06] dark:hover:text-slate-100"
            }`
          }
          key={item.to}
          to={item.to}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}

export default DesktopNav;
