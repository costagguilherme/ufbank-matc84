import { NextResponse } from "next/server";
import { usersMockDB } from "../db";

export async function POST(req: Request) {
  const body = await req.json();

  const { nome, cpf, email, senha } = body;

  if (!nome || !cpf || !email || !senha) {
    return NextResponse.json(
      { success: false, message: "Campos obrigatórios faltando." },
      { status: 400 }
    );
  }

  const userExists = usersMockDB.some((u) => u.email === email);
  if (userExists) {
    return NextResponse.json(
      { success: false, message: "Email já cadastrado." },
      { status: 400 }
    );
  }

  let user = {
    id: Date.now(),
    nome,
    cpf,
    email,
    senha,
  }
  usersMockDB.push(user);

  return NextResponse.json(
    { success: true, data: user, message: "Usuário cadastrado com sucesso!" },
    { status: 201 }
  );
}
