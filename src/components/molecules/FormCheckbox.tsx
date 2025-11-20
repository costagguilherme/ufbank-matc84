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

  return (
    <div className={`flex items-center gap-2 ${className ?? ""}`}>
      <Checkbox
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <Label text={label} className="text-sm text-gray-700" />
    </div>
  );
}
