import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { GameCard } from "@/types/games";
import { gameImages } from "@/data/game-assets";

type Props = {
  name: string;
  setName: (val: string) => void;
  slug: string;
  setSlug: (val: string) => void;
  tag: GameCard["tag"];
  setTag: (val: GameCard["tag"]) => void;
  imageKey: GameCard["imageKey"];
  setImageKey: (val: GameCard["imageKey"]) => void;
  status: string;
  setStatus: (val: string) => void;
  buttonText: string;
  setButtonText: (val: string) => void;
  description: string;
  setDescription: (val: string) => void;
  isEditMode: boolean;
  error: string;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
  handleNameChange: (val: string) => void;
};

const inputClass =
  "w-full px-4 py-3 bg-gray-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:text-slate-200 transition-all";
const labelClass =
  "block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 font-montserrat";

const GameFormInputs = ({
  name,
  slug,
  setSlug,
  tag,
  setTag,
  imageKey,
  setImageKey,
  status,
  setStatus,
  buttonText,
  setButtonText,
  description,
  setDescription,
  isEditMode,
  error,
  onSubmit,
  onCancel,
  handleNameChange,
}: Props) => {
  return (
    <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-6 sm:p-8">
      <h2 className="text-base font-bold text-gray-800 dark:text-gray-100 mb-1 font-montserrat">
        Game Specifications
      </h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
        Define metadata, visual identifiers, and tags.
      </p>
      <form onSubmit={onSubmit} className="space-y-5">
        {error && (
          <div className="p-4 text-sm text-red-600 bg-red-50 dark:bg-red-950/30 dark:text-red-400 rounded-xl border border-red-100 dark:border-red-900/30">
            {error}
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className={labelClass}>
              Game Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="e.g. Orion Stars"
              value={name}
              onChange={(e) => handleNameChange(e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="slug" className={labelClass}>
              Slug
            </label>
            <input
              id="slug"
              type="text"
              placeholder="orion-stars"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className={inputClass}
              disabled={isEditMode}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label htmlFor="tag" className={labelClass}>
              Tag
            </label>
            <div className="relative">
              <select
                id="tag"
                value={tag}
                onChange={(e) => setTag(e.target.value as GameCard["tag"])}
                className={`${inputClass} appearance-none pr-10 dark:bg-slate-900 cursor-pointer`}
              >
                <option value="NEW">NEW</option>
                <option value="HOT">HOT</option>
                <option value="TOP">TOP</option>
              </select>
              <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
            </div>
          </div>
          <div>
            <label htmlFor="imageKey" className={labelClass}>
              Image Asset
            </label>
            <div className="relative">
              <select
                id="imageKey"
                value={imageKey}
                onChange={(e) => setImageKey(e.target.value as GameCard["imageKey"])}
                className={`${inputClass} appearance-none pr-10 dark:bg-slate-900 cursor-pointer`}
              >
                {Object.keys(gameImages).map((k) => (
                  <option key={k} value={k}>
                    {k}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
            </div>
          </div>
          <div>
            <label htmlFor="status" className={labelClass}>
              Status
            </label>
            <div className="relative">
              <select
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className={`${inputClass} appearance-none pr-10 dark:bg-slate-900 cursor-pointer`}
              >
                <option value="available">Available</option>
                <option value="maintenance">Maintenance</option>
              </select>
              <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="buttonText" className={labelClass}>
            Button Call-To-Action
          </label>
          <input
            id="buttonText"
            type="text"
            placeholder="Login To Play"
            value={buttonText}
            onChange={(e) => setButtonText(e.target.value)}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="description" className={labelClass}>
            Description
          </label>
          <textarea
            id="description"
            rows={3}
            placeholder="Brief summary of game theme and gameplay features..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={`${inputClass} resize-none`}
          />
        </div>
        <div className="flex justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-700">
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            className="rounded-xl px-6 cursor-pointer"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-8 cursor-pointer"
          >
            {isEditMode ? "Save Changes" : "Create Game"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default GameFormInputs;
