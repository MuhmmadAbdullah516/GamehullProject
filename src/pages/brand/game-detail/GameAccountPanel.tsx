import { Download, Upload, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import AccountField from "@/pages/brand/game-detail/AccountField";
import CashinDialog from "@/pages/brand/game-detail/CashinDialog";
import type { GameAccountPanelProps } from "@/types/game-detail";

function GameAccountPanel({ game }: GameAccountPanelProps) {
  const [hasGameAccount, setHasGameAccount] = useState(false);
  const [cashinDialogOpen, setCashinDialogOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  async function copyAccountValue(value: string, label: string) {
    try {
      await navigator.clipboard.writeText(value);
      toast.success(`${label} copied`);
    } catch {
      toast.error(`Failed to copy ${label.toLowerCase()}`);
    }
  }

  function handleCreateAccount() {
    setHasGameAccount(true);
    toast.success(`${game.name} account created`);
  }

  function handleCashinComplete(amount: string) {
    toast.success(`$${Number(amount).toFixed(2)} cashin requested for ${game.name}.`);
    setCashinDialogOpen(false);
  }

  return (
    <article className="rounded-4xl border border-slate-900/10 bg-white p-8 shadow-[0_2px_16px_rgb(15_23_42_/_0.07)] transition-all duration-200 dark:border-blue-400/20 dark:bg-[#0e1629] dark:shadow-[0_4px_24px_rgb(0_0_0_/_0.4)] md:p-10">
      <div className="mb-8 flex items-center gap-5">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <User className="size-[22px]" strokeWidth={2.5} />
        </div>
        <div>
          <h2 className="text-[19px] font-black tracking-normal text-slate-900 transition-colors dark:text-white">
            Game Account
          </h2>
          <p className="text-[13px] text-slate-500 transition-colors dark:text-white/55">
            {hasGameAccount ? "Your platform credentials" : "Ready to start playing?"}
          </p>
        </div>
      </div>

      {hasGameAccount ? (
        <div className="space-y-5">
          <AccountField
            id="game-username"
            label="Username"
            onCopy={() => copyAccountValue("abdullah_gh", "Username")}
            value="abdullah_gh"
          />
          <AccountField
            id="game-password"
            label="Password"
            onCopy={() => copyAccountValue("gh_pass_123", "Password")}
            onToggle={() => setShowPassword((current) => !current)}
            showValue={showPassword}
            value="gh_pass_123"
          />
          <div className="grid grid-cols-2 gap-3 pt-4">
            <Button className="!h-13 gap-2 rounded-2xl border border-primary/20 bg-primary/10 text-sm font-bold text-primary hover:bg-primary/20" onClick={() => setCashinDialogOpen(true)} type="button" variant="outline">
              <Upload className="size-4" strokeWidth={2.5} />
              Cashin
            </Button>
            <Button className="!h-13 cursor-not-allowed gap-2 rounded-2xl border border-border bg-slate-100 text-sm font-bold text-slate-400 opacity-60 grayscale dark:border-blue-400/15" disabled type="button" variant="outline">
              <Download className="size-4" strokeWidth={2.5} />
              Cashout
            </Button>
          </div>
          <Link className="mt-3 flex h-[52px] w-full items-center justify-center rounded-2xl bg-primary text-sm font-black text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-blue-700" to="/games">
            Play Now
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          <p className="text-[15px] leading-relaxed text-slate-600 transition-colors dark:text-zinc-400">
            Click the button below to instantly generate your <strong className="text-slate-900 dark:text-white">{game.name}</strong> account.
          </p>
          <Button className="!h-13 w-full rounded-2xl bg-primary text-[15px] font-bold text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-blue-700 active:scale-[0.98]" onClick={handleCreateAccount} type="button">
            Create Account Instantly
          </Button>
        </div>
      )}

      <Dialog open={cashinDialogOpen} onOpenChange={setCashinDialogOpen}>
        <CashinDialog gameName={game.name} onComplete={handleCashinComplete} />
      </Dialog>
    </article>
  );
}

export default GameAccountPanel;
