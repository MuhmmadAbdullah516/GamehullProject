import { AppWindowMac, User, Wallet, Zap } from "lucide-react";

export const heroStats = [
  { label: "Casino Games", value: "60+" },
  { label: "Daily Jackpot", value: "$18,500", featured: true },
  { label: "Paid Out", value: "$2M+" },
  { label: "Happy Players", value: "50K+" },
];

export const affiliateStats = [
  { icon: Wallet, label: "Commission Rate", tone: "text-emerald-400", value: "5%" },
  { icon: Zap, label: "Payout Speed", tone: "text-[#f59e0b]", value: "Instant" },
  { icon: AppWindowMac, label: "Earning Potential", tone: "text-blue-600", value: "No Limit" },
  { icon: User, label: "Support Available", tone: "text-sky-400", value: "24/7" },
];

export const playerReviews = [
  ["James Wilson", "J", "Finally a platform that actually pays out. I've won over $1,200 this month alone."],
  ["Emily Davis", "E", "Clean UI and very easy to navigate. Everything works exactly as it should."],
  ["Joey Tribbiani", "J", "The graphics are better than any other site I've seen."],
  ["Amanda Reed", "A", "The support team helped me set up my account in minutes."],
  ["Robert Taylor", "R", "The rewards program is very generous."],
  ["Rachel Green", "R", "Security is top-tier. I feel safe depositing and withdrawing."],
  ["Tyler Johnson", "T", "Got my $320 withdrawal in 15 minutes flat."],
  ["David Smith", "D", "I love the variety of games. Fire Kirin and Juwa are my favorites."],
  ["Mike Ross", "M", "Best fish game site I've ever used."],
  ["Jessica Edwards", "J", "Deposit, play, and withdraw fast without waiting around."],
  ["Michelle Bailey", "M", "Automated deposits are a blessing every time."],
  ["Kayla Adams", "K", "The 24/7 support is actually 24/7."],
].map(([author, initial, quote]) => ({ author, initial, quote }));

export const reviewColumns = [
  [...playerReviews.slice(0, 4), ...playerReviews.slice(0, 4)],
  [...playerReviews.slice(4, 8), ...playerReviews.slice(4, 8)],
  [...playerReviews.slice(8, 12), ...playerReviews.slice(8, 12)],
];

export const faqItems = [
  ["How do I create an account?", 'Click "Sign Up", fill in your details, and your account is ready instantly.'],
  ["What payment methods do you accept?", "We accept Cash App, Venmo, Zelle, PayPal, and cryptocurrency."],
  ["How long do withdrawals take?", "Most withdrawals are processed within 10-20 minutes."],
  ["What games are available?", "We offer Fire Kirin, Juwa, Ultra Panda, Vegas Sweeps, Orion Stars, and more."],
  ["Is my money safe?", "Yes. Your funds are held securely and all transactions are encrypted."],
  ["How does the referral program work?", "Share your affiliate link and earn 5% commission automatically."],
].map(([question, answer]) => ({ answer, question }));
