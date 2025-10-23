"use client";

import { useState } from "react";
import FormField from "../molecules/FormField";
import FormCheckbox from "../molecules/FormCheckbox";
import Button from "../atoms/Button";
import formFields from "@/src/app/data/formFIelds";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    email: "",
    senha: "",
    termos: false,
  });

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados do cadastro:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 bg-white p-8 rounded-2xl shadow-md w-full max-w-md mx-auto"
    >
      <h2 className="text-2xl font-semibold text-center text-purple-700 mb-2">
        Cadastro de Usuário
      </h2>

      {formFields.map((field) => (
        <FormField
          key={field.key}
          label={field.label}
          type={field.type}
          placeholder={field.placeholder}
          value={formData[field.key]}
          required={field.required}
          onChange={(value) => handleChange(field.key, value)}
        />
      ))}

      <FormCheckbox
        label="Aceito os termos de uso"
        checked={formData.termos}
        onChange={(value) => handleChange("termos", value)}
      />

      <Button type="submit" label="Cadastrar" />
    </form>
  );
}
