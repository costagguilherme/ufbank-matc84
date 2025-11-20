"use client";

import React, { useState } from "react";
import FormField from "../molecules/FormField";
import FormCheckbox from "../molecules/FormCheckbox";
import FormButton from "../molecules/FormButton";

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
      className="flex flex-col gap-4 bg-white p-8 rounded-2xl shadow-md w-full max-w-md mx-auto"
    >
      <h2 className="text-2xl font-semibold text-center text-purple-700 mb-2">
        Login UFBank
      </h2>
      <h3 className="text-sm text-center text-gray-500 font-light mt-1">
        É rápido, fácil e seguro
      </h3>

      {/* Campo de E-mail */}
      <FormField
        label="CPF"
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

      <div className="flex justify-center">
        <FormButton
          type="submit"
          label="Entrar"
          onClick={() => { alert('fazendo login') }}
        />
      </div>

      <div className="flex flex-col items-center gap-2 mt-4">
        <span className="text-gray-500 text-sm">
          Não possui uma conta?{" "}
          <a
            href="/login"
            className="text-purple-600 font-semibold text-base hover:text-purple-700 transition-colors"
          >
            Cadastra-se
          </a>
        </span>
      </div>
    </form>
  );
}
