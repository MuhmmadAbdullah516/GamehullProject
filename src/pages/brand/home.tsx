import { useState } from "react";

import games from "@/data/games.json";
import type { GameCard } from "@/types/games";
import AffiliatePreviewSection from "./home/AffiliatePreviewSection";
import FaqSection from "./home/FaqSection";
import GamesPreviewSection from "./home/GamesPreviewSection";
import HomeHero from "./home/HomeHero";
import ReviewsSection from "./home/ReviewsSection";

function HomePage() {
  const featuredGames = (games as GameCard[]).slice(0, 8);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  function handleFaqToggle(index: number) {
    setOpenFaqIndex((current) => (current === index ? null : index));
  }

  return (
    <main className="flex-grow bg-white text-slate-900 transition-colors dark:bg-[#080d1c] dark:text-slate-100">
      <HomeHero />
      <GamesPreviewSection games={featuredGames} />
      <ReviewsSection />
      <AffiliatePreviewSection />
      <FaqSection onToggle={handleFaqToggle} openIndex={openFaqIndex} />
    </main>
  );
}

export default HomePage;
