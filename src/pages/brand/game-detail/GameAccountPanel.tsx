import { CirclePlay, Download, Plus, Upload, User } from "lucide-react";
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
    <article className="rounded-[32px] border border-card-border bg-white p-8 shadow-card transition-all duration-200 dark:border-card-dark-border dark:bg-card-dark-bg dark:shadow-card-dark md:p-10">
      <div className="mb-8 flex items-center gap-5">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
          <User className="size-[22px]" strokeWidth={2.5} />
        </div>
        <div>
          <h2 className="text-[19px] font-black tracking-normal text-text-heading transition-colors dark:text-text-dark-heading">
            Game Account
          </h2>
          <p className="text-[13px] text-text-muted transition-colors dark:text-text-dark-muted">
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
            <Button className="!h-[52px] cursor-pointer gap-2 rounded-full border border-primary/20 bg-primary/10 text-[14px] font-bold text-primary transition-all hover:bg-primary/20" onClick={() => setCashinDialogOpen(true)} type="button" variant="outline">
              <Upload className="size-[18px]" strokeWidth={2.5} />
              Cashin
            </Button>
            <Button className="!h-[52px] cursor-not-allowed gap-2 rounded-full border border-border bg-bg-muted text-[14px] font-bold text-text-dim opacity-60 grayscale disabled:pointer-events-auto dark:border-border-dark" disabled type="button" variant="outline">
              <Download className="size-[18px]" strokeWidth={2.5} />
              Cashout
            </Button>
          </div>
          <Link
            className="mt-3 flex h-[52px] w-full items-center justify-center gap-2 rounded-full bg-primary text-[14px] font-black text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary-hover"
            rel="noopener noreferrer"
            target="_blank"
            to="/games"
          >
            <CirclePlay className="size-[18px]" strokeWidth={3} />
            Play Now
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          <p className="text-[15px] leading-relaxed text-text-body transition-colors dark:text-text-dark-body">
            Click the button below to instantly generate your <strong className="text-text-heading dark:text-text-dark-heading">{game.name}</strong> account.
          </p>
          <Button className="!h-[52px] w-full cursor-pointer gap-3 rounded-full bg-primary text-[15px] font-bold text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary-hover active:scale-[0.98]" onClick={handleCreateAccount} type="button">
            <Plus className="size-5" strokeWidth={2.5} />
            Create Game Account
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
