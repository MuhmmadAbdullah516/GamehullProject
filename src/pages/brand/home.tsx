import { useState } from "react";
import {
  AppWindowMac,
  ArrowRight,
  Check,
  User,
  Wallet,
  Zap,
} from "lucide-react";
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
import games from "@/data/games.json";
import type { GameCard, GameImageKey } from "@/types/games";

const heroStats = [
  { label: "Casino Games", value: "60+" },
  { label: "Daily Jackpot", value: "$18,500", featured: true },
  { label: "Paid Out", value: "$2M+" },
  { label: "Happy Players", value: "50K+" },
];

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
  HOT: "bg-[#ff3045]",
  NEW: "bg-[#10b981]",
  TOP: "bg-[#f59e0b]",
};

const playerReviews = [
  {
    author: "James Wilson",
    initial: "J",
    quote: "Finally a platform that actually pays out. I've won over $1,200 this month alone.",
  },
  {
    author: "Emily Davis",
    initial: "E",
    quote: "Clean UI and very easy to navigate. Everything works exactly as it should.",
  },
  {
    author: "Joey Tribbiani",
    initial: "J",
    quote: "The graphics are better than any other site I've seen. It feels like a real casino experience.",
  },
  {
    author: "Amanda Reed",
    initial: "A",
    quote: "The support team helped me set up my account in minutes. Super friendly and fast response.",
  },
  {
    author: "Robert Taylor",
    initial: "R",
    quote: "The rewards program is very generous. I get daily bonuses just for logging in.",
  },
  {
    author: "Rachel Green",
    initial: "R",
    quote: "Security is top-tier. I feel safe depositing and withdrawing on GameHull.",
  },
  {
    author: "Tyler Johnson",
    initial: "T",
    quote: "Got my $320 withdrawal in 15 minutes flat. Other platforms take days.",
  },
  {
    author: "David Smith",
    initial: "D",
    quote: "I love the variety of games. Fire Kirin and Juwa are my favorites.",
  },
  {
    author: "Mike Ross",
    initial: "M",
    quote: "Best fish game site I've ever used. The payout speed is unmatched.",
  },
  {
    author: "Jessica Edwards",
    initial: "J",
    quote: "The whole system is automated. Deposit, play, and withdraw fast without waiting around.",
  },
  {
    author: "Michelle Bailey",
    initial: "M",
    quote: "Automated deposits are a blessing. Pay, play, win, repeat. Simple and smooth every time.",
  },
  {
    author: "Kayla Adams",
    initial: "K",
    quote: "The 24/7 support is actually 24/7. I got quick help exactly when I needed it.",
  },
];

const reviewColumns = [
  [...playerReviews.slice(0, 4), ...playerReviews.slice(0, 4)],
  [...playerReviews.slice(4, 8), ...playerReviews.slice(4, 8)],
  [...playerReviews.slice(8, 12), ...playerReviews.slice(8, 12)],
];

const affiliateStats = [
  {
    icon: Wallet,
    label: "Commission Rate",
    tone: "text-emerald-400",
    value: "5%",
  },
  { icon: Zap, label: "Payout Speed", tone: "text-[#f59e0b]", value: "Instant" },
  {
    icon: AppWindowMac,
    label: "Earning Potential",
    tone: "text-primary",
    value: "No Limit",
  },
  { icon: User, label: "Support Available", tone: "text-sky-400", value: "24/7" },
];

const faqItems = [
  {
    answer:
      'Click "Sign Up" at the top of the page. Fill in your name, email, and password. Your account is ready instantly - no waiting, no approvals.',
    question: "How do I create an account?",
  },
  {
    answer:
      "We accept Cash App, Venmo, Zelle, PayPal, and cryptocurrency. All payment methods are processed automatically with no manual steps.",
    question: "What payment methods do you accept?",
  },
  {
    answer:
      "Most withdrawals are processed within 10-20 minutes. We have one of the fastest payout systems in the industry - no waiting days for your money.",
    question: "How long do withdrawals take?",
  },
  {
    answer:
      "We offer Fire Kirin, Juwa, Ultra Panda, Vegas Sweeps, Orion Stars, Game Vault, Golden Dragon and many more. New games are added regularly.",
    question: "What games are available?",
  },
  {
    answer:
      "Yes. Your funds are held securely and all transactions are encrypted. We use industry-standard security protocols to protect your account at all times.",
    question: "Is my money safe?",
  },
  {
    answer:
      "Share your unique affiliate link. When someone signs up and plays using your link, you earn 5% commission on their activity automatically, with no caps.",
    question: "How does the referral program work?",
  },
];

