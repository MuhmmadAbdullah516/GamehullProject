import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {useAuth} from "@/hooks/auth/use-auth"

import { Button } from "@/components/ui/button";
import { gameImages, gameTagStyles } from "@/data/game-assets";
import type { GamesPreviewSectionProps } from "@/types/home";
import { sectionRevealClass, smoothCardClass } from "./home-styles";

function GamesPreviewSection({ games }: GamesPreviewSectionProps) {
  const {isAuthenticated} = useAuth()
  return (
    <section className={`${sectionRevealClass} relative overflow-hidden border-t border-slate-900/10 bg-[#f8fbff] py-14 md:py-24 transition-colors duration-300 ease-out dark:border-blue-400/15 dark:bg-[#06101f]`}>
      <div className="pointer-events-none absolute left-1/2 -top-[6.25rem] h-[25rem] w-[56.25rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(37,99,235,0.1)_0%,transparent_70%)] dark:bg-[radial-gradient(ellipse,rgba(59,130,246,0.12)_0%,transparent_70%)]" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
          <div>
            <div className="mb-3.5 inline-flex items-center gap-1.5 rounded-full border border-blue-600/20 bg-blue-600/[0.07] px-3.5 py-1 transition-colors dark:border-blue-400/25 dark:bg-blue-600/10">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-200">
                Live Games
              </span>
            </div>
            <h2 className="m-0 mb-2 text-3xl md:text-4xl font-black leading-tight tracking-normal text-slate-900 transition-colors dark:text-white">
              Browse All Games
            </h2>
            <p className="m-0 max-w-[32.5rem] text-sm leading-relaxed text-slate-600 transition-colors dark:text-zinc-400">
              Pick your favourite and start playing instantly - no download needed.
            </p>
          </div>
          <Button asChild className={`${smoothCardClass} !h-auto rounded-full border border-slate-900/10 bg-white px-5 py-2.5 text-sm font-bold text-slate-900 shadow-[0_2px_16px_rgb(15_23_42_/_0.07)] hover:-translate-y-0.5 hover:bg-slate-100 dark:border-blue-400/20 dark:bg-[#0e1629] dark:text-white dark:hover:bg-white/[0.06]`} variant="outline">
            <Link to="/games">View All Games<ArrowRight className="size-3.5" strokeWidth={2.5} /></Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-5 min-[420px]:grid-cols-2 min-[760px]:grid-cols-3 min-[1024px]:grid-cols-4">
          {games.map((game) => (
            <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-900/10 bg-white bg-[linear-gradient(180deg,#ffffff_0%,#f0f5ff_100%)] shadow-[0_2px_16px_rgb(15_23_42_/_0.07)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_55px_rgb(15_23_42_/_0.18)] dark:border-blue-400/20 dark:bg-gradient-to-br dark:from-[#021020] dark:to-[#140540] dark:shadow-[0_4px_24px_rgb(0_0_0_/_0.4)] dark:hover:shadow-[0_22px_70px_rgb(96_165_250_/_0.22),0_10px_26px_rgb(37_99_235_/_0.16)]" key={game.id}>
              <span className={`absolute left-3 top-3 z-10 rounded-full px-3 py-1 text-xs font-black uppercase tracking-widest text-white shadow-lg ${gameTagStyles[game.tag]}`}>{game.tag}</span>
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-white/[0.06]">
                <img alt={game.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.08]" loading="lazy" src={gameImages[game.imageKey]} />
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="m-0 mb-1.5 text-base font-bold tracking-normal text-slate-900 transition-colors dark:text-white">{game.name}</h3>
                <p className="m-0 mb-4 line-clamp-2 text-xs leading-relaxed text-slate-600 opacity-80 transition-colors dark:text-zinc-400">{game.description}</p>
                <Button asChild className="mt-auto !h-auto w-full rounded-full bg-blue-600 py-2.5 text-sm font-bold text-white shadow-md shadow-blue-600/10 transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 dark:hover:bg-blue-500">
                  <Link to={`/games/${game.slug}`}><span>{isAuthenticated ? "Play Now":"Login to Play"}</span><ArrowRight className="h-[14px] w-[14px]" strokeWidth={2.5} /></Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GamesPreviewSection;
