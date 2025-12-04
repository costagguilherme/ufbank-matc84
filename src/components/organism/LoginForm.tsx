"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import FormField from "../molecules/FormField";
import FormCheckbox from "../molecules/FormCheckbox";
import FormButton from "../molecules/FormButton";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  const router = useRouter();
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  async function makeLogin(e: React.FormEvent) {
    e.preventDefault();

    const res = await signIn("credentials", {
      cpf,
      senha: password,
      redirect: false,
    });

    if (res?.error) {
      alert("CPF ou senha inválidos.");
    } else {
      router.push('/dashboard');
    }
  }

  return (
    <form
      onSubmit={makeLogin}
      className="flex flex-col gap-4 bg-white p-8 rounded-2xl shadow-md w-full max-w-md mx-auto"
    >
      <h2 className="text-2xl font-semibold text-center text-purple-700 mb-2">
        Login UFBank
      </h2>
      <h3 className="text-sm text-center text-gray-500 font-light mt-1">
        É rápido, fácil e seguro
      </h3>

      {/* Campo de CPF */}
      <FormField
        label="CPF"
        type="cpf"
        placeholder="Digite seu CPF"
        required
        value={cpf}
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
          onClick={() => { console.log('Login click') }}
        />
      </div>

      <div className="flex flex-col items-center gap-2 mt-4">
        <span className="text-gray-500 text-sm">
          Não possui uma conta?{" "}
          <a
            href="/register"
            className="text-purple-600 font-semibold text-base hover:text-purple-700 transition-colors"
          >
            Cadastra-se
          </a>
        </span>
      </div>
    </form>
  );
}
