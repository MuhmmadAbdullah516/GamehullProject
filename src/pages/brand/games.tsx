import { useEffect, useState } from "react";
import axios from "axios";
import { ArrowRight, ChevronLeft, Zap } from "lucide-react";
import { Link } from "react-router-dom";

import cashMachineImage from "@/assets/games/cash-machine.svg";
import fireKirinImage from "@/assets/games/fire-kirin.svg";
import gameVaultImage from "@/assets/games/game-vault.svg";
import goldenDragonImage from "@/assets/games/golden-dragon.svg";
import juwaImage from "@/assets/games/juwa.webp";
import luckyTigerImage from "@/assets/games/lucky-tiger.svg";
import milkyWayImage from "@/assets/games/milky-way.svg";
import orionStarsImage from "@/assets/games/orion-stars.webp";
import pandaMasterImage from "@/assets/games/pandamaster.svg";
import riverSweepsImage from "@/assets/games/river-sweeps.svg";
import starCasinoImage from "@/assets/games/star-casino.svg";
import ultraPandaImage from "@/assets/games/ultra-panda.webp";
import vegasSweepsImage from "@/assets/games/vegas-sweeps.webp";
import { Button } from "@/components/ui/button";
import gamesDataUrl from "@/data/games.json?url";
import { useAuth } from "@/hooks/auth/use-auth";
import type { GameCard, GameImageKey } from "@/types/games";

const gameImages: Record<GameImageKey, string> = {
  "cash-machine": cashMachineImage,
  "fire-kirin": fireKirinImage,
  "game-vault": gameVaultImage,
  "golden-dragon": goldenDragonImage,
  juwa: juwaImage,
  "lucky-tiger": luckyTigerImage,
  "milky-way": milkyWayImage,
  "orion-stars": orionStarsImage,
  pandamaster: pandaMasterImage,
  "river-sweeps": riverSweepsImage,
  "star-casino": starCasinoImage,
  "ultra-panda": ultraPandaImage,
  "vegas-sweeps": vegasSweepsImage,
};

const tagStyles: Record<GameCard["tag"], string> = {
  TOP: "bg-[#f59e0b]",
  HOT: "bg-[#ff3045]",
  NEW: "bg-[#10b981]",
};

