import { CreditCard, Gamepad2, Globe, Mail, MapPin, Shield, Zap } from "lucide-react";

export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "support@gamehull.com",
  },
  {
    icon: Globe,
    label: "Website",
    value: "gamehull.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Working Globally",
  },
];

export const supportTopics = [
  {
    description: "Issues with login or verification",
    icon: Zap,
    title: "Account Support",
  },
  {
    description: "Deposit and withdrawal inquiries",
    icon: CreditCard,
    title: "Payments",
  },
  {
    description: "Technical issues with games",
    icon: Gamepad2,
    title: "Game Support",
  },
  {
    description: "Reporting bugs or abuse",
    icon: Shield,
    title: "Security",
  },
];

export const faqItems = [
  {
    answer: "Most cashout requests are reviewed quickly, but timing can vary based on payment method and verification status.",
    question: "How long do cashouts take?",
  },
  {
    answer: "Our support team aims to respond as soon as possible. Please include your account details and a clear subject so we can help faster.",
    question: "How quickly do you respond to messages?",
  },
  {
    answer: "Deposit limits may vary by payment method and current account status. The deposit flow will show the available limits before payment.",
    question: "What are the deposit limits?",
  },
  {
    answer: "One account per player is recommended. Contact support before creating another account to avoid verification or access issues.",
    question: "Can I have multiple game accounts?",
  },
  {
    answer: "We use account controls, verification, and platform safeguards to help protect your information and gameplay activity.",
    question: "Is my account data secure?",
  },
];
