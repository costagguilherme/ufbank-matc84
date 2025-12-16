// app/page.tsx
"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <header className="flex justify-between items-center px-8 py-4 shadow-sm sticky top-0 bg-white z-50">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
            UF
          </div>
          <span className="font-semibold text-lg text-purple-700">UFBank</span>
        </div>
        <nav className="flex items-center gap-6">
          <Link href="#servicos" className="text-gray-700 hover:text-purple-700">Serviços</Link>
          <Link href="#contato" className="text-gray-700 hover:text-purple-700">Contato</Link>
          <Link href="/login" className="text-gray-700 hover:text-purple-700">Entrar</Link>
          <Link href="/register" className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
            Cadastrar-se
          </Link>
        </nav>
      </header>

      <section id="servicos" className="flex flex-col items-start justify-center px-8 py-24 gap-6 max-w-4xl mx-auto text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
          Seu Futuro Financeiro Começa Aqui
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          Abra sua conta digital em minutos e aproveite taxas zero, investimentos inteligentes e a segurança que você merece.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href="/register" className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
            Abrir Minha Conta
          </Link>
          <Link href="/login" className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            Já sou cliente (Login)
          </Link>
        </div>
      </section>

      <section className="bg-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col items-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 6h18M3 14h18M3 18h18" />
            </svg>
            <h3 className="text-purple-700 font-semibold mb-2">Conta 100% Digital</h3>
            <p className="text-gray-600">Abra sua conta sem precisar sair de casa. Tudo feito online, de forma simples e rápida.</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col items-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3c1.657 0 3-1.343 3-3s-1.343-3-3-3zM12 2v2m0 16v2m6.364-6.364l1.414 1.414M4.222 4.222l1.414 1.414M18 12h2M2 12h2M17.657 17.657l1.414-1.414M4.222 19.778l1.414-1.414" />
            </svg>
            <h3 className="text-purple-700 font-semibold mb-2">Sem Taxas Ocultas</h3>
            <p className="text-gray-600">Transparência total: você sabe exatamente o que está pagando e quando.</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col items-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-3.866-3.582-7-8-7s-8 3.134-8 7c0 2.387 1.214 4.485 3.057 5.812A5.978 5.978 0 0012 18c2.21 0 4.208-1.122 5.443-2.888A6.003 6.003 0 0020 11z" />
            </svg>
            <h3 className="text-purple-700 font-semibold mb-2">Segurança Garantida</h3>
            <p className="text-gray-600">Protegemos seus dados e seu dinheiro com tecnologia de ponta e criptografia completa.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Pronto para transformar sua vida financeira?
        </h2>
        <p className="text-gray-600 mb-8">
          Comece agora mesmo e descubra como é fácil ter controle total sobre suas finanças.
        </p>
        <Link
          href="/register"
          className="bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition-colors text-lg inline-flex items-center justify-center gap-2 mx-auto"
        >
          Abrir Minha Conta
        </Link>
      </section>

      <section id="contato" className="bg-purple-50 py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Fale com a gente
          </h2>

          <p className="text-gray-600 mb-10">
            Tem alguma dúvida ou precisa de ajuda? Nosso time está pronto para te atender.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email */}
            <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-2xl">
                📧
              </div>
              <h3 className="font-semibold text-gray-900">E-mail</h3>
              <p className="text-gray-600 text-sm">suporte@ufbank.com</p>
            </div>

            {/* Telefone */}
            <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-2xl">
                📞
              </div>
              <h3 className="font-semibold text-gray-900">Telefone</h3>
              <p className="text-gray-600 text-sm">(11) 4000-1234</p>
            </div>

            {/* WhatsApp */}
            <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-2xl">
                💬
              </div>
              <h3 className="font-semibold text-gray-900">WhatsApp</h3>
              <p className="text-gray-600 text-sm">(11) 9 9999-9999</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-gray-100 py-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} UFBank. Todos os direitos reservados.
      </footer>
    </main>
  );
}
