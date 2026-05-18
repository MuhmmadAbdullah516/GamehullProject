import { Link } from "react-router-dom";

import type { DiscoverMoreProps } from "@/types/games";

function DiscoverMore({ currentGameSlug, gameImages, games }: DiscoverMoreProps) {
  const discoverGames = games
    .filter((game) => game.slug !== currentGameSlug)
    .slice(0, 3);

  return (
    <section className="mx-auto w-full max-w-5xl bg-bg px-6 pb-20 transition-colors dark:bg-bg-dark md:pb-32">
      <h2 className="mb-8 text-2xl font-black tracking-normal text-text-heading transition-colors dark:text-text-dark-heading">
        Discover More
      </h2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {discoverGames.map((game) => (
          <Link
            className="group block overflow-hidden rounded-[28px] border border-card-border bg-card-bg shadow-card transition-all duration-300 hover:translate-y-[-4px] hover:shadow-card-hover dark:border-card-dark-border dark:bg-card-dark-bg dark:shadow-card-dark dark:hover:shadow-card-dark-hover"
            key={game.slug}
            to={`/games/${game.slug}`}
          >
            <div className="relative aspect-square overflow-hidden">
              <img
                alt={game.name}
                className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
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
              <h3 className="text-[15px] font-black text-text-heading transition-colors group-hover:text-primary dark:text-text-dark-heading">
                {game.name}
              </h3>
              <p className="mt-1 text-[11px] font-bold uppercase tracking-widest text-text-muted dark:text-text-dark-muted">
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
