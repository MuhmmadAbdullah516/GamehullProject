import { type ChangeEvent, type FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useAuth } from "@/hooks/auth/use-auth";
import { registerSchema, type RegisterErrors } from "@/schemas/auth-schema";

export function useRegisterForm() {
  const [hasFullName, setHasFullName] = useState(false);
  const [hasUsername, setHasUsername] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [errors, setErrors] = useState<RegisterErrors>({});
  const navigate = useNavigate();
  const { signIn } = useAuth();

  function handleFullNameChange(event: ChangeEvent<HTMLInputElement>) {
    setHasFullName(event.currentTarget.value.length > 0);
  }

  function handleUsernameChange(event: ChangeEvent<HTMLInputElement>) {
    setHasUsername(event.currentTarget.value.length > 0);
  }

  function handleTermsChange(event: ChangeEvent<HTMLInputElement>) {
    setAcceptedTerms(event.currentTarget.checked);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const result = registerSchema.safeParse({
      confirmPassword: formData.get("confirmPassword"),
      email: formData.get("email"),
      fullName: formData.get("fullName"),
      password: formData.get("password"),
      terms: formData.get("terms"),
      username: formData.get("username"),
    });

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        confirmPassword: fieldErrors.confirmPassword?.[0],
        email: fieldErrors.email?.[0],
        fullName: fieldErrors.fullName?.[0],
        password: fieldErrors.password?.[0],
        terms: fieldErrors.terms?.[0],
        username: fieldErrors.username?.[0],
      });
      toast.error("Please complete the required fields.");
      return;
    }

    setErrors({});
    signIn({ email: result.data.email, name: result.data.fullName });
    toast.success("Account created successfully.");
    navigate("/");
  }

  return {
    acceptedTerms,
    errors,
    handleFullNameChange,
    handleSubmit,
    handleTermsChange,
    handleUsernameChange,
    hasFullName,
    hasUsername,
  };
}
