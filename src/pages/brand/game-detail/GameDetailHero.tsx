import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

import { gameImages } from "@/data/game-assets";
import type { GameDetailHeroProps } from "@/types/game-detail";

function GameDetailHero({ game }: GameDetailHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white bg-[linear-gradient(180deg,#ffffff_0%,#f0f5ff_100%)] py-12 pb-8 transition-colors duration-300 ease-out dark:bg-[#080d1c] dark:bg-[radial-gradient(ellipse_85%_55%_at_50%_-5%,rgba(29,78,216,0.48)_0%,transparent_65%),linear-gradient(#080d1c,#080d1c)] md:py-20 md:pb-13">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-transparent" />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
        <nav className="mb-[18px] flex items-center gap-1.5 text-xs text-slate-400 dark:text-zinc-600">
          <Link className="font-medium text-primary hover:text-blue-700" to="/">Home</Link>
          <ChevronLeft className="size-2.5 rotate-180" />
          <Link className="font-medium text-primary hover:text-blue-700" to="/games">Games</Link>
          <ChevronLeft className="size-2.5 rotate-180" />
          <span>{game.name}</span>
        </nav>

        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
          <div className="group relative size-[140px] shrink-0 overflow-hidden rounded-4xl border border-slate-900/10 shadow-[0_2px_16px_rgb(15_23_42_/_0.07)] dark:border-blue-400/20 dark:shadow-[0_4px_24px_rgb(0_0_0_/_0.4)] md:size-[180px] md:rounded-5xl">
            <img
              alt={game.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              src={gameImages[game.imageKey]}
            />
          </div>
          <div className="text-center md:text-left">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-600/20 bg-blue-600/[0.07] px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-primary transition-colors duration-200 dark:border-blue-400/25 dark:bg-blue-600/10 dark:text-blue-200">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              {game.tag}
            </span>
            <h1 className="mb-4 text-[clamp(32px,5vw,48px)] font-black leading-[1.1] tracking-normal text-slate-900 transition-colors duration-200 dark:text-white">
              {game.name}
            </h1>
            <p className="max-w-[560px] text-[15px] leading-relaxed text-slate-600 transition-colors duration-200 dark:text-zinc-400 md:text-base">
              {game.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GameDetailHero;
