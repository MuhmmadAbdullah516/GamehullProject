import { type FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { api } from "@/lib/api";
import { forgetPasswordSchema } from "@/schemas/auth-schema";
import type { ForgetPasswordErrors } from "@/types/validation";

export function useForgetPasswordForm() {
  const [errors, setErrors] = useState<ForgetPasswordErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const result = forgetPasswordSchema.safeParse({ email: formData.get("email") });

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({ email: fieldErrors.email?.[0] });
      toast.error("Enter a valid email address.");
      return;
    }

    try {
      setIsSubmitting(true);
      setErrors({});

      await api.post("/auth/forgot-password", {
        email: result.data.email,
      });

      toast.success("OTP sent to your email.");
      navigate("/verify-otp", {
        state: {
          email: result.data.email,
          purpose: "password-reset",
        },
      });
    } catch {
      toast.error("Unable to send OTP. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return { errors, handleSubmit, isSubmitting };
}
