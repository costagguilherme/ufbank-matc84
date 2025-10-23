"use client";

import React, { useState } from "react";
import FormField from "../molecules/FormField";
import FormCheckbox from "../molecules/FormCheckbox";
import Button from "../atoms/Button";

export default function LoginForm() {
  const [Cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ Cpf, password, remember });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full max-w-sm mx-auto p-8 bg-white rounded-2xl shadow-lg"
    >
      <h2 className="text-2xl font-semibold text-center text-purple-700">
        Login UFBank
      </h2>

      {/* Campo de E-mail */}
      <FormField
        label="Cpf"
        type="cpf"
        placeholder="Digite seu e-mail"
        required
        value={Cpf}
        onChange={setCpf}
      />

      {/* Campo de Senha */}
      <FormField
        label="Senha"
        type="password"
        placeholder="Digite sua senha"
        required
        value={password}
        onChange={setPassword}
      />

      {/* Checkbox de lembrar login */}
      <FormCheckbox
        label="Lembrar-me neste dispositivo"
        checked={remember}
        onChange={setRemember}
      />

      {/* Botão de envio */}
      <Button type="submit" label="Entrar" />
    </form>
  );
}
