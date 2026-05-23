import { Link } from "react-router-dom";
import type { ChangeEvent } from "react";

type RegisterTermsProps = {
  accepted: boolean;
  error?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

function RegisterTerms({ accepted, error, onChange }: RegisterTermsProps) {
  return (
    <>
      <label className="flex items-start gap-2.5 pt-1 text-xs font-normal leading-5 text-zinc-400">
        <input
          aria-invalid={Boolean(error)}
          checked={accepted}
          className="mt-0.5 size-3.5 shrink-0 rounded border-blue-300/30 bg-white accent-[#2d75ff]"
          name="terms"
          onChange={onChange}
          type="checkbox"
        />
        <span>
          I agree to the <Link className="font-bold text-[#2d75ff] hover:text-[#5b94ff]" to="/terms">Terms of Service</Link>{" "}
          and <Link className="font-bold text-[#2d75ff] hover:text-[#5b94ff]" to="/privacy">Privacy Policy</Link>.
          I confirm I am 18+ and play responsibly.
        </span>
      </label>
      {error ? <p className="-mt-2 text-xs font-normal leading-5 text-red-300">{error}</p> : null}
    </>
  );
}

export default RegisterTerms;
