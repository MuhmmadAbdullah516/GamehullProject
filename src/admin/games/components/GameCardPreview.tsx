import { ArrowRight, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { GameCard } from "@/types/games";
import { gameImages, gameTagStyles } from "@/data/game-assets";

type Props = {
  name: string;
  tag: GameCard["tag"];
  imageKey: GameCard["imageKey"];
  description: string;
  buttonText: string;
};

const GameCardPreview = ({ name, tag, imageKey, description, buttonText }: Props) => {
  const currentImg = gameImages[imageKey];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-6">
      <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-5 font-montserrat">
        Dashboard Card Preview
      </p>
      <article className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-900/10 bg-white bg-[linear-gradient(180deg,#ffffff_0%,#f0f5ff_100%)] shadow-md dark:border-blue-400/20 dark:from-[#021020] dark:to-[#140540] dark:bg-gradient-to-br w-full max-w-[280px] mx-auto text-left">
        <span
          className={`absolute left-3 top-3 z-10 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white shadow-lg ${
            gameTagStyles[tag] || "bg-blue-600"
          }`}
        >
          {tag}
        </span>
        <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-white/[0.06] flex items-center justify-center">
          {currentImg ? (
            <img src={currentImg} alt={name} className="h-full w-full object-cover" />
          ) : (
            <Gamepad2 className="w-12 h-12 text-slate-400" />
          )}
        </div>
        <div className="flex flex-1 flex-col p-4">
          <h2 className="m-0 mb-1.5 text-sm font-bold tracking-normal text-slate-900 dark:text-white truncate">
            {name || "Game Title"}
          </h2>
          <p className="m-0 mb-4 line-clamp-2 text-xs leading-relaxed text-slate-600 dark:text-zinc-400 opacity-80 h-8">
            {description || "No description provided."}
          </p>
          <Button
            type="button"
            className="mt-auto h-9 w-full rounded-full bg-blue-600 py-1.5 text-xs font-bold text-white shadow-md shadow-blue-600/10 flex items-center justify-center gap-1.5 cursor-default pointer-events-none"
          >
            <span>{buttonText || "Play"}</span>
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
          </Button>
        </div>
      </article>
    </div>
  );
};

export default GameCardPreview;
