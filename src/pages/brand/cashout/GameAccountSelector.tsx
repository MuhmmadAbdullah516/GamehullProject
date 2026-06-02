import { Check, ChevronDown, ExternalLink, Gamepad2 } from "lucide-react";

import { gameImages } from "@/data/game-assets";
import type { GameAccountSelectorProps } from "@/types/cashout";

function GameAccountSelector({
  filteredGames,
  gameDropdownRef,
  gameSearch,
  onGameSearchChange,
  onRedirectToGame,
  onSelectGame,
  onToggleGameList,
  selectedGame,
  showGameList,
}: GameAccountSelectorProps) {
  return (
    <div className="flex max-w-2xl flex-col gap-4 md:flex-row md:items-end">
      <div className="relative flex-1">
        <label className="mb-2 ml-1 block text-sm font-bold text-text-heading dark:text-text-dark-heading">
          Select Game Account
        </label>
        <div className="relative" ref={gameDropdownRef}>
          <button
            className="flex h-14 w-full cursor-pointer items-center gap-3 rounded-xl border border-border bg-white px-4 text-left text-base text-text shadow-sm outline-none transition-all focus:ring-2 focus:ring-primary dark:border-border-dark dark:bg-bg-dark dark:text-text-dark"
            onClick={onToggleGameList}
            type="button"
          >
            <div className="flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-primary/10 bg-primary/5">
              {selectedGame ? (
                <img alt="" className="size-full object-cover" src={gameImages[selectedGame.imageKey]} />
              ) : (
                <Gamepad2 className="size-4 text-primary/40" strokeWidth={2} />
              )}
            </div>
            <span className={selectedGame ? "font-bold text-text dark:text-text-dark" : "text-text-muted"}>
              {selectedGame ? selectedGame.name : "Select a game..."}
            </span>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
              <ChevronDown className={`size-5 text-text-muted transition-transform duration-200 ${showGameList ? "rotate-180" : ""}`} strokeWidth={2.5} />
            </div>
          </button>

          {showGameList ? (
            <div className="absolute z-50 mt-2 w-full overflow-hidden rounded-2xl border border-border bg-white shadow-2xl dark:border-border-dark dark:bg-card-dark-bg">
              <div className="border-b border-border bg-bg-muted/30 p-3 dark:border-border-dark dark:bg-bg-dark-muted/30">
                <input
                  className="w-full rounded-xl border border-border bg-white px-4 py-2 text-sm outline-none transition-all focus:ring-1 focus:ring-primary dark:border-border-dark dark:bg-bg-dark"
                  onChange={(event) => onGameSearchChange(event.target.value)}
                  placeholder="Search games..."
                  type="text"
                  value={gameSearch}
                />
              </div>
              <div className="wallet-scrollbar max-h-75 overflow-y-auto p-1.5">
                {filteredGames.map((game) => (
                  <button
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-all ${
                      selectedGame?.slug === game.slug
                        ? "bg-primary text-white shadow-md"
                        : "text-text hover:bg-primary/10 hover:text-primary dark:text-text-dark"
                    }`}
                    key={game.slug}
                    onClick={() => onSelectGame(game)}
                    type="button"
                  >
                    <div className="size-10 shrink-0 overflow-hidden rounded-lg border border-border/50 bg-white">
                      <img alt="" className="size-full object-cover" src={gameImages[game.imageKey]} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-sm font-bold">{game.name}</div>
                      <div className="truncate text-xs opacity-60">@abdullah</div>
                    </div>
                    {selectedGame?.slug === game.slug ? <Check className="size-4 shrink-0" strokeWidth={3} /> : null}
                  </button>
                ))}
                {filteredGames.length === 0 ? (
                  <div className="p-8 text-center text-sm text-text-muted">No games found matching your search.</div>
                ) : null}
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <button
        className="inline-flex h-14 w-full cursor-pointer items-center justify-center gap-2.5 rounded-full bg-primary px-8 text-base font-bold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-hover active:scale-95 md:w-auto"
        onClick={onRedirectToGame}
        type="button"
      >
        Request Cashout
        <ExternalLink className="size-5" strokeWidth={2.5} />
      </button>
    </div>
  );
}

export default GameAccountSelector;
