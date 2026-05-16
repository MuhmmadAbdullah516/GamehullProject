import { Link } from "react-router-dom";

const footerColumns = [
  {
    heading: "Games",
    links: [
      { label: "Fire Kirin", to: "/games" },
      { label: "Juwa", to: "/games" },
      { label: "Game Vault", to: "/games" },
      { label: "View All ->", to: "/games", featured: true },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Free Spin", to: "/free-spin" },
      { label: "Affiliate", to: "/affiliate" },
      { label: "About Us", to: "/" },
      { label: "Contact", to: "/" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", to: "/" },
      { label: "Terms", to: "/" },
      { label: "Responsible", to: "/" },
      { label: "Support", to: "/" },
    ],
  },
];

const bottomLinks = [
  { label: "Free Spin", to: "/free-spin" },
  { label: "Affiliate", to: "/affiliate" },
  { label: "Privacy", to: "/" },
  { label: "Terms", to: "/" },
];

function Footer() {
  return (
    <footer className="mt-auto w-full bg-footer-bg font-sans transition-colors duration-200 dark:bg-footer-dark-bg">
      <div className="h-px bg-[linear-gradient(90deg,transparent_0%,rgba(96,165,250,.5)_30%,rgba(168,85,247,.4)_60%,transparent_100%)]" />

      <div className="mx-auto w-full max-w-[1152px] px-6 pb-12 pt-14">
        <div className="flex flex-col gap-12">
          <div className="grid grid-cols-1 items-start gap-[clamp(32px,5vw,80px)] md:grid-cols-[1fr_auto]">
            <div className="flex max-w-[300px] flex-col gap-4">
              <Link
                className="flex cursor-pointer items-center gap-[10px] no-underline"
                to="/"
              >
                <div className="flex size-[42px] shrink-0 items-center justify-center rounded-full bg-primary shadow-[0_4px_12px_rgba(37,99,235,0.22)] transition-shadow duration-200 dark:shadow-[0_4px_12px_rgba(59,130,246,0.25)]">
                  <svg
                    fill="none"
                    height="22"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="22"
                  >
                    <rect height="12" rx="6" width="20" x="2" y="6" />
                    <line x1="8" x2="10" y1="12" y2="12" />
                    <line x1="9" x2="9" y1="11" y2="13" />
                    <circle cx="15" cy="11" fill="white" r="1" stroke="none" />
                    <circle cx="17" cy="13" fill="white" r="1" stroke="none" />
                  </svg>
                </div>
                <div className="flex flex-col leading-[1.15]">
                  <span className="text-[18px] font-extrabold tracking-[-.02em] text-text-heading transition-colors duration-200 dark:text-text-dark-heading">
                    GameHull
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[.1em] text-primary">
                    Play & Win
                  </span>
                </div>
              </Link>

              <p className="m-0 text-[13.5px] leading-[1.75] text-footer-text transition-colors duration-200 dark:text-footer-dark-text">
                Your trusted platform for premium gaming. Play, win, and
                withdraw with confidence.
              </p>

              <div className="inline-flex w-fit items-center gap-[7px] rounded-xl border border-tag-border bg-tag-bg px-3 py-[7px] transition-colors duration-200 dark:border-blue-500/30 dark:bg-blue-500/10">
                <svg
                  className="size-[14px] shrink-0 text-tag-text dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-[11px] font-semibold text-tag-text dark:text-blue-400">
                  Responsible Gaming
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-[28px_20px] min-[400px]:grid-cols-2 md:grid-cols-3 md:gap-[clamp(24px,4vw,64px)]">
              {footerColumns.map((column) => (
                <div className="flex flex-col gap-4" key={column.heading}>
                  <h3 className="m-0 text-[12px] font-bold uppercase tracking-[.1em] text-footer-heading transition-colors duration-200 dark:text-footer-dark-heading">
                    {column.heading}
                  </h3>
                  <nav className="flex flex-col gap-[11px]">
                    {column.links.map((link) => (
                      <Link
                        className={`cursor-pointer text-[13.5px] no-underline transition-colors duration-150 ${
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

      <div className="border-t border-footer-bottom-border px-6 py-[18px] transition-colors duration-200 dark:border-footer-dark-bottom-border">
        <div className="mx-auto flex w-full max-w-[1152px] flex-wrap items-center justify-between gap-3">
          <p className="m-0 text-[12px] text-footer-copy transition-colors duration-200 dark:text-footer-dark-link">
            {"\u00a9"} 2026 GameHull. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-1">
            {bottomLinks.map((link, index) => (
              <span className="flex items-center gap-1" key={link.label}>
                <Link
                  className="cursor-pointer rounded-full px-[10px] py-1 text-[12px] text-footer-link no-underline transition-colors duration-150 hover:bg-tag-bg hover:text-footer-text dark:text-footer-dark-link dark:hover:bg-tag-dark-bg dark:hover:text-white"
                  to={link.to}
                >
                  {link.label}
                </Link>
                {index < bottomLinks.length - 1 ? (
                  <span className="text-[11px] text-footer-copy transition-colors duration-200 dark:text-footer-dark-link">
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
