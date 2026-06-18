import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
  "w-full px-4 py-3 bg-gray-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 dark:text-slate-200 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600";
const labelClass =
  "block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 font-montserrat";
const triggerClass =
  "group w-full px-4 py-3 bg-gray-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-full text-sm text-left text-slate-700 dark:text-slate-200 transition-all flex items-center justify-between gap-2 hover:border-blue-400/60 dark:hover:border-blue-500/40 focus:outline-none focus:ring-2 focus:ring-blue-500/40 cursor-pointer";

/* ── Reusable custom dropdown ── */
type SelectOption<T extends string> = { label: string; value: T };

function AdminSelect<T extends string>({
  id,
  value,
  options,
  onChange,
}: {
  id?: string;
  value: T;
  options: SelectOption<T>[];
  onChange: (val: T) => void;
}) {
  const [open, setOpen] = useState(false);
  const selected = options.find((o) => o.value === value);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <button id={id} type="button" className={triggerClass}>
          <span>{selected?.label ?? value}</span>
          <ChevronDown
            className={`w-4 h-4 shrink-0 transition-all duration-200 text-slate-400 group-hover:text-blue-400 ${
              open ? "rotate-180 text-blue-400" : ""
            }`}
          />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        sideOffset={6}
        className="min-w-[var(--radix-dropdown-menu-trigger-width)]"
      >
        {options.map((opt) => (
          <DropdownMenuItem
            key={opt.value}
            onClick={() => {
              onChange(opt.value);
              setOpen(false);
            }}
            className="flex items-center justify-between gap-3 px-3 py-2"
          >
            <span>{opt.label}</span>
            {opt.value === value && (
              <Check className="w-3.5 h-3.5 text-blue-500 shrink-0" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

/* ── Tag options ── */
const TAG_OPTIONS: SelectOption<GameCard["tag"]>[] = [
  { label: "NEW", value: "NEW" },
  { label: "HOT", value: "HOT" },
  { label: "TOP", value: "TOP" },
];

/* ── Status options ── */
const STATUS_OPTIONS: SelectOption<string>[] = [
  { label: "Available", value: "available" },
  { label: "Maintenance", value: "maintenance" },
];

/* ── Image asset options ── */
const IMAGE_OPTIONS: SelectOption<GameCard["imageKey"]>[] = Object.keys(
  gameImages,
).map((k) => ({ label: k, value: k as GameCard["imageKey"] }));

/* ── Main component ── */
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

        {/* Row 1 — Name + Slug */}
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

        {/* Row 2 — Tag + Image Asset + Status */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label htmlFor="tag" className={labelClass}>
              Tag
            </label>
            <AdminSelect
              id="tag"
              value={tag}
              options={TAG_OPTIONS}
              onChange={setTag}
            />
          </div>
          <div>
            <label htmlFor="imageKey" className={labelClass}>
              Image Asset
            </label>
            <AdminSelect
              id="imageKey"
              value={imageKey}
              options={IMAGE_OPTIONS}
              onChange={setImageKey}
            />
          </div>
          <div>
            <label htmlFor="status" className={labelClass}>
              Status
            </label>
            <AdminSelect
              id="status"
              value={status}
              options={STATUS_OPTIONS}
              onChange={setStatus}
            />
          </div>
        </div>

        {/* Button CTA */}
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

        {/* Description */}
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
            className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 dark:text-slate-200 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600 resize-none"
          />
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-700">
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            className="rounded-full px-6 py-5 cursor-pointer"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-5 cursor-pointer"
          >
            {isEditMode ? "Save Changes" : "Create Game"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default GameFormInputs;
