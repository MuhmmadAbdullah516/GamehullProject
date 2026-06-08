import { type FormEvent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { api } from "@/lib/api";
import { resetPasswordSchema } from "@/schemas/auth-schema";
import type { ResetPasswordErrors } from "@/types/validation";

export function useResetPasswordForm() {
  const [errors, setErrors] = useState<ResetPasswordErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email as string | undefined;
  const verified = location.state?.verified as boolean | undefined;

  useEffect(() => {
    if (!email || !verified) {
      toast.error("Please verify your email before resetting your password.");
      navigate("/forgot-password", { replace: true });
    }
  }, [email, navigate, verified]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const result = resetPasswordSchema.safeParse({
      confirmPassword: formData.get("confirmPassword"),
      password: formData.get("password"),
    });

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        confirmPassword: fieldErrors.confirmPassword?.[0],
        password: fieldErrors.password?.[0],
      });
      toast.error("Please check your new password.");
      return;
    }

    if (!email) {
      toast.error("Email is missing. Please restart password recovery.");
      navigate("/forgot-password", { replace: true });
      return;
    }

    try {
      setIsSubmitting(true);
      setErrors({});

      await api.post("/auth/reset-password", {
        email,
        password: result.data.password,
      });

      toast.success("Password updated successfully.");
      navigate("/login", { replace: true });
    } catch {
      toast.error("Unable to reset password. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return { errors, handleSubmit, isSubmitting };
}
