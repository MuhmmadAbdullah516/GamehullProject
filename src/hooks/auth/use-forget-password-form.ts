import { type FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { forgetPasswordSchema, type ForgetPasswordErrors } from "@/schemas/auth-schema";

export function useForgetPasswordForm() {
  const [errors, setErrors] = useState<ForgetPasswordErrors>({});
  const navigate = useNavigate();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const result = forgetPasswordSchema.safeParse({ email: formData.get("email") });

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({ email: fieldErrors.email?.[0] });
      toast.error("Enter a valid email address.");
      return;
    }

    setErrors({});
    toast.success("OTP sent to your email.");
    navigate("/verify-otp");
  }

  return { errors, handleSubmit };
}
