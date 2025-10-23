"use client";

import Checkbox from "../atoms/Checkbox";
import Label from "../atoms/Label";

type FormCheckboxProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  required?: boolean;
  disabled?: boolean;
  id?: string;
  className?: string;
};

export default function FormCheckbox({
  label,
  checked,
  onChange,
  required,
  disabled,
  id,
  className,
}: FormCheckboxProps) {
  // Gera um ID único se não for fornecido
  const checkboxId = id || `checkbox-${crypto.randomUUID()}`;

  return (
    <div className={`flex items-center gap-2 ${className ?? ""}`}>
      <Checkbox
        id={checkboxId}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <Label
        htmlFor={checkboxId}
        text={label}
        required={required}
        className={disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}
      />
    </div>
  );
}
