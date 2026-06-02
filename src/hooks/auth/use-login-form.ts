import { type FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useAuth } from "@/hooks/auth/use-auth";
import { loginSchema } from "@/schemas/auth-schema";
import type { LoginErrors } from "@/types/validation";

export function useLoginForm() {
  const [errors, setErrors] = useState<LoginErrors>({});
  const navigate = useNavigate();
  const { signIn } = useAuth();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
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

    setErrors({});
    signIn({ email: result.data.email });
    toast.success("Signed in successfully.");
    navigate("/");
  }

  return { errors, handleSubmit };
}
