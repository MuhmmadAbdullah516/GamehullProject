import FreeSpinHero from "./free-spin/FreeSpinHero";
import PrizeHistory from "./free-spin/PrizeHistory";
import SpinNotice from "./free-spin/SpinNotice";
import SpinStats from "./free-spin/SpinStats";
import SpinWheelCard from "./free-spin/SpinWheelCard";
import { useFreeSpin } from "./free-spin/use-free-spin";

function FreeSpinPage() {
  const spin = useFreeSpin();

  return (
    <main className="flex-grow bg-white text-[#0F172A] transition-colors dark:bg-[#080d1c] dark:!text-[#F1F5F9]">
      <FreeSpinHero />
      <div className="mx-auto mt-8 w-[calc(100%_-_48px)] max-w-285 pb-12 max-sm:w-[calc(100%_-_20px)] md:pb-16">
        <SpinNotice countdown={spin.countdown} show={spin.isAuthenticated && spin.freeSpinUsedToday} />
        <SpinWheelCard
          countdown={spin.countdown}
          depositAmount={spin.depositAmount}
          depositProgress={spin.depositProgress}
          depositSpins={spin.depositSpins}
          isAuthenticated={spin.isAuthenticated}
          onSpin={spin.handleSpin}
          rotation={spin.rotation}
          spinning={spin.spinning}
          totalSpinsAvailable={spin.totalSpinsAvailable}
          usedToday={spin.freeSpinUsedToday}
        />
        <SpinStats stats={spin.stats} />
        <PrizeHistory history={spin.history} show={spin.isAuthenticated} />
      </div>
    </main>
  );
}

export default FreeSpinPage;
