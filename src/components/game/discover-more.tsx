import { Link } from "react-router-dom";

import type { DiscoverMoreProps } from "@/types/games";

function DiscoverMore({ currentGameSlug, gameImages, games }: DiscoverMoreProps) {
  const discoverGames = games
    .filter((game) => game.slug !== currentGameSlug)
    .slice(0, 3);

  return (
    <section className="mx-auto w-full max-w-5xl bg-white px-6 pb-20 transition-colors dark:bg-[#080d1c] md:pb-32">
      <h2 className="mb-8 text-2xl font-black tracking-normal text-slate-900 transition-colors dark:text-white">
        Discover More
      </h2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {discoverGames.map((game) => (
          <Link
            className="group block overflow-hidden rounded-4xl border border-slate-900/10 bg-white shadow-[0_2px_16px_rgb(15_23_42_/_0.07)] transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_24px_55px_rgb(15_23_42_/_0.18)] dark:border-blue-400/20 dark:bg-[#0e1629] dark:shadow-[0_4px_24px_rgb(0_0_0_/_0.4)] dark:hover:shadow-[0_22px_70px_rgb(96_165_250_/_0.22),0_10px_26px_rgb(37_99_235_/_0.16)]"
            key={game.slug}
            to={`/games/${game.slug}`}
          >
            <div className="relative aspect-square overflow-hidden">
              <img
                alt={game.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                src={gameImages[game.imageKey]}
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-xs font-bold uppercase tracking-widest text-white">
                  Play Now
                </span>
              </div>
            </div>

            <div className="p-5">
              <h3 className="text-[15px] font-black text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white">
                {game.name}
              </h3>
              <p className="mt-1 text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-white/55">
                Fish & Slots
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default DiscoverMore;
