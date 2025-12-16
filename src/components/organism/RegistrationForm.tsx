"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import FormField from "../molecules/FormField";
import FormCheckbox from "../molecules/FormCheckbox";
import formFields from "@/src/types/registerFormFields";
import FormButton from "../molecules/FormButton";

export default function RegistrationForm() {

  const router = useRouter();
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    email: "",
    senha: "",
    acceptTerms: false,
  });

  function handleChange(field: string, value: string | boolean) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!formData.acceptTerms) {
      alert("Você precisa aceitar os termos para continuar.");
      return;
    }

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      router.push("/login");
    } else {
      alert(data.message);
    }
  }


  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 bg-white p-8 rounded-2xl shadow-md w-full max-w-md mx-auto"
    >

      <h2 className="text-2xl font-semibold text-center text-purple-700 mb-2">
        Abra sua conta UFBank
      </h2>
      <h3 className="text-sm text-center text-gray-500 font-light mt-1">
        É rápido, fácil e seguro
      </h3>

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
        checked={formData.acceptTerms}
        onChange={(checked) => setFormData({ ...formData, acceptTerms: checked })}
      />

      <div className="flex justify-center">
        <FormButton
          type="submit"
          label="Cadastrar"
        />
      </div>

      <div className="flex flex-col items-center gap-2 mt-4">
        <span className="text-gray-500 text-sm">
          Já possui uma conta?{" "}
          <a
            href="/login"
            className="text-purple-600 font-semibold text-base hover:text-purple-700 transition-colors"
          >
            Entrar
          </a>
        </span>
      </div>
    </form>
  );
}
