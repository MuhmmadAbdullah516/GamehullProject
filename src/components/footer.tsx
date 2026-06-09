import { Shield } from "lucide-react";
import BrandLogo from "@/components/brand-logo"
import { Link } from "react-router-dom";

const footerColumns = [
  {
    heading: "Games",
    links: [
      { label: "Fire Kirin", to: "/games/fire-kirin" },
      { label: "Juwa", to: "/games/juwa" },
      { label: "Game Vault", to: "/games/game-vault" },
      { label: "View All ->", to: "/games", featured: true },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Free Spin", to: "/free-spin" },
      { label: "Affiliate", to: "/affiliate" },
      { label: "About Us", to: "/about" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", to: "/privacy" },
      { label: "Terms", to: "/terms" },
      { label: "Responsible", to: "/responsible" },
      { label: "Support", to: "/support" },
    ],
  },
];

const bottomLinks = [
  { label: "Free Spin", to: "/free-spin" },
  { label: "Affiliate", to: "/affiliate" },
  { label: "Privacy", to: "/privacy" },
  { label: "Terms", to: "/terms" },
];

function Footer() {
  return (
    <footer className="mt-auto w-full bg-footer-bg font-sans transition-colors duration-200 dark:bg-footer-dark-bg">
      <div className="h-px bg-[linear-gradient(90deg,transparent_0%,rgba(96,165,250,.5)_30%,rgba(168,85,247,.4)_60%,transparent_100%)]" />

      <div className="mx-auto w-full max-w-6xl px-6 pb-12 pt-14">
        <div className="flex flex-col gap-12">
          <div className="grid grid-cols-1 items-start gap-8 md:gap-20 md:grid-cols-[1fr_auto]">
            <div className="flex max-w-[18.75rem] flex-col gap-4">
           <BrandLogo subtitle="Play & Win" />

              <p className="m-0 text-sm leading-relaxed text-footer-text transition-colors duration-200 dark:text-footer-dark-text">
                Your trusted platform for premium gaming. Play, win, and
                withdraw with confidence.
              </p>

              <div className="inline-flex w-fit items-center gap-2 rounded-xl border border-tag-border bg-tag-bg px-3 py-2 transition-colors duration-200 dark:border-blue-500/30 dark:bg-blue-500/10">
                <Shield
                  className="size-3.5 shrink-0 text-tag-text dark:text-blue-400"
                  strokeWidth={2}
                />
                <span className="text-xs font-semibold text-tag-text dark:text-blue-400">
                  Responsible Gaming
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-x-3 gap-y-7 min-[400px]:gap-x-5 md:gap-x-16">
              {footerColumns.map((column) => (
                <div className="flex flex-col gap-4" key={column.heading}>
                  <h3 className="m-0 text-xs font-bold uppercase tracking-widest text-footer-heading transition-colors duration-200 dark:text-footer-dark-heading">
                    {column.heading}
                  </h3>
                  <nav className="flex flex-col gap-3">
                    {column.links.map((link) => (
                      <Link
                        className={`cursor-pointer text-sm no-underline transition-colors duration-150 ${
                          link.featured
                            ? "font-semibold text-footer-heading hover:text-primary-hover dark:text-footer-dark-heading dark:hover:text-primary-dark-hover"
                            : "text-footer-link hover:text-footer-text dark:text-footer-dark-link dark:hover:text-white"
                        }`}
                        key={link.label}
                        to={link.to}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-footer-bottom-border px-6 py-4 transition-colors duration-200 dark:border-footer-dark-bottom-border">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3">
          <p className="m-0 text-xs text-footer-copy transition-colors duration-200 dark:text-footer-dark-link">
            {"\u00a9"} 2026 GameHull. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-1">
            {bottomLinks.map((link, index) => (
              <span className="flex items-center gap-1" key={link.label}>
                <Link
                  className="cursor-pointer rounded-full px-2.5 py-1 text-xs text-footer-link no-underline transition-colors duration-150 hover:bg-tag-bg hover:text-footer-text dark:text-footer-dark-link dark:hover:bg-tag-dark-bg dark:hover:text-white"
                  to={link.to}
                >
                  {link.label}
                </Link>
                {index < bottomLinks.length - 1 ? (
                  <span className="text-xs text-footer-copy transition-colors duration-200 dark:text-footer-dark-link">
                    {"\u00b7"}
                  </span>
                ) : null}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
