import { Link } from "react-router-dom";

import type { RegisterTermsProps } from "@/types/auth-register";

function RegisterTerms({ accepted, error, onChange }: RegisterTermsProps) {
  return (
    <>
      <label className="flex items-start gap-2.5 pt-1 text-xs font-normal leading-5 text-zinc-400">
        <input
          aria-invalid={Boolean(error)}
          checked={accepted}
          className="mt-0.5 size-3.5 shrink-0 rounded border-blue-300/30 bg-white accent-blue-500"
          name="terms"
          onChange={onChange}
          type="checkbox"
        />
        <span>
          I agree to the <Link className="font-bold text-blue-500 hover:text-blue-400" to="/terms">Terms of Service</Link>{" "}
          and <Link className="font-bold text-blue-500 hover:text-blue-400" to="/privacy">Privacy Policy</Link>.
          I confirm I am 18+ and play responsibly.
        </span>
      </label>
      {error ? <p className="-mt-2 text-xs font-normal leading-5 text-red-300">{error}</p> : null}
    </>
  );
}

export default RegisterTerms;
