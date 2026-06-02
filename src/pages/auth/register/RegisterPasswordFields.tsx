import PasswordField from "@/components/auth/password-field";
import type { RegisterPasswordFieldsProps } from "@/types/auth-register";

const passwordFields = [
  { errorKey: "password", id: "password", label: "Password", name: "password", placeholder: "Min 8 chars" },
  { errorKey: "confirmPassword", id: "confirm-password", label: "Confirm", name: "confirmPassword", placeholder: "Repeat pass" },
] as const;

function RegisterPasswordFields({ errors }: RegisterPasswordFieldsProps) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {passwordFields.map((field) => (
        <div key={field.id}>
          <PasswordField
            aria-invalid={Boolean(errors[field.errorKey])}
            autoComplete="new-password"
            iconClassName="size-4"
            id={field.id}
            inputClassName="text-sm font-normal leading-[21px] tracking-normal placeholder:text-slate-400"
            label={field.label}
            labelClassName="text-[13px] font-semibold leading-5"
            name={field.name}
            placeholder={field.placeholder}
            toggleClassName="size-8 hover:text-slate-200 focus-visible:ring-blue-400 [&_svg]:size-5"
          />
          {errors[field.errorKey] ? (
            <p className="mt-1 text-xs font-normal leading-5 text-red-300">{errors[field.errorKey]}</p>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default RegisterPasswordFields;
