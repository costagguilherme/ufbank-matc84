import React from "react";
import Label from "../atoms/Label";
import Input from "../atoms/Input";

type FormFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  error?: string | null;
  hint?: string | null;
  className?: string;
};

export default function FormField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required = true,
  error = null,
  hint = null,
  className,
}: FormFieldProps) {

  return (
    <div className={`mb-4 ${className ?? ""}`}>
      <Label 
        text={label} 
        required={required} 
      />
      
      <Input 
        value={value} 
        onChange={onChange} 
        placeholder={placeholder} 
        type={type}
      />
      {error ? (
        <p className="text-sm text-red-600 mt-1" role="alert">
          {error}
        </p>
      ) : hint ? (
        <p className="text-sm text-gray-500 mt-1">{hint}</p>
      ) : null}
    </div>
  );
}