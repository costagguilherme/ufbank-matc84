import { NextResponse } from "next/server";
import { usersMockDB } from "../db";

export async function POST(req: Request) {
  const { cpf, senha } = await req.json();

  const user = usersMockDB.find(
    (u) => u.cpf === cpf && u.senha === senha
  );

  if (!user) {
    return NextResponse.json(
      {
        success: false,
        message: "CPF ou senha inválidos."
      },
      { status: 401 }
    );
  }

  const token = "token-mock-" + user.id;

  const res = NextResponse.json({
    success: true,
    message: "Login realizado com sucesso!",
    token,
  });

  res.cookies.set("auth_token", token, {
    httpOnly: true,
    path: "/",
  });

  return res;
}
