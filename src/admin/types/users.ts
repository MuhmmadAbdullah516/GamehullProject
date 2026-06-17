export type UserRole = "Admin" | "Player" | "Agent";
export type UserStatus = "Active" | "Banned" | "Pending";

export type AdminUser = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  joinDate: string;
  balance: string;
};
