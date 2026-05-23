import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useAuth } from "@/hooks/auth/use-auth";
import { passwordUpdateSchema } from "@/schemas/profile-schema";
import PasswordChangeSection from "./PasswordChangeSection";
import ProfileInfoSection from "./ProfileInfoSection";

function MyProfile() {
  const navigate = useNavigate();
  const { signOut, user } = useAuth();
  const [passwordFields, setPasswordFields] = useState({
    confirm: "",
    current_password: "",
    new_password: "",
  });

  function handleSignOut() {
    signOut();
    toast.success("Signed out successfully.");
    navigate("/");
  }

  function handlePasswordFieldChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setPasswordFields((current) => ({ ...current, [name]: value }));
  }

  function handlePasswordSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const result = passwordUpdateSchema.safeParse({
      confirmPassword: formData.get("confirm"),
      currentPassword: formData.get("current_password"),
      newPassword: formData.get("new_password"),
    });

    if (!result.success) {
      const firstError = Object.values(result.error.flatten().fieldErrors).flat().find(Boolean);
      toast.error(firstError || "Please fix the highlighted password fields.");
      return;
    }

    setPasswordFields({ confirm: "", current_password: "", new_password: "" });
    toast.success("Password updated successfully.");
  }

  return (
    <form className="space-y-6" onSubmit={handlePasswordSubmit}>
      <ProfileInfoSection onSignOut={handleSignOut} user={user} />
      <PasswordChangeSection onChange={handlePasswordFieldChange} values={passwordFields} />
    </form>
  );
}

export default MyProfile;
