import { Gamepad2 } from "lucide-react";
import { Link } from "react-router-dom";

type BrandLogoProps = {
  subtitle?: string;
};

function BrandLogo({ subtitle }: BrandLogoProps) {
  return (
    <Link className="group flex cursor-pointer items-center gap-3 no-underline" to="/">
      <div className="flex size-10.5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-[0_4px_12px_rgba(37,99,235,0.22)] transition-transform duration-200 group-hover:scale-105">
        <Gamepad2 className="size-6" strokeWidth={2} />
      </div>
      <span className="text-[19px] font-black leading-none tracking-[-.03em] text-slate-900 dark:text-slate-100">
        GameHull
        {subtitle ? <span className="block text-[10px] font-bold uppercase tracking-[.1em] text-blue-600">{subtitle}</span> : null}
      </span>
    </Link>
  );
}

export default BrandLogo;
