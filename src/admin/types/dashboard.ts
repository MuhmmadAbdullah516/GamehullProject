import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";

export type AdminActivityStatus = "Completed" | "Active" | "Pending";

export interface AdminStat {
    label: string;
    value: string;
    icon: ComponentType<LucideProps>;
    color: string;
    bg: string;
}

export type AdminActivity = {
    id: number;
    user: string;
    action: string;
    time: string;
    status: AdminActivityStatus;
}