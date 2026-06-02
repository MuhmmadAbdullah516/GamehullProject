import { User } from "lucide-react";

import PasswordField from "@/components/auth/password-field";
import { Button } from "@/components/ui/button";
import type { PasswordChangeSectionProps } from "@/types/profile";

const fields = [
  { id: "current_password", label: "Current Password" },
  { id: "new_password", label: "New Password" },
  { id: "confirm", label: "Confirm New" },
] as const;

function PasswordChangeSection({ onChange, values }: PasswordChangeSectionProps) {
  return (
    <section className="rounded-2xl border border-slate-900/10 bg-white p-6 md:p-8 shadow-[0_2px_16px_rgb(15_23_42_/_0.07)] transition-all duration-200 dark:border-blue-400/20 dark:bg-[#0e1629] dark:shadow-[0_4px_24px_rgb(0_0_0_/_0.4)]">
      <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
        <div className="flex items-center gap-4">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-border bg-slate-100 transition-colors dark:border-blue-400/15 dark:bg-white/[0.06]">
            <User className="size-6 text-slate-400 dark:text-white/[0.28]" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900 transition-colors dark:text-white">Change Password</h2>
            <p className="text-sm text-slate-500 transition-colors dark:text-white/55">Update your account password</p>
          </div>
        </div>
        <Button className="h-auto rounded-full bg-primary px-5 py-2 text-sm font-bold text-white transition-all hover:bg-blue-700" type="submit">
          Update Password
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {fields.map((field) => (
          <PasswordField
            autoComplete="new-password"
            className="space-y-0"
            iconClassName="mr-4 size-4 self-center text-slate-400 group-focus-within:text-slate-400"
            id={field.id}
            inputClassName="h-full min-w-0 flex-1 pl-11 pr-12 text-sm leading-none text-slate-900 placeholder:text-slate-400 dark:text-slate-100"
            key={field.id}
            label={field.label}
            labelClassName="ml-1 block text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-white/55"
            name={field.id}
            onChange={onChange}
            placeholder="********"
            toggleClassName="ml-4 size-8 p-0 text-slate-400 hover:bg-transparent hover:text-primary"
            value={values[field.id]}
            wrapperClassName="h-12 rounded-xl border-border bg-slate-100 py-0 text-slate-900 focus-within:border-border focus-within:ring-1 focus-within:ring-primary dark:border-blue-400/15 dark:bg-white/[0.06] dark:text-slate-100"
          />
        ))}
      </div>
    </section>
  );
}

export default PasswordChangeSection;
