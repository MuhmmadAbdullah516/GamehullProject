export type Prize = {
  label: string;
  value: number;
};

export type PrizeHistoryItem = {
  createdAt: Date;
  id: number;
  prize: Prize;
  type: "Free" | "Deposit";
};

export type PrizeHistoryProps = {
  history: PrizeHistoryItem[];
  show: boolean;
};

export type SpinNoticeProps = {
  countdown: number;
  show: boolean;
};

export type SpinStatsProps = {
  stats: Array<{ label: string; value: number | string }>;
};

export type SpinWheelCardProps = {
  countdown: number;
  depositAmount: number;
  depositProgress: number;
  depositSpins: number;
  isAuthenticated: boolean;
  onSpin: () => void;
  rotation: number;
  spinning: boolean;
  totalSpinsAvailable: number;
  usedToday: boolean;
};