function HomePage() {
  const featuredGames = (games as GameCard[]).slice(0, 8);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <main className="flex-grow bg-bg text-text transition-colors dark:bg-bg-dark dark:text-text-dark">
      <section className="smooth-section relative overflow-hidden bg-gradient-to-b from-white to-[#f0f5ff] px-6 pb-0 pt-[80px] transition-colors duration-300 ease-out dark:bg-[#080d1c] dark:bg-[radial-gradient(ellipse_85%_55%_at_50%_-5%,rgba(29,78,216,0.48)_0%,transparent_65%),linear-gradient(#080d1c,#080d1c)]">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_0%,rgba(37,99,235,0.16)_0%,transparent_70%)] dark:bg-[radial-gradient(ellipse_70%_55%_at_50%_0%,rgba(37,99,235,0.36)_0%,transparent_70%)]" />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-[720px] flex-col items-center text-center">
          <div className="mb-[28px] inline-flex items-center gap-2 rounded-full border border-tag-border bg-tag-bg px-[18px] py-[7px] text-[13px] font-semibold text-tag-text shadow-card transition-colors dark:border-tag-dark-border dark:bg-tag-dark-bg dark:text-tag-dark-text">
            <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(74,222,128,.7)]" />
            50,000+ players online worldwide
          </div>

          <h1 className="mb-[20px] max-w-[760px] text-[clamp(38px,6vw,70px)] font-black leading-[1.05] tracking-normal text-text-heading transition-colors dark:text-text-dark-heading">
            Play. Win.
            <span className="block bg-gradient-to-r from-[#1d4ed8] to-[#6d28d9] bg-clip-text text-transparent dark:from-[#60a5fa] dark:to-[#a78bfa]">
              Cash Out Instantly.
            </span>
          </h1>

          <p className="mx-auto mb-[40px] max-w-[500px] text-[17px] leading-[1.65] text-text-muted transition-colors dark:text-text-dark-muted">
            The fastest-paying online casino. 60+ games, real jackpots, and instant
            withdrawals with no hassle and no waiting.
          </p>

          <div className="mb-[64px] flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              className="smooth-card !h-12 rounded-full bg-primary px-7 text-[15px] font-bold text-white shadow-[0_14px_30px_rgba(37,99,235,0.28)] hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-[0_18px_38px_rgba(37,99,235,0.34)]"
            >
              <Link to="/games">
                <Zap className="size-4 fill-white" />
                Play Now
              </Link>
            </Button>

            <Button
              asChild
              className="smooth-card !h-12 rounded-full border border-border-DEFAULT bg-transparent px-7 text-[15px] font-bold text-text-heading hover:-translate-y-0.5 hover:bg-bg-muted dark:border-border-dark dark:text-text-dark-heading dark:hover:bg-bg-dark-muted"
              variant="outline"
            >
              <Link to="/games">
                Browse Games
                <ArrowRight className="size-4" strokeWidth={2.5} />
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative z-10 -mx-6 border-t border-border-DEFAULT bg-card-bg transition-colors dark:border-border-dark dark:bg-card-dark-bg">
          <div className="mx-auto grid w-full max-w-[900px] grid-cols-2 transition-colors md:grid-cols-4">
            {heroStats.map((stat) => (
              <div
                className="border-border-DEFAULT p-[22px_16px] text-center transition-colors dark:border-border-dark md:border-r md:last:border-r-0"
                key={stat.label}
              >
                <p
                  className={`text-[24px] font-black leading-none ${
                    stat.featured
                      ? "text-[#f59e0b]"
                      : "text-text-heading dark:text-text-dark-heading"
                  }`}
                >
                  {stat.value}
                </p>
                <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-text-muted dark:text-text-dark-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="smooth-section relative overflow-hidden border-t border-border-DEFAULT bg-[#f8fbff] py-[clamp(56px,7vw,96px)] transition-colors duration-300 ease-out dark:border-border-dark dark:bg-[#06101f]">
        <div className="pointer-events-none absolute left-1/2 top-[-100px] h-[400px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(37,99,235,0.1)_0%,transparent_70%)] dark:bg-[radial-gradient(ellipse,rgba(59,130,246,0.12)_0%,transparent_70%)]" />

        <div className="relative z-10 mx-auto w-full max-w-[1152px] px-6">
          <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
            <div>
              <div className="mb-[14px] inline-flex items-center gap-1.5 rounded-full border border-tag-border bg-tag-bg px-3.5 py-1 transition-colors dark:border-tag-dark-border dark:bg-tag-dark-bg">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-tag-text dark:text-tag-dark-text">
                  Live Games
                </span>
              </div>

              <h2 className="m-0 mb-2 text-[clamp(26px,4vw,38px)] font-black leading-[1.1] tracking-normal text-text-heading transition-colors dark:text-text-dark-heading">
                Browse All Games
              </h2>

              <p className="m-0 max-w-[520px] text-[14px] leading-relaxed text-text-body transition-colors dark:text-text-dark-body">
                Pick your favourite and start playing instantly - no download needed.
              </p>
            </div>

            <Button
              asChild
              className="smooth-card !h-auto rounded-full border border-border-DEFAULT bg-card-bg px-5 py-2.5 text-[13px] font-bold text-text-heading shadow-card hover:-translate-y-0.5 hover:bg-bg-muted dark:border-card-dark-border dark:bg-card-dark-bg dark:text-text-dark-heading dark:hover:bg-bg-dark-muted"
              variant="outline"
            >
              <Link to="/games">
                View All Games
                <ArrowRight className="size-3.5" strokeWidth={2.5} />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-5 min-[420px]:grid-cols-2 min-[760px]:grid-cols-3 min-[1024px]:grid-cols-4">
            {featuredGames.map((game) => (
              <article
                className="smooth-card group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-card-border bg-gradient-to-b from-card-bg to-bg-muted shadow-card hover:-translate-y-1.5 hover:shadow-card-hover dark:border-card-dark-border dark:bg-gradient-to-br dark:from-[#021020] dark:to-[#140540] dark:shadow-card-dark dark:hover:shadow-card-dark-hover"
                key={game.id}
              >
                <span
                  className={`absolute left-3 top-3 z-10 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white shadow-lg ${tagStyles[game.tag]}`}
                >
                  {game.tag}
                </span>

                <div className="aspect-[4/3] w-full overflow-hidden bg-bg-muted dark:bg-bg-dark-muted">
                  <img
                    alt={game.name}
                    className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                    loading="lazy"
                    src={gameImages[game.imageKey]}
                  />
                </div>

                <div className="flex flex-1 flex-col p-4">
                  <h3 className="m-0 mb-1.5 text-[16px] font-bold tracking-normal text-text-heading transition-colors dark:text-text-dark-heading">
                    {game.name}
                  </h3>

                  <p className="m-0 mb-4 line-clamp-2 text-[12.5px] leading-relaxed text-text-body opacity-80 transition-colors dark:text-text-dark-body">
                    {game.description}
                  </p>

                  <Button
                    asChild
                    className="smooth-card mt-auto !h-auto w-full rounded-full bg-primary py-2.5 text-[14px] font-bold text-white shadow-md shadow-primary/10 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/20 dark:hover:bg-primary-dark-hover"
                  >
                    <Link to={`/games/${game.slug}`}>
                      <span>Play Now</span>
                      <ArrowRight className="size-3.5" strokeWidth={2.5} />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="smooth-section relative overflow-hidden border-t border-border-DEFAULT bg-[#f4f7ff] py-[clamp(56px,7vw,96px)] transition-colors duration-300 ease-out dark:border-border-dark dark:bg-[linear-gradient(180deg,#080d1c_0%,#140530_100%)]">
        <div className="pointer-events-none absolute right-[-80px] top-[-80px] size-[380px] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.08)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(168,85,247,0.12)_0%,transparent_70%)]" />
        <div className="pointer-events-none absolute left-0 right-0 top-0 z-[2] h-[100px] bg-gradient-to-b from-[#f4f7ff] to-transparent dark:from-[#080d1c]" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-[2] h-[100px] bg-gradient-to-t from-[#f4f7ff] to-transparent dark:from-[#140530]" />

        <div className="relative z-10 mx-auto w-full max-w-[1152px] px-6">
          <div className="mb-[clamp(32px,4vw,52px)] text-center">
            <div className="mb-[14px] inline-flex items-center gap-1.5 rounded-full border border-tag-border bg-tag-bg px-3.5 py-1 transition-colors dark:border-tag-dark-border dark:bg-tag-dark-bg">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-tag-text dark:text-tag-dark-text">
                Player Reviews
              </span>
            </div>

            <h2 className="m-0 text-[clamp(28px,4vw,40px)] font-black leading-tight text-text-heading transition-colors dark:text-text-dark-heading">
              What Our Players Say
            </h2>

            <p className="mt-3 text-[14px] text-text-body transition-colors dark:text-text-dark-body">
              Join thousands of satisfied players who trust GameHull.
            </p>
          </div>

          <div className="grid max-h-[480px] grid-cols-1 gap-4 overflow-hidden md:grid-cols-3">
            {reviewColumns.map((column, columnIndex) => (
              <div
                className={columnIndex === 0 ? "overflow-hidden" : "hidden overflow-hidden md:block"}
                key={`review-column-${columnIndex}`}
              >
                <div
                  className={`flex flex-col gap-[14px] hover:[animation-play-state:paused] ${
                    columnIndex === 0
                      ? "animate-review-scroll-1"
                      : columnIndex === 1
                        ? "animate-review-scroll-2"
                        : "animate-review-scroll-3"
                  }`}
                >
                  {column.map((review, reviewIndex) => (
                    <article
                      className="smooth-card rounded-[18px] border border-card-border bg-card-bg p-[18px] shadow-card dark:border-card-dark-border dark:bg-[linear-gradient(135deg,#021020_0%,#140540_100%)] dark:shadow-card-dark"
                      key={`${review.author}-${reviewIndex}`}
                    >
                      <div className="mb-[10px] flex gap-[2px] text-[#f59e0b]">
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <svg
                            className="size-3 fill-current"
                            key={starIndex}
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      <p className="mb-[14px] text-[13px] leading-[1.7] text-text-body transition-colors dark:text-text-dark-body">
                        "{review.quote}"
                      </p>

                      <div className="flex items-center gap-[10px]">
                        <div className="flex size-[34px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#1d4ed8] to-[#6d28d9] text-[13px] font-bold text-white">
                          {review.initial}
                        </div>
                        <div>
                          <p className="text-[13px] font-bold text-text-heading transition-colors dark:text-text-dark-heading">
                            {review.author}
                          </p>
                          <p className="text-[11px] text-text-dim transition-colors dark:text-text-dark-dim">
                            Player
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="smooth-section relative overflow-hidden border-t border-border-DEFAULT bg-[#f8fbff] py-[clamp(56px,7vw,96px)] transition-colors duration-300 ease-out dark:border-border-dark dark:bg-[#06101f]">
        <div className="pointer-events-none absolute right-[-100px] top-1/2 hidden size-[480px] -translate-y-1/2 rounded-full border border-border-DEFAULT dark:block dark:border-border-dark" />
        <div className="pointer-events-none absolute right-[-55px] top-1/2 hidden size-[300px] -translate-y-1/2 rounded-full border border-border-DEFAULT dark:block dark:border-border-dark" />

        <div className="relative z-10 mx-auto grid w-full max-w-[1152px] gap-[clamp(32px,5vw,72px)] px-6 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="flex flex-col gap-[22px]">
            <div className="mb-[18px] inline-flex w-fit self-start whitespace-nowrap items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-400">
              <Wallet className="size-[13px]" strokeWidth={2.5} />
              Affiliate Program
            </div>

            <h2 className="max-w-[470px] text-[clamp(26px,3.5vw,42px)] font-black leading-[1.15] tracking-normal text-text-heading transition-colors dark:text-text-dark-heading">
              Earn <span className="text-emerald-400">5% Commission</span>
              <br />
              on Every Referral
            </h2>

            <p className="max-w-[420px] text-[14.5px] leading-[1.75] text-text-body transition-colors dark:text-text-dark-body">
              Join our affiliate program and earn unlimited commissions. No limits,
              instant payouts, lifetime tracking. Share your link and get paid forever.
            </p>

            <ul className="space-y-3">
              {[
                "Instant commission payouts",
                "Lifetime referral tracking",
                "No limit on earnings",
              ].map((item) => (
                <li
                  className="flex items-center gap-3 text-[14px] text-text-body dark:text-text-dark-body"
                  key={item}
                >
                  <span className="flex size-[22px] shrink-0 items-center justify-center rounded-full border border-emerald-500/25 bg-emerald-500/10 text-emerald-400">
                    <Check className="size-3" strokeWidth={2.5} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <Button
              asChild
              className="smooth-card mt-8 !h-12 w-fit self-start whitespace-nowrap rounded-full bg-emerald-500 px-7 text-[14px] font-bold text-white shadow-[0_14px_30px_rgba(16,185,129,0.25)] hover:-translate-y-0.5 hover:bg-emerald-400 hover:shadow-[0_18px_42px_rgba(16,185,129,0.34)]"
            >
              <Link to="/affiliate">
                Become an Affiliate
                <ArrowRight className="size-4" strokeWidth={2.5} />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-[14px] min-[400px]:grid-cols-2">
            {affiliateStats.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  className="smooth-card group flex flex-col gap-[14px] rounded-[20px] border border-card-border bg-card-bg p-[22px_20px] shadow-card hover:-translate-y-1 hover:shadow-card-hover dark:border-card-dark-border dark:bg-[linear-gradient(135deg,#021020_0%,#140540_100%)] dark:shadow-card-dark dark:hover:shadow-card-dark-hover"
                  key={item.label}
                >
                  <div className="smooth-icon flex size-10 items-center justify-center rounded-full border border-tag-border bg-tag-bg group-hover:scale-105 dark:border-tag-dark-border dark:bg-tag-dark-bg">
                    <Icon
                      className={`size-[18px] ${item.tone}`}
                      strokeWidth={1.8}
                    />
                  </div>
                  <div>
                    <p className="text-[clamp(22px,2.5vw,28px)] font-black leading-[1.1] text-text-heading transition-colors dark:text-text-dark-heading">
                      {item.value}
                    </p>
                    <p className="mt-1 text-[12px] font-medium text-text-dim transition-colors dark:text-text-dark-dim">
                      {item.label}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="smooth-section relative overflow-hidden border-t border-border-DEFAULT bg-[#f4f7ff] py-[clamp(56px,7vw,96px)] transition-colors duration-300 ease-out dark:border-border-dark dark:bg-[linear-gradient(180deg,#10032a_0%,#080d1c_100%)]">
        <div className="pointer-events-none absolute left-1/2 top-[-100px] h-[400px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(37,99,235,0.08)_0%,transparent_70%)] dark:bg-[radial-gradient(ellipse,rgba(37,99,235,0.12)_0%,transparent_70%)]" />

        <div className="relative z-10 mx-auto w-full max-w-[720px] px-6">
          <div className="mb-12 text-center">
            <h2 className="text-[clamp(24px,3.5vw,38px)] font-black leading-[1.15] text-text-heading transition-colors dark:text-text-dark-heading">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-[14px] text-text-body transition-colors dark:text-text-dark-body">
              Got questions? We've got answers.
            </p>
          </div>

          <div className="divide-y divide-border-DEFAULT dark:divide-border-dark">
            {faqItems.map((item, index) => (
              <div key={item.question}>
                <button
                  className="group flex w-full cursor-pointer items-center justify-between gap-4 bg-transparent py-5 text-left text-[15px] font-semibold text-text-heading transition-colors duration-200 ease-out dark:text-text-dark-heading"
                  onClick={() =>
                    setOpenFaqIndex(openFaqIndex === index ? null : index)
                  }
                  type="button"
                >
                  <span>{item.question}</span>
                  <span className="smooth-icon flex size-7 shrink-0 items-center justify-center rounded-full border border-tag-border bg-tag-bg text-primary group-hover:scale-105 dark:border-tag-dark-border dark:bg-tag-dark-bg">
                    <svg
                      className={`transition-transform duration-200 ${
                        openFaqIndex === index ? "rotate-45" : "rotate-0"
                      }`}
                      fill="none"
                      height="14"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                      width="14"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>

                <div
                  className="faq-answer"
                  data-open={openFaqIndex === index ? "true" : "false"}
                >
                  <div className="faq-answer-inner">
                    <p className="pb-5 pr-12 text-[14px] leading-7 text-text-body transition-colors duration-200 ease-out dark:text-text-dark-body">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
