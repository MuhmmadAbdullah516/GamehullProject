import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";

import DiscoverMore from "@/components/game/discover-more";
import RecentActivity from "@/components/game/recent-activity";
import { gameImages } from "@/data/game-assets";
import games from "@/data/games.json";
import type { GameCard, PlatformDetails } from "@/types/games";
import GameAccountPanel from "./game-detail/GameAccountPanel";
import GameDetailHero from "./game-detail/GameDetailHero";
import PlatformInfo from "./game-detail/PlatformInfo";

const platformDetails: PlatformDetails = {
  difficulty: "Intermediate",
  jackpot: "Progressive",
  payout: "96.5%",
  type: "Fish & Slots",
};

function GameDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const game = (games as GameCard[]).find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!game) {
    return <Navigate replace to="/games" />;
  }

  return (
    <main className="min-h-[calc(100vh-72px)] flex-grow bg-white text-slate-900 transition-colors dark:bg-[#080d1c] dark:text-slate-100">
      <GameDetailHero game={game} />
      <section className="mx-auto w-full max-w-5xl bg-white px-6 pb-20 transition-colors dark:bg-[#080d1c] md:pb-32">
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
          <GameAccountPanel key={game.slug} game={game} />
          <PlatformInfo details={platformDetails} />
        </div>
      </section>
      <RecentActivity gameName={game.name} />
      <DiscoverMore currentGameSlug={game.slug} gameImages={gameImages} games={games as GameCard[]} />
    </main>
  );
}

export default GameDetailPage;
