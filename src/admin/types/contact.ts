export type ContactMessageStatus = "Unread" | "Read" | "Replied";

export type ContactMessage = {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: ContactMessageStatus;
  date: string;
};
