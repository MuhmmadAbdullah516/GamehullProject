export type UserReview = {
  id: number;
  userName: string;
  userEmail: string;
  review: string;
  stars: number;
  status: "Published" | "Pending";
  date: string;
}