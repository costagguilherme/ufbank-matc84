"use client";

import { useRouter } from "next/navigation";
import FormButton from "../components/molecules/FormButton";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-purple-700 mb-4">
          Bem-vindo ao UFBank
        </h1>
        <p className="text-gray-500 mb-8">
          Sua conta digital de forma rápida, fácil e segura
        </p>

        <div className="flex flex-col gap-4">
          <FormButton
            label="Entrar"
            onClick={() => router.push("/login")}
          />
          <FormButton
            label="Cadastrar"
            onClick={() => router.push("/register")}
          />
        </div>
      </div>
    </div>
  );
}
