type Props = { status: string };

const GameStatusBadge = ({ status }: Props) => {
  const isAvailable = status.toLowerCase() === "available";
  return (
    <span
      className={`px-2.5 py-1 text-xs rounded-full font-medium ${
        isAvailable
          ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
          : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
      }`}
    >
      {isAvailable ? "Available" : "Maintenance"}
    </span>
  );
};

export default GameStatusBadge;
