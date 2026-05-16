import {
  type ChangeEvent,
  type ClipboardEvent,
  type FormEvent,
  type KeyboardEvent,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useAuth } from "@/hooks/auth/use-auth";
import {
  forgetPasswordSchema,
  type ForgetPasswordErrors,
  loginSchema,
  type LoginErrors,
  registerSchema,
  type RegisterErrors,
  verifyOtpSchema,
  type VerifyOtpErrors,
} from "@/schemas/auth-schema";

export const OTP_LENGTH = 4;

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

      setErrors({
        email: fieldErrors.email?.[0],
        password: fieldErrors.password?.[0],
      });
      toast.error("Please fix the highlighted fields.");
      return;
    }

    setErrors({});
    signIn({
      email: result.data.email,
    });
    toast.success("Signed in successfully.");
    navigate("/");
  }

  return {
    errors,
    handleSubmit,
  };
}

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
      fullName: formData.get("fullName"),
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
      terms: formData.get("terms"),
    });

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;

      setErrors({
        fullName: fieldErrors.fullName?.[0],
        username: fieldErrors.username?.[0],
        email: fieldErrors.email?.[0],
        password: fieldErrors.password?.[0],
        confirmPassword: fieldErrors.confirmPassword?.[0],
        terms: fieldErrors.terms?.[0],
      });
      toast.error("Please complete the required fields.");
      return;
    }

    setErrors({});
    signIn({
      email: result.data.email,
      name: result.data.fullName,
    });
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

export function useForgetPasswordForm() {
  const [errors, setErrors] = useState<ForgetPasswordErrors>({});
  const navigate = useNavigate();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const result = forgetPasswordSchema.safeParse({
      email: formData.get("email"),
    });

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;

      setErrors({
        email: fieldErrors.email?.[0],
      });
      toast.error("Enter a valid email address.");
      return;
    }

    setErrors({});
    toast.success("OTP sent to your email.");
    navigate("/verify-otp");
  }

  return {
    errors,
    handleSubmit,
  };
}

export function useOtpVerification() {
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const [errors, setErrors] = useState<VerifyOtpErrors>({});
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const navigate = useNavigate();

  const focusInput = (index: number) => {
    inputRefs.current[index]?.focus();
  };

  const handleChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
    const digit = event.target.value.replace(/\D/g, "").slice(-1);
    const nextOtp = [...otp];

    nextOtp[index] = digit;
    setOtp(nextOtp);
    setErrors({});

    if (digit && index < OTP_LENGTH - 1) {
      focusInput(index + 1);
    }
  };

  const handleKeyDown = (index: number, event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      focusInput(index - 1);
    }
  };

  const handlePaste = (event: ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();

    const pastedOtp = event.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, OTP_LENGTH);

    if (!pastedOtp) {
      return;
    }

    const nextOtp: string[] = Array(OTP_LENGTH).fill("");

    pastedOtp.split("").forEach((digit, index) => {
      nextOtp[index] = digit;
    });

    setOtp(nextOtp);
    setErrors({});
    focusInput(Math.min(pastedOtp.length, OTP_LENGTH - 1));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = verifyOtpSchema.safeParse({
      otp: otp.join(""),
    });

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;

      setErrors({
        otp: fieldErrors.otp?.[0],
      });
      toast.error("Enter the complete 4-digit code.");
      return;
    }

    setErrors({});
    toast.success("OTP verified successfully.");
    navigate("/login");
  };

  return {
    errors,
    handleChange,
    handleKeyDown,
    handlePaste,
    handleSubmit,
    inputRefs,
    otp,
  };
}
