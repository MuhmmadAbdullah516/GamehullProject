import BrandLogo from "@/components/brand-logo";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
interface AdminHeaderProps {
  onMenuClick:() => void;
 }
const AdminHeader = ({onMenuClick}:AdminHeaderProps) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <header className="flex items-center justify-between px-4 py-2 bg-white dark:bg-gray-800 shadow">
      <div className="text-gray-800 dark:text-gray-200">
        <BrandLogo />
      </div>
      <div className="flex items-center gap-4">

  {/* Timer */}
  <div className="hidden md:flex flex-col  rounded-full px-4 py-1.5 border border-gray-300 dark:border-gray-600 dark:bg-gray-700">
    <span className="text-sm text-text-muted font-bold dark:text-text-dark-muted">
      {formatDate(currentTime)} / {currentTime.toLocaleTimeString()}
    </span>
  </div>

  {/* Mobile Menu Icon */}
  <Menu onClick={onMenuClick} className="text-gray-500 dark:text-gray-400 block md:hidden" />

</div>
    </header>
  );
};

export default AdminHeader;
