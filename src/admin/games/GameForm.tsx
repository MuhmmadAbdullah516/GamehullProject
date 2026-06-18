import { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import type { GameCard } from "@/types/games";
import { gameSchema } from "@/schemas/game-schema";
import type { GameFields } from "@/types/validation";
import GameCardPreview from "./components/GameCardPreview";
import GameFormInputs from "./components/GameFormInputs";

const GameForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams<{ id: string }>();
  const isEditMode = Boolean(id);
  const editingGame = location.state?.game as GameCard | undefined;

  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [tag, setTag] = useState<GameCard["tag"]>("NEW");
  const [description, setDescription] = useState("");
  const [imageKey, setImageKey] = useState<GameCard["imageKey"]>("juwa");
  const [status, setStatus] = useState("available");
  const [buttonText, setButtonText] = useState("Login To Play");
  const [error, setError] = useState("");

  useEffect(() => {
    if (isEditMode && !editingGame) { navigate("/admin/games"); return; }
    if (editingGame) {
      setName(editingGame.name); setSlug(editingGame.slug);
      setTag(editingGame.tag); setDescription(editingGame.description);
      setImageKey(editingGame.imageKey); setStatus(editingGame.status);
      setButtonText(editingGame.buttonText);
    }
  }, []);

  const handleNameChange = (val: string) => {
    setName(val);
    if (!isEditMode) {
      setSlug(val.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const dataToValidate: GameFields = { name, slug, tag, description, imageKey, status: status as "available" | "maintenance", buttonText };
    const result = gameSchema.safeParse(dataToValidate);
    if (!result.success) {
      setError(Object.values(result.error.flatten().fieldErrors).flat().find(Boolean) || "Please fix validation errors.");
      return;
    }
    const game: GameCard = {
      id: isEditMode ? editingGame!.id : Date.now(),
      name: name.trim(),
      slug: slug.trim().toLowerCase(),
      tag,
      description: description.trim(),
      imageKey,
      status,
      buttonText: buttonText.trim(),
    };
    navigate("/admin/games", { state: { action: isEditMode ? "edit" : "add", game } });
  };

  return (
    <div className="p-6 lg:p-8 space-y-6">
      <div className="flex items-center gap-4">
        <button type="button" onClick={() => navigate("/admin/games")} className="p-2.5 rounded-full hover:bg-white dark:hover:bg-slate-800 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all text-slate-500 cursor-pointer">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 font-montserrat">{isEditMode ? "Edit Game" : "Add New Game"}</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Games / {isEditMode ? `Edit — ${editingGame?.name}` : "New Platform"}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <GameFormInputs
          name={name} setName={setName}
          slug={slug} setSlug={setSlug}
          tag={tag} setTag={setTag}
          imageKey={imageKey} setImageKey={setImageKey}
          status={status} setStatus={setStatus}
          buttonText={buttonText} setButtonText={setButtonText}
          description={description} setDescription={setDescription}
          isEditMode={isEditMode}
          error={error}
          onSubmit={handleSubmit}
          onCancel={() => navigate("/admin/games")}
          handleNameChange={handleNameChange}
        />
        <div className="space-y-4">
          <GameCardPreview
            name={name}
            tag={tag}
            imageKey={imageKey}
            description={description}
            buttonText={buttonText}
          />
        </div>
      </div>
    </div>
  );
};

export default GameForm;
