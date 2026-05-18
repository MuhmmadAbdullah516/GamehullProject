
import { useEffect, useState } from "react";
import { ChevronLeft, Eye, EyeOff, User } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";

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
import DiscoverMore from "@/components/game/discover-more";
import RecentActivity from "@/components/game/recent-activity";
import { Button } from "@/components/ui/button";
import games from "@/data/games.json";
import type { GameCard, GameImageKey, PlatformDetails } from "@/types/games";

const platformDetails: PlatformDetails = {
  type: "Fish & Slots",
  payout: "96.5%",
  difficulty: "Intermediate",
  jackpot: "Progressive",
};

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

function GameDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [hasGameAccount, setHasGameAccount] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const game = (games as GameCard[]).find((item) => item.slug === slug);

  useEffect(() => {
    setHasGameAccount(false);
    setShowPassword(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  function copyAccountValue(value: string) {
    void navigator.clipboard?.writeText(value);
  }

  if (!game) {
    return <Navigate replace to="/games" />;
  }

  return (
    <main className="min-h-[calc(100vh-72px)] flex-grow bg-bg text-text transition-colors dark:bg-bg-dark dark:text-text-dark">
      <section className="relative overflow-hidden bg-bg py-[clamp(48px,6vw,80px)] pb-[clamp(32px,4vw,52px)] transition-colors dark:bg-bg-dark">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(37,99,235,0.05)_0%,transparent_70%)]" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
          <nav className="mb-[18px] flex items-center gap-1.5 text-[12px] text-text-dim dark:text-text-dark-dim">
            <Link className="font-medium text-primary hover:text-primary-hover" to="/">
              Home
            </Link>
            <ChevronLeft className="size-[10px] rotate-180" />
            <Link className="font-medium text-primary hover:text-primary-hover" to="/games">
              Games
            </Link>
            <ChevronLeft className="size-[10px] rotate-180" />
            <span>{game.name}</span>
          </nav>

          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
            <div className="shrink-0">
              <div className="group relative size-[140px] overflow-hidden rounded-[32px] border border-card-border shadow-card dark:border-card-dark-border dark:shadow-card-dark md:size-[180px] md:rounded-[40px]">
                <img
                  alt={game.name}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={gameImages[game.imageKey]}
                />
              </div>
            </div>

            <div className="text-center md:text-left">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-tag-border bg-tag-bg px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-primary transition-colors duration-200 dark:border-tag-dark-border dark:bg-tag-dark-bg dark:text-tag-dark-text">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-primary" />
                </span>
                {game.tag}
              </span>

              <h1 className="mb-4 text-[clamp(32px,5vw,48px)] font-black leading-[1.1] tracking-normal text-text-heading transition-colors duration-200 dark:text-text-dark-heading">
                {game.name}
              </h1>

              <p className="max-w-[560px] text-[15px] leading-relaxed text-text-body transition-colors duration-200 dark:text-text-dark-body md:text-base">
                {game.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl bg-bg px-6 pb-20 transition-colors dark:bg-bg-dark md:pb-32">
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
          <article className="rounded-[32px] border border-card-border bg-card-bg p-8 shadow-card transition-all duration-200 dark:border-card-dark-border dark:bg-card-dark-bg dark:shadow-card-dark md:p-10">
            <div className="mb-8 flex items-center gap-5">
              <div className="flex size-[48px] shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
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
                <div className="relative">
                  <label
                    className="mb-1.5 ml-1 block text-[11px] font-bold uppercase tracking-widest text-primary"
                    htmlFor="game-username"
                  >
                    Username
                  </label>
                  <div className="relative group">
                    <input
                      className="h-[56px] w-full rounded-2xl border border-border bg-bg-muted pl-5 pr-14 text-[15px] font-black text-text-heading outline-none transition-all focus:border-primary dark:border-border-dark dark:bg-bg-dark-muted dark:text-text-dark-heading"
                      id="game-username"
                      readOnly
                      type="text"
                      value="abdullah_gh"
                    />
                    <button
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 text-text-dim transition-colors hover:text-primary"
                      onClick={() => copyAccountValue("abdullah_gh")}
                      title="Copy Username"
                      type="button"
                    >
                      <svg
                        fill="none"
                        height="20"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="20"
                      >
                        <path
                          d="M8 16H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2m-6 12h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2Z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="relative">
                  <label
                    className="mb-1.5 ml-1 block text-[11px] font-bold uppercase tracking-widest text-primary"
                    htmlFor="game-password"
                  >
                    Password
                  </label>
                  <div className="relative group">
                    <input
                      className={`h-[56px] w-full rounded-2xl border border-border bg-bg-muted pl-5 pr-24 text-[15px] font-black text-text-heading outline-none transition-all focus:border-primary dark:border-border-dark dark:bg-bg-dark-muted dark:text-text-dark-heading ${
                        showPassword ? "tracking-normal" : "tracking-[0.3em]"
                      }`}
                      id="game-password"
                      readOnly
                      type={showPassword ? "text" : "password"}
                      value="gh_pass_123"
                    />
                    <div className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-1">
                      <button
                        className="p-2.5 text-text-dim transition-colors hover:text-primary"
                        onClick={() => setShowPassword((current) => !current)}
                        title="Toggle Visibility"
                        type="button"
                      >
                        {showPassword ? (
                          <EyeOff className="size-5" strokeWidth={2} />
                        ) : (
                          <Eye className="size-5" strokeWidth={2} />
                        )}
                      </button>
                      <button
                        className="p-2.5 text-text-dim transition-colors hover:text-primary"
                        onClick={() => copyAccountValue("gh_pass_123")}
                        title="Copy Password"
                        type="button"
                      >
                        <svg
                          fill="none"
                          height="20"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="20"
                        >
                          <path
                            d="M8 16H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2m-6 12h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2Z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-4">
                  <button
                    className="flex h-[52px] items-center justify-center gap-2 rounded-2xl border border-primary/20 bg-primary/10 text-[14px] font-bold text-primary transition-all hover:bg-primary/20"
                    type="button"
                  >
                    <svg
                      fill="none"
                      height="18"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                      width="18"
                    >
                      <path
                        d="m7 11 5-5m0 0 5 5m-5-5v12"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Cashin
                  </button>
                  <button
                    className="flex h-[52px] cursor-not-allowed items-center justify-center gap-2 rounded-2xl border border-border bg-bg-muted text-[14px] font-bold text-text-dim opacity-60 grayscale transition-all dark:border-border-dark"
                    disabled
                    type="button"
                  >
                    <svg
                      fill="none"
                      height="18"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                      width="18"
                    >
                      <path
                        d="m17 13-5 5m0 0-5-5m5-5v12"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Cashout
                  </button>
                </div>

                <a
                  className="mt-3 flex h-[52px] w-full items-center justify-center gap-2 rounded-2xl bg-primary text-[14px] font-black text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary-hover"
                  href="/games"
                >
                  <svg
                    fill="none"
                    height="18"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                    width="18"
                  >
                    <path
                      d="m14.752 11.168-3.197-2.132A1 1 0 0 0 10 9.87v4.263a1 1 0 0 0 1.555.832l3.197-2.132a1 1 0 0 0 0-1.664Z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Play Now
                </a>
              </div>
            ) : (
              <div className="space-y-6">
                <p className="text-[15px] leading-relaxed text-text-body transition-colors dark:text-text-dark-body">
                  Click the button below to instantly generate your{" "}
                  <strong className="text-text-heading dark:text-text-dark-heading">
                    {game.name}
                  </strong>{" "}
                  account.
                </p>

                <Button
                  className="!h-[52px] w-full rounded-2xl bg-primary text-[15px] font-bold text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary-hover active:scale-[0.98]"
                  onClick={() => setHasGameAccount(true)}
                  type="button"
                >
                  <svg
                    fill="none"
                    height="20"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    width="20"
                  >
                    <path
                      d="M12 4v16m8-8H4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Create Account Instantly
                </Button>
              </div>
            )}
          </article>

          <div className="space-y-6">
            <article className="rounded-[32px] border border-card-border bg-card-bg p-8 transition-all duration-200 dark:border-card-dark-border dark:bg-card-dark-bg md:p-10">
              <h2 className="mb-6 text-[17px] font-black tracking-normal text-text-heading transition-colors dark:text-text-dark-heading">
                Platform Details
              </h2>

              <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                <div>
                  <dt className="mb-1.5 text-[11px] font-bold uppercase tracking-widest text-text-dim transition-colors dark:text-text-dark-dim">
                      Type
                    </dt>
                  <dd className="text-[15px] font-black text-text-heading transition-colors dark:text-text-dark-heading">
                    {platformDetails.type}
                  </dd>
                </div>

                <div>
                  <dt className="mb-1.5 text-[11px] font-bold uppercase tracking-widest text-text-dim transition-colors dark:text-text-dark-dim">
                      Payout
                    </dt>
                  <dd className="text-[15px] font-black text-primary transition-colors">
                    {platformDetails.payout}
                  </dd>
                </div>

                <div>
                  <dt className="mb-1.5 text-[11px] font-bold uppercase tracking-widest text-text-dim transition-colors dark:text-text-dark-dim">
                      Difficulty
                    </dt>
                  <dd className="text-[15px] font-black text-text-heading transition-colors dark:text-text-dark-heading">
                    {platformDetails.difficulty}
                  </dd>
                </div>

                <div>
                  <dt className="mb-1.5 text-[11px] font-bold uppercase tracking-widest text-text-dim transition-colors dark:text-text-dark-dim">
                      Jackpot
                    </dt>
                  <dd className="text-[15px] font-black text-[#f59e0b] transition-colors">
                    {platformDetails.jackpot}
                  </dd>
                </div>
              </dl>
            </article>

            <article className="relative overflow-hidden rounded-[32px] border border-card-border bg-primary p-8 text-white shadow-card transition-all duration-200 dark:border-card-dark-border dark:bg-[linear-gradient(160deg,#021020_0%,#140540_100%)] dark:shadow-card-dark">
              <svg
                className="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 opacity-10"
                fill="currentColor"
                height="200"
                viewBox="0 0 24 24"
                width="200"
              >
                <path d="M12 2 2 7l10 5 10-5-10-5ZM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>

              <h4 className="relative z-10 mb-2 text-[17px] font-black">
                Safe Gaming
              </h4>
              <p className="relative z-10 text-[14px] leading-relaxed text-white/70">
                Always remember to set your limits. GameHull is committed to providing a
                secure and responsible gaming environment for everyone.
              </p>
            </article>
          </div>
        </div>
      </section>

      <RecentActivity gameName={game.name} />
      <DiscoverMore
        currentGameSlug={game.slug}
        gameImages={gameImages}
        games={games as GameCard[]}
      />
    </main>
  );
}

export default GameDetailPage;
