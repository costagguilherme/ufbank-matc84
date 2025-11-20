import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { usersMockDB } from "../../db";
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        cpf: { label: "CPF", type: "text" },
        senha: { label: "Senha", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.cpf || !credentials?.senha) return null;
        const user = usersMockDB.find(
          (u) => u.cpf === credentials.cpf && u.senha === credentials.senha
        );
        if (user) {
          return { id: user.id.toString(), name: user.nome, email: user.email };
        }
        return null;
      },
    }),
  ],
  session: { strategy: "jwt" as const },
  jwt: { secret: "secretaqui123456" },
  pages: { signIn: "/login" },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
