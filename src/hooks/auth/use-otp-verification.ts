import {
  type ChangeEvent,
  type ClipboardEvent,
  type FormEvent,
  type KeyboardEvent,
  useRef,
  useState,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { api } from "@/lib/api";
import { verifyOtpSchema } from "@/schemas/auth-schema";
import type { VerifyOtpErrors } from "@/types/validation";

export const OTP_LENGTH = 4;

export function useOtpVerification() {
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const [errors, setErrors] = useState<VerifyOtpErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email as string | undefined;
  const purpose = location.state?.purpose as string | undefined;

  function focusInput(index: number) {
    inputRefs.current[index]?.focus();
  }

  function handleChange(index: number, event: ChangeEvent<HTMLInputElement>) {
    const digit = event.target.value.replace(/\D/g, "").slice(-1);
    const nextOtp = [...otp];
    nextOtp[index] = digit;
    setOtp(nextOtp);
    setErrors({});
    if (digit && index < OTP_LENGTH - 1) focusInput(index + 1);
  }

  function handleKeyDown(index: number, event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Backspace" && !otp[index] && index > 0) focusInput(index - 1);
  }

  function handlePaste(event: ClipboardEvent<HTMLInputElement>) {
    event.preventDefault();
    const pastedOtp = event.clipboardData.getData("text").replace(/\D/g, "").slice(0, OTP_LENGTH);
    if (!pastedOtp) return;

    const nextOtp: string[] = Array(OTP_LENGTH).fill("");
    pastedOtp.split("").forEach((digit, index) => {
      nextOtp[index] = digit;
    });
    setOtp(nextOtp);
    setErrors({});
    focusInput(Math.min(pastedOtp.length, OTP_LENGTH - 1));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = verifyOtpSchema.safeParse({ otp: otp.join("") });

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({ otp: fieldErrors.otp?.[0] });
      toast.error("Enter the complete 4-digit code.");
      return;
    }

    if (!email) {
      toast.error("Email is missing. Please restart password recovery.");
      navigate("/forgot-password");
      return;
    }

    try {
      setIsSubmitting(true);
      setErrors({});

      await api.post("/auth/verify-otp", {
        email,
        otp: result.data.otp,
        purpose,
      });

      toast.success("OTP verified successfully.");
      navigate("/login");
    } catch {
      toast.error("Invalid or expired verification code.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return {
    email,
    errors,
    handleChange,
    handleKeyDown,
    handlePaste,
    handleSubmit,
    inputRefs,
    isSubmitting,
    otp,
  };
}