function GamePage() {
  const [games, setGames] = useState<GameCard[]>([]);
  const { isAuthenticated } = useAuth();

  function handlePlayNowClick() {
    window.location.reload();
  }

  useEffect(() => {
    async function loadGames() {
      try {
        const response = await axios.get<GameCard[]>(gamesDataUrl);
        setGames(response.data);
      } catch (error) {
        console.error("Failed to load games data", error);
      }
    }

    loadGames();
  }, []);

  return (
    <div className="min-h-[calc(100vh-72px)] bg-[linear-gradient(180deg,#ffffff_0%,#f0f5ff_100%)] text-text transition-[background-color,color] duration-300 dark:bg-[radial-gradient(ellipse_85%_55%_at_50%_-5%,rgba(29,78,216,0.48)_0%,transparent_65%),linear-gradient(#080d1c,#080d1c)] dark:text-text-dark">
      <section className="relative overflow-hidden border-b border-border-DEFAULT bg-bg py-[clamp(48px,6vw,80px)] pb-[clamp(32px,4vw,52px)] transition-colors duration-200 dark:border-border-dark dark:bg-bg-dark">
        <div className="pointer-events-none absolute left-1/2 top-0 h-full w-full -translate-x-1/2 bg-[linear-gradient(180deg,#ffffff_0%,#f0f5ff_100%)] dark:bg-[radial-gradient(ellipse_85%_55%_at_50%_-5%,rgba(29,78,216,0.48)_0%,transparent_65%),linear-gradient(#080d1c,#080d1c)]" />
        <div className="pointer-events-none absolute left-1/2 top-[-80px] h-[350px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(37,99,235,0.15)_0%,transparent_70%)] dark:bg-[radial-gradient(ellipse,rgba(59,130,246,0.2)_0%,transparent_70%)]" />

        <div className="relative z-10 mx-auto w-full max-w-[1152px] px-6">
          <nav className="mb-[18px] flex items-center gap-1.5 text-[12px] text-text-dim dark:text-text-dark-dim">
              <Link
                className="font-medium text-primary no-underline transition-colors hover:text-primary-hover"
                to="/"
              >
                Home
              </Link>
              <ChevronLeft className="size-[10px] rotate-180" strokeWidth={2.5} />
              <span className="font-medium">
                Games
              </span>
          </nav>

          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <div className="mb-[14px] inline-flex items-center gap-1.5 rounded-full border border-tag-border bg-tag-bg px-3.5 py-1 transition-colors dark:border-tag-dark-border dark:bg-tag-dark-bg">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-tag-text dark:text-tag-dark-text">
                  {games.length || 13} Games Available
                </span>
              </div>

              <h1 className="m-0 mb-2 text-[clamp(26px,4vw,42px)] font-black leading-[1.1] tracking-normal text-text-heading transition-colors dark:text-text-dark-heading">
                All Games
              </h1>

              <p className="m-0 max-w-[480px] text-[14px] font-normal leading-relaxed text-text-body transition-colors dark:text-text-dark-body">
               Pick your favourite platform and start playing instantly — no download needed. New games added every week.
              </p>
            </div>

            {isAuthenticated ? (
              <Button
                className="!h-auto w-fit rounded-full bg-primary px-8 !py-3.5 text-[15px] font-bold text-white shadow-[0_4px_18px_rgba(37,99,235,0.22)] transition-all hover:-translate-y-0.5 hover:bg-primary-hover dark:shadow-[0_4px_18px_rgba(59,130,246,0.25)]"
                onClick={handlePlayNowClick}
                type="button"
              >
                <Zap className="h-[15px] w-[15px] fill-white" />
                Play Now
              </Button>
            ) : (
              <Button
                asChild
                className="!h-auto w-full rounded-full bg-primary px-8 !py-3.5 text-[15px] font-bold text-white shadow-[0_4px_18px_rgba(37,99,235,0.22)] transition-all hover:-translate-y-0.5 hover:bg-primary-hover dark:shadow-[0_4px_18px_rgba(59,130,246,0.25)] sm:w-auto"
              >
                <Link to="/register">
                  <Zap className="size-[15px] fill-white" />
                  Play Now - Join Free
                </Link>
              </Button>
            )}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-border-DEFAULT bg-bg py-[clamp(56px,7vw,96px)] transition-colors duration-200 dark:border-border-dark dark:bg-bg-dark">
        <div className="pointer-events-none absolute left-1/2 top-[-100px] h-[400px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(37,99,235,0.1)_0%,transparent_70%)] dark:bg-[radial-gradient(ellipse,rgba(59,130,246,0.12)_0%,transparent_70%)]" />
        <div className="relative z-10 mx-auto w-full max-w-[1152px] px-6">
          <div className="grid grid-cols-1 gap-5 min-[420px]:grid-cols-2 min-[700px]:grid-cols-3 min-[1024px]:grid-cols-4">
            {games.map((game) => (
              <article
                key={game.id}
                className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-card-border bg-gradient-to-b from-white to-[#f0f5ff] shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover dark:border-card-dark-border dark:bg-gradient-to-br dark:from-[#021020] dark:to-[#140540] dark:shadow-card-dark dark:hover:shadow-card-dark-hover"
              >
                <span
                  className={`absolute left-3 top-3 z-10 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white shadow-lg ${tagStyles[game.tag]}`}
                >
                  {game.tag}
                </span>

                <div className="aspect-[4/3] w-full overflow-hidden bg-bg-muted dark:bg-bg-dark-muted">
                  <img
                    alt={game.name}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.08]"
                    loading="lazy"
                    src={gameImages[game.imageKey]}
                  />
                </div>

                <div className="flex flex-1 flex-col p-4">
                  <h2 className="m-0 mb-1.5 text-[16px] font-bold tracking-normal text-text-heading transition-colors dark:text-text-dark-heading">
                    {game.name}
                  </h2>

                  <p className="m-0 mb-4 line-clamp-2 text-[12.5px] leading-relaxed text-text-body opacity-80 transition-colors dark:text-text-dark-body">
                    {game.description}
                  </p>

                  <Button
                    asChild
                    className="mt-auto !h-auto w-full rounded-full bg-primary py-2.5 text-[14px] font-bold text-white shadow-md shadow-primary/10 transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/20 dark:hover:bg-primary-dark-hover"
                  >
                    <Link to={`/games/${game.slug}`}>
                      <span>{isAuthenticated ? "Play Now" : "Login To Play"}</span>
                      <ArrowRight className="size-3.5" strokeWidth={2.5} />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
export default GamePage;
