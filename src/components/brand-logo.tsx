import { Gamepad2 } from "lucide-react";
import { Link } from "react-router-dom";

import type { BrandLogoProps } from "@/types/components";

function BrandLogo({ subtitle }: BrandLogoProps) {
  return (
    <Link
      className="group flex cursor-pointer items-center gap-3 no-underline"
      onClick={() => window.scrollTo({ left: 0, top: 0, behavior: "smooth" })}
      to="/"
    >
      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-[0_4px_12px_rgba(37,99,235,0.22)] transition-transform duration-200 group-hover:scale-105">
        <Gamepad2 className="size-6" strokeWidth={2} />
      </div>
      <span className="text-xl font-black leading-none tracking-tight text-slate-900 dark:text-slate-100">
        GameHull
        {subtitle ? <span className="block text-xs font-bold uppercase tracking-widest text-blue-600">{subtitle}</span> : null}
      </span>
    </Link>
  );
}

export default BrandLogo;
