"use client";

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
  // id?: string;  
};

export default function FormField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
  error = null,
  hint = null,
  className,
}: FormFieldProps) {

    // Permitiria gerar um ID caso nenhum fosse informado
  // const inputId = id || `input-${crypto.randomUUID()}`;

  return (
    <div className={`mb-4 ${className ?? ""}`}>
      <Label 
        // htmlFor={inputId} // O atomo Input ainda nao usa id, mas isso mostra a intencao do pareamento
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