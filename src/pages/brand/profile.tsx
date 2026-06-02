import { Monitor, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import MyProfile from "@/pages/brand/profile/MyProfile";
import ActiveDevices from "@/pages/brand/profile/ActiveDevices";
import {useSearchParams}  from "react-router-dom";
import type { ProfileTab } from "@/types/profile";

function ProfilePage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const tabParam = searchParams.get("tab")
  const activeTab:ProfileTab = tabParam === "devices" ? "devices":"profile"

  const handleTabChange = (tab:ProfileTab)=>{
    setSearchParams({tab})
  }

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-4 py-12 md:py-16">
      <div className="mb-10 text-center">
        <h1 className="mb-3 text-4xl md:text-5xl font-black leading-none tracking-normal text-slate-900 transition-colors dark:text-white">
          Account Center
        </h1>

        <p className="mx-auto max-w-125 text-base leading-relaxed text-slate-600 transition-colors dark:text-zinc-400 md:text-base">
          Your profile and settings in one place
        </p>
      </div>

      <div className="mb-8 flex flex-col gap-2 rounded-2xl border border-slate-900/10 bg-white p-2 shadow-[0_2px_16px_rgb(15_23_42_/_0.07)] transition-all duration-200 dark:border-blue-400/20 dark:bg-[#0e1629] dark:shadow-[0_4px_24px_rgb(0_0_0_/_0.4)] sm:flex-row">
        <Button
          className={cn(
            "h-auto flex-1 cursor-pointer rounded-xl px-4 py-3 text-sm font-bold transition-all duration-200",
            activeTab === "profile"
              ? "!bg-primary !text-white hover:!bg-primary hover:!text-white focus:!bg-primary focus:!text-white dark:!text-white"
              : "bg-transparent text-slate-600 hover:bg-primary/5 hover:text-primary dark:text-zinc-400",
          )}
          onClick={() => handleTabChange("profile")}
          type="button"
          variant="ghost"
        >
          <User className="size-5" />
          My Profile
        </Button>

        <Button
          className={cn(
            "h-auto flex-1 cursor-pointer rounded-xl px-4 py-3 text-sm font-bold transition-all duration-200",
            activeTab === "devices"
              ? "!bg-primary !text-white hover:!bg-primary hover:!text-white focus:!bg-primary focus:!text-white dark:!text-white"
              : "bg-transparent text-slate-600 hover:bg-primary/5 hover:text-primary dark:text-zinc-400",
          )}
          onClick={() => handleTabChange("devices")}
          type="button"
          variant="ghost"
        >
          <Monitor className="size-5" />
          Active Devices
        </Button>
      </div>

      {activeTab === "profile" ? <MyProfile /> : <ActiveDevices />}
    </main>
  );
}

export default ProfilePage;
