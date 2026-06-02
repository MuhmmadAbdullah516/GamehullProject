import type { WalletMethodOption } from "@/types/cashout";

export const walletMethods: WalletMethodOption[] = [
  { label: "CashApp", value: "cashapp" },
  { label: "Chime", value: "chime" },
  { label: "Crypto (BTC/LTC)", value: "crypto" },
  { label: "Venmo", value: "venmo" },
];

export const cashoutSteps = [
  {
    description: "Go to the Wallets tab and add your preferred cashout method. This is where your payments will be sent.",
    title: "Set Up Your Wallet",
  },
  {
    description: "Select the game you want to cashout from using the searchable dropdown menu.",
    title: "Go to Your Game Page",
  },
  {
    description: 'On the game page, click the "Cash Out" button, enter your amount, and select your wallet.',
    title: "Submit Your Request",
  },
  {
    description: "Monitor your request status on the Transactions page.",
    title: "Track Your Progress",
  },
];
