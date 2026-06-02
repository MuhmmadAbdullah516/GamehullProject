import { ChevronRight, CircleDollarSign, Gamepad2, Layers, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <main className="flex-grow bg-[#080d1c] text-slate-100 transition-colors">
      <section className="relative overflow-hidden bg-white bg-[linear-gradient(180deg,#ffffff_0%,#f0f5ff_100%)] py-12 pb-8 transition-colors duration-300 ease-out dark:bg-[#080d1c] dark:bg-[radial-gradient(ellipse_85%_55%_at_50%_-5%,rgba(29,78,216,0.48)_0%,transparent_65%),linear-gradient(#080d1c,#080d1c)] md:py-20 md:pb-13">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
          <nav className="mb-4 flex items-center gap-1.5 text-xs text-text-dim dark:text-text-dark-dim" aria-label="Breadcrumb">
            <Link className="font-medium text-primary transition-colors hover:text-primary-hover" to="/">
              Home
            </Link>
            <ChevronRight className="size-2.5" strokeWidth={2.5} />
            <span className="font-medium">About</span>
          </nav>

          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-tag-border bg-tag-bg px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary transition-colors duration-200 dark:border-tag-dark-border dark:bg-tag-dark-bg dark:text-tag-dark-text">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              Our Mission
            </div>

            <h1 className="mb-4 text-4xl md:text-6xl font-black leading-tight tracking-tight text-white transition-colors duration-200">
              Redefining the <span className="text-primary">Gaming</span> experience
            </h1>

            <p className="max-w-150 text-base leading-relaxed text-text-dark-body transition-colors duration-200">
              GameHull is more than just a platform. It's a community dedicated to providing the most exciting, secure,
              and rewarding fish games and slots in the industry.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto mb-20 w-full max-w-5xl px-6 md:mb-32">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          <article className="group rounded-4xl border border-card-dark-border bg-card-dark-bg p-6 text-center transition-all duration-200 hover:shadow-lg hover:shadow-primary/5 md:p-8">
            <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-2xl bg-primary/10 transition-transform duration-300 group-hover:scale-110">
              <Users className="size-5 text-primary" strokeWidth={2} />
            </div>
            <p className="mb-1 text-2xl font-black text-white transition-colors md:text-3xl">
              50K+
            </p>
            <p className="text-xs font-bold uppercase tracking-widest text-text-dark-muted transition-colors">
              Active Players
            </p>
          </article>

          <article className="group rounded-4xl border border-card-dark-border bg-card-dark-bg p-6 text-center transition-all duration-200 hover:shadow-lg hover:shadow-primary/5 md:p-8">
            <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-2xl bg-primary/10 transition-transform duration-300 group-hover:scale-110">
              <CircleDollarSign className="size-5 text-primary" strokeWidth={2} />
            </div>
            <p className="mb-1 text-2xl font-black text-white transition-colors md:text-3xl">
              $1.2M+
            </p>
            <p className="text-xs font-bold uppercase tracking-widest text-text-dark-muted transition-colors">
              Total Payouts
            </p>
          </article>

          <article className="group rounded-4xl border border-card-dark-border bg-card-dark-bg p-6 text-center transition-all duration-200 hover:shadow-lg hover:shadow-primary/5 md:p-8">
            <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-2xl bg-primary/10 transition-transform duration-300 group-hover:scale-110">
              <Gamepad2 className="size-5 text-primary" strokeWidth={2} />
            </div>
            <p className="mb-1 text-2xl font-black text-white transition-colors md:text-3xl">
              13+
            </p>
            <p className="text-xs font-bold uppercase tracking-widest text-text-dark-muted transition-colors">
              Premium Games
            </p>
          </article>

          <article className="group rounded-4xl border border-card-dark-border bg-card-dark-bg p-6 text-center transition-all duration-200 hover:shadow-lg hover:shadow-primary/5 md:p-8">
            <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-2xl bg-primary/10 transition-transform duration-300 group-hover:scale-110">
              <Zap className="size-5 text-primary" strokeWidth={2} />
            </div>
            <p className="mb-1 text-2xl font-black text-white transition-colors md:text-3xl">
              99.9%
            </p>
            <p className="text-xs font-bold uppercase tracking-widest text-text-dark-muted transition-colors">
              System Uptime
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 pb-20 md:pb-32">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="space-y-12 lg:col-span-7">
            <section>
              <h2 className="mb-6 text-2xl font-black tracking-tight text-white transition-colors">
                Our Story
              </h2>
              <div className="space-y-6 text-base leading-relaxed text-text-dark-body transition-colors">
                <p>
                  Launched in 2024,{" "}
                  <strong className="text-white">GameHull</strong> was founded by a
                  team of gaming enthusiasts and technology experts who saw a gap in the online fish game market. We
                  wanted to create a platform that combines high-intensity gameplay with rock-solid security and
                  lightning-fast payouts.
                </p>
                <p>
                  Today, we serve a global community of players, offering a curated selection of the world's most
                  popular gaming platforms including Fire Kirin, Juwa, and Milky Way. Our goal is simple: to be the most
                  trusted and entertaining home for digital gaming.
                </p>
              </div>
            </section>

            <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <article className="rounded-4xl border border-card-dark-border bg-card-dark-bg p-8 transition-colors">
                <h3 className="mb-3 text-lg font-bold text-white">Fair Play</h3>
                <p className="text-sm leading-relaxed text-text-dark-body">
                  Every game on our platform uses certified RNG technology to ensure 100% fair results for every player,
                  every time.
                </p>
              </article>

              <article className="rounded-4xl border border-card-dark-border bg-card-dark-bg p-8 transition-colors">
                <h3 className="mb-3 text-lg font-bold text-white">
                  Instant Payouts
                </h3>
                <p className="text-sm leading-relaxed text-text-dark-body">
                  We understand that when you win, you want your money. Our team processes withdrawals 24/7 with zero
                  hidden fees.
                </p>
              </article>
            </section>
          </div>

          <aside className="space-y-8 lg:col-span-5">
            <section className="relative overflow-hidden rounded-4xl border border-white/5 bg-[linear-gradient(160deg,#021020_0%,#140540_100%)] p-10 text-white shadow-2xl shadow-primary/30 transition-all duration-200">
              <Layers className="absolute right-0 top-0 size-75 -translate-y-1/4 translate-x-1/4 text-white opacity-10" fill="currentColor" strokeWidth={0} />

              <h3 className="relative z-10 mb-4 text-2xl font-black text-white transition-colors">
                Join the Hull
              </h3>
              <p className="relative z-10 mb-8 text-base leading-relaxed text-white/80 transition-colors">
                Ready to experience the next level of online gaming? Create your account today and start winning.
              </p>

              <div className="relative z-10 space-y-4">
                <Link
                  className="flex w-full cursor-pointer items-center justify-center rounded-full bg-primary py-4 text-base font-black text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary-hover active:scale-95"
                  to="/register"
                >
                  Create Account
                </Link>

                <Link
                  className="flex w-full cursor-pointer items-center justify-center rounded-full border-2 border-white/20 bg-transparent py-4 text-base font-black text-white transition-all hover:bg-white/5"
                  to="/login"
                >
                  Login
                </Link>
              </div>
            </section>

            <section className="rounded-4xl border border-card-dark-border bg-card-dark-bg p-8 transition-colors">
              <h3 className="mb-6 text-base font-bold text-white">Our Values</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <span className="mt-1 size-2 shrink-0 rounded-full bg-primary" />
                  <p className="text-sm text-text-dark-body">Transparency in all transactions.</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="mt-1 size-2 shrink-0 rounded-full bg-primary" />
                  <p className="text-sm text-text-dark-body">Security of user data and funds.</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="mt-1 size-2 shrink-0 rounded-full bg-primary" />
                  <p className="text-sm text-text-dark-body">Continuous platform innovation.</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="mt-1 size-2 shrink-0 rounded-full bg-primary" />
                  <p className="text-sm text-text-dark-body">24/7 player support and care.</p>
                </div>
              </div>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
