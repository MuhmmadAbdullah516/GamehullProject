function FreeSpinHero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-white bg-[linear-gradient(180deg,#ffffff_0%,#f0f5ff_100%)] py-12 pb-8 text-center transition-colors duration-300 ease-out dark:border-blue-400/15 dark:bg-[#080d1c] dark:bg-[radial-gradient(ellipse_85%_55%_at_50%_-5%,rgba(29,78,216,0.48)_0%,transparent_65%),linear-gradient(#080d1c,#080d1c)] md:py-20 md:pb-13">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-transparent" />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-600/20 bg-blue-600/[0.07] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#1D4ED8] dark:border-blue-400/25 dark:bg-blue-600/10 dark:!text-[#BFDBFE]">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          Daily Reward Available
        </div>
        <h1 className="mb-4 text-[clamp(32px,5vw,56px)] font-black leading-[1.1] tracking-normal text-[#0F172A] dark:!text-[#FFFFFF]">
          Free Daily <span className="text-[#2563EB] dark:!text-[#3B82F6]">Spin</span>
        </h1>
        <p className="mx-auto max-w-[600px] text-base leading-relaxed text-[#475569] dark:!text-[#A1A1AA] md:text-lg">
          Spin the wheel once every 24 hours to win free play credits, bonuses, and other rewards.
        </p>
      </div>
    </section>
  );
}

export default FreeSpinHero;
