import { type FormEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { api } from "@/lib/api";
import { useAuth } from "@/hooks/auth/use-auth";
import { loginSchema } from "@/schemas/auth-schema";
import type { LoginErrors } from "@/types/validation";

export function useLoginForm() {
  const [errors, setErrors] = useState<LoginErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { signIn } = useAuth();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const result = loginSchema.safeParse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({ email: fieldErrors.email?.[0], password: fieldErrors.password?.[0] });
      toast.error("Please fix the highlighted fields.");
      return;
    }

    try {
      setIsSubmitting(true);
      setErrors({});

      const response = await api.post("/auth/login", {
        email: result.data.email,
        password: result.data.password,
      });
      const redirectTo = location.state?.from?.pathname || "/";

      signIn({
        token: response.data.token,
        user: response.data.user,
      });
      toast.success("Signed in successfully.");

      // Admin users go to admin panel, regular users go to their intended page
      if (response.data.user.role === "admin") {
        navigate("/admin", { replace: true });
      } else {
        navigate(redirectTo, { replace: true });
      }
    } catch {
      toast.error("Invalid email or password.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return { errors, handleSubmit, isSubmitting };
}
