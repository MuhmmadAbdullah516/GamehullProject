import  type { LucideProps } from "lucide-react";

export interface AdminActivityStatus  = "Completed" | "Active" | "Pending";

export type AdminStat {
    label:string;
    value:string;
    icon:ComponentType<LucideProps>;
    color:string;
    bg:string;
    
}

export type AdminActivity = {
    id:number;
    user:string;
    action:string;
    time:string;
    status:AdminActivityStatus
}