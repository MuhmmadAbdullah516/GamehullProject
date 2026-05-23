import { BookOpen, Gamepad2 } from "lucide-react";
import type { RefObject } from "react";
import { Link } from "react-router-dom";

import type { GameCard } from "@/types/games";
import { cashoutSteps } from "./cashout-data";
import type { CashoutTab } from "./cashout-types";
import GameAccountSelector from "./GameAccountSelector";

type CashoutRequestTabProps = {
  filteredGames: GameCard[];
  gameDropdownRef: RefObject<HTMLDivElement | null>;
  gameSearch: string;
  onGameSearchChange: (value: string) => void;
  onRedirectToGame: () => void;
  onSelectGame: (game: GameCard) => void;
  onSetTab: (tab: CashoutTab) => void;
  onToggleGameList: () => void;
  selectedGame: GameCard | null;
  showGameList: boolean;
};

function CashoutRequestTab({
  filteredGames,
  gameDropdownRef,
  gameSearch,
  onGameSearchChange,
  onRedirectToGame,
  onSelectGame,
  onSetTab,
  onToggleGameList,
  selectedGame,
  showGameList,
}: CashoutRequestTabProps) {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-card-border bg-card-bg p-6 shadow-card dark:border-card-dark-border dark:bg-card-dark-bg dark:shadow-card-dark md:p-8">
        <div className="mb-8 flex items-center gap-4">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/[0.08] dark:bg-primary/[0.12]">
            <Gamepad2 className="size-6 text-primary" strokeWidth={2} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-text-heading dark:text-text-dark-heading">Your Game Accounts</h2>
            <p className="text-sm text-text-muted dark:text-text-dark-muted">Select a game to request a cashout from</p>
          </div>
        </div>

        <GameAccountSelector
          filteredGames={filteredGames}
          gameDropdownRef={gameDropdownRef}
          gameSearch={gameSearch}
          onGameSearchChange={onGameSearchChange}
          onRedirectToGame={onRedirectToGame}
          onSelectGame={onSelectGame}
          onToggleGameList={onToggleGameList}
          selectedGame={selectedGame}
          showGameList={showGameList}
        />
      </div>

      <div className="rounded-2xl border border-card-border bg-card-bg p-6 shadow-card dark:border-card-dark-border dark:bg-card-dark-bg dark:shadow-card-dark md:p-8">
        <div className="mb-8 flex items-center gap-4">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/[0.08] dark:bg-primary/[0.12]">
            <BookOpen className="size-6 text-primary" strokeWidth={2} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-text-heading dark:text-text-dark-heading">How to Request a Cashout</h2>
            <p className="text-sm text-text-muted dark:text-text-dark-muted">Follow these steps to withdraw your winnings</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {cashoutSteps.map((step, index) => (
            <div className="flex items-start gap-4 rounded-2xl border border-primary/10 bg-primary/[0.03] p-5 transition-colors hover:bg-primary/[0.05] dark:border-primary/20 dark:bg-primary/[0.06]" key={step.title}>
              <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-[13px] font-black text-white shadow-md">
                {index + 1}
              </div>
              <div className="flex-1">
                <h4 className="mb-1 text-[15px] font-bold text-text-heading dark:text-text-dark-heading">{step.title}</h4>
                <p className="text-[13px] leading-relaxed text-text-body dark:text-text-dark-body">
                  {index === 0 ? (
                    <>
                      Go to the{" "}
                      <button className="font-bold text-primary hover:underline" onClick={() => onSetTab("wallets")} type="button">
                        Wallets tab
                      </button>{" "}
                      and add your preferred cashout method. This is where your payments will be sent.
                    </>
                  ) : index === 3 ? (
                    <>
                      Monitor your request status on the{" "}
                      <Link className="font-bold text-primary hover:underline" to="/transactions">
                        Transactions page
                      </Link>
                      .
                    </>
                  ) : (
                    step.description
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CashoutRequestTab;
