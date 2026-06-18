import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Search, Filter, Plus, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import type { GameCard } from "@/types/games";
import gamesData from "@/data/games.json";
import GameTableRow from "./components/GameTableRow";
import GamePagination from "./components/GamePagination";

const ITEMS_PER_PAGE = 10;

const Games = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [games, setGames] = useState<GameCard[]>(gamesData as GameCard[]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [gameToDelete, setGameToDelete] = useState<GameCard | null>(null);
  const processedRef = useRef(false);

  useEffect(() => {
    if (processedRef.current) return;
    const state = location.state as { action?: string; game?: GameCard } | null;
    if (!state?.action || !state?.game) return;
    processedRef.current = true;

    if (state.action === "add") {
      setGames((prev) => [state.game!, ...prev]);
      toast.success(`${state.game.name} has been created successfully.`);
    } else if (state.action === "edit") {
      setGames((prev) => prev.map((g) => g.id === state.game!.id ? state.game! : g));
      toast.success(`${state.game.name} has been updated successfully.`);
    }
    window.history.replaceState({}, "");
  }, [location.state]);

  useEffect(() => { setCurrentPage(1); }, [searchTerm]);

  const handleDelete = (game: GameCard) => {
    setGameToDelete(game);
  };

  const handleConfirmDelete = () => {
    if (!gameToDelete) return;
    setGames((prev) => prev.filter((g) => g.id !== gameToDelete.id));
    toast.success(`${gameToDelete.name} has been deleted successfully.`);
    setGameToDelete(null);
  };

  const filteredGames = games.filter(
    (g) =>
      g.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      g.slug.toLowerCase().includes(searchTerm.toLowerCase()) ||
      g.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      g.tag.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  const totalPages = Math.ceil(filteredGames.length / ITEMS_PER_PAGE);
  const paginatedGames = filteredGames.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <div className="p-4 max-w-7xl mx-auto space-y-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div>
          <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100 font-montserrat">Games Management</h1>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            Manage your brand's gaming catalog — {games.length} total platforms.
          </p>
        </div>
        <Button onClick={() => navigate("/admin/games/new")} className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-5 py-5 flex items-center gap-2 cursor-pointer text-sm shadow-lg shadow-blue-500/20">
          <Plus className="w-4 h-4" /> Add New Game
        </Button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-3 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row gap-3 justify-between items-center">
        <div className="relative w-full sm:max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input type="text" placeholder="Search by name, slug, tag..." value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:text-gray-200 placeholder:text-slate-400 dark:placeholder:text-slate-600"
          />
        </div>
        <Button variant="outline" className="flex items-center gap-2 border-gray-200 dark:border-gray-700 dark:text-gray-300 cursor-pointer text-sm">
          <Filter className="w-4 h-4" /> Filters
        </Button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-700">
              <tr>
                {["Game Info", "Tag", "Description",  "Status", "Actions"].map((h) => (
                  <th key={h} className={`px-5 py-2.5 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider ${h === "Actions" ? "text-right" : ""}`}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {paginatedGames.map((game) => (
                <GameTableRow key={game.id} game={game}
                  onEdit={() => navigate(`/admin/games/${game.id}/edit`, { state: { game } })}
                  onDelete={() => handleDelete(game)}
                />
              ))}
            </tbody>
          </table>
        </div>
        <GamePagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={filteredGames.length}
          itemsOnPage={paginatedGames.length}
          onPageChange={setCurrentPage}
        />
      </div>

      {/* Delete Confirmation Dialog */}
      <Dialog open={!!gameToDelete} onOpenChange={(open) => { if (!open) setGameToDelete(null); }}>
        <DialogContent className="max-w-md p-6 rounded-2xl">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400 mb-4">
              <Trash className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1 font-montserrat">Confirm Deletion</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
              Are you sure you want to delete the game <span className="font-semibold text-gray-800 dark:text-gray-200">{gameToDelete?.name}</span>? This action cannot be undone.
            </p>
            <div className="flex gap-3 w-full">
              <Button variant="outline" onClick={() => setGameToDelete(null)} className="flex-1 rounded-full cursor-pointer">
                Cancel
              </Button>
              <Button onClick={handleConfirmDelete} className="flex-1 bg-red-600 hover:bg-red-700 text-white rounded-full cursor-pointer">
                Delete
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Games;
