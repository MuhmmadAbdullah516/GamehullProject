import { type ChangeEvent, type FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { api } from "@/lib/api";
import { useAuth } from "@/hooks/auth/use-auth";
import { registerSchema } from "@/schemas/auth-schema";
import type { RegisterErrors } from "@/types/validation";

export function useRegisterForm() {
  const [hasFullName, setHasFullName] = useState(false);
  const [hasUsername, setHasUsername] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [errors, setErrors] = useState<RegisterErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaSeed, setCaptchaSeed] = useState(() => ({
    left: 4,
    right: 7,
  }));
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const navigate = useNavigate();
  const { signIn } = useAuth();

  function handleCaptchaChange(event: ChangeEvent<HTMLInputElement>) {
    setCaptchaAnswer(event.currentTarget.value);
  }

  function refreshCaptcha() {
    setCaptchaSeed({
      left: Math.floor(Math.random() * 8) + 2,
      right: Math.floor(Math.random() * 8) + 2,
    });
    setCaptchaAnswer("");
  }

  function handleFullNameChange(event: ChangeEvent<HTMLInputElement>) {
    setHasFullName(event.currentTarget.value.length > 0);
  }

  function handleUsernameChange(event: ChangeEvent<HTMLInputElement>) {
    setHasUsername(event.currentTarget.value.length > 0);
  }

  function handleTermsChange(event: ChangeEvent<HTMLInputElement>) {
    setAcceptedTerms(event.currentTarget.checked);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const result = registerSchema.safeParse({
      captcha: formData.get("captcha"),
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
        captcha: fieldErrors.captcha?.[0],
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

    const expectedCaptchaAnswer = captchaSeed.left + captchaSeed.right;

    if (Number(result.data.captcha) !== expectedCaptchaAnswer) {
      setErrors({ captcha: "Captcha answer is incorrect" });
      toast.error("Captcha answer is incorrect.");
      refreshCaptcha();
      return;
    }

    try {
      setIsSubmitting(true);
      setErrors({});

      const response = await api.post("/auth/register", {
        email: result.data.email,
        fullName: result.data.fullName,
        password: result.data.password,
        username: result.data.username,
      });

      signIn({
        token: response.data.token,
        user: response.data.user,
      });
      toast.success("Account created successfully.");
      navigate("/");
    } catch {
      toast.error("Unable to create account.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return {
    acceptedTerms,
    captchaAnswer,
    captchaQuestion: `${captchaSeed.left} + ${captchaSeed.right}`,
    errors,
    handleCaptchaChange,
    handleFullNameChange,
    handleSubmit,
    handleTermsChange,
    handleUsernameChange,
    hasFullName,
    hasUsername,
    isSubmitting,
    refreshCaptcha,
  };
}
