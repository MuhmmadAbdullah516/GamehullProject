import { Edit, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { GameCard } from "@/types/games";
import { gameImages } from "@/data/game-assets";
import GameStatusBadge from "./GameStatusBadge";

type Props = {
  game: GameCard;
  onEdit: () => void;
  onDelete: () => void;
};

const tagStyles: Record<GameCard["tag"], string> = {
  HOT: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  NEW: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  TOP: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
};

const GameTableRow = ({ game, onEdit, onDelete }: Props) => {
  const imgSrc = gameImages[game.imageKey];

  return (
    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
      <td className="px-5 py-3">
        <div className="flex items-center gap-3">
          {imgSrc ? (
            <img src={imgSrc} alt={game.name} className="w-10 h-10 rounded-lg object-cover bg-slate-100 dark:bg-slate-800 shrink-0" />
          ) : (
            <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 font-bold shrink-0">
              {game.name.charAt(0)}
            </div>
          )}
          <div>
            <p className="font-semibold text-gray-900 dark:text-gray-100 text-sm">{game.name}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">/{game.slug}</p>
          </div>
        </div>
      </td>
      <td className="px-5 py-3 text-sm">
        <span className={`px-2 py-0.5 text-xs rounded font-bold ${tagStyles[game.tag]}`}>
          {game.tag}
        </span>
      </td>
      <td className="px-5 py-3 text-sm text-gray-500 dark:text-gray-400 max-w-xs truncate" title={game.description}>
        {game.description}
      </td>
    
      <td className="px-5 py-3">
        <GameStatusBadge status={game.status} />
      </td>
      <td className="px-5 py-3 text-right">
        <div className="flex items-center justify-end gap-1.5">
          <Button variant="ghost" size="icon" className="h-7 w-7 text-gray-500 hover:text-blue-600 cursor-pointer" onClick={onEdit}>
            <Edit className="w-3.5 h-3.5" />
          </Button>
          <Button variant="ghost" size="icon" className="h-7 w-7 text-gray-500 hover:text-red-600 cursor-pointer" onClick={onDelete}>
            <Trash className="w-3.5 h-3.5" />
          </Button>
        
        </div>
      </td>
    </tr>
  );
};

export default GameTableRow;
