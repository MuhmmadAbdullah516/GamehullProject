import { LogOut, Mail, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { ProfileInfoSectionProps } from "@/types/profile";

function getUsername(name?: string) {
  return `@${name?.toLowerCase().replaceAll(" ", "") || "player"}`;
}

function ProfileInfoSection({ onSignOut, user }: ProfileInfoSectionProps) {
  return (
    <section className="rounded-2xl border border-slate-900/10 bg-white p-6 md:p-8 shadow-[0_2px_16px_rgb(15_23_42_/_0.07)] transition-all duration-200 dark:border-blue-400/20 dark:bg-[#0e1629] dark:shadow-[0_4px_24px_rgb(0_0_0_/_0.4)]">
      <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
        <div className="flex items-center gap-4">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-full border border-border bg-slate-100 transition-colors dark:border-blue-400/15 dark:bg-white/[0.06]">
            <User className="size-7 text-slate-400 dark:text-white/[0.28]" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900 transition-colors dark:text-white">{user?.name}</h2>
            <p className="text-sm text-slate-500 transition-colors dark:text-white/55">Account information</p>
          </div>
        </div>
        <Button className="h-auto rounded-full border border-border bg-transparent px-5 py-2.5 text-sm font-bold text-red-500 transition-all hover:bg-red-500/5 dark:border-blue-400/15" onClick={onSignOut} type="button" variant="outline">
          <LogOut className="size-4" strokeWidth={2.5} /> Sign Out
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2.5 ml-1 block text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-white/55" htmlFor="username">Username</label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400" />
            <input className="w-full cursor-not-allowed rounded-xl border border-border bg-transparent py-3 pl-12 pr-4 text-sm text-slate-900 opacity-80 outline-none transition focus:border-blue-500/70 focus:ring-2 focus:ring-blue-500/25 dark:border-blue-400/15 dark:text-white" id="username" readOnly type="text" value={getUsername(user?.name)} />
          </div>
        </div>
        <div>
          <label className="mb-2.5 ml-1 block text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-white/55" htmlFor="email">Email</label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400" />
            <input className="w-full cursor-not-allowed rounded-xl border border-border bg-transparent py-3 pl-12 pr-4 text-sm text-slate-900 opacity-80 outline-none transition focus:border-blue-500/70 focus:ring-2 focus:ring-blue-500/25 dark:border-blue-400/15 dark:text-white" id="email" readOnly type="email" value={user?.email || ""} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileInfoSection;
