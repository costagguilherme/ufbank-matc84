import { DefaultButton } from "../atoms/CustomButtom";


export function Hero() {
    return (
        <section id="servicos" className="flex flex-col px-8 py-24 gap-6 max-w-4xl mx-auto text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Seu Futuro Financeiro Começa Aqui</h1>
            <p className="text-gray-600 text-lg">
                Abra sua conta digital em minutos e aproveite taxas zero, investimentos inteligentes e a segurança que você merece.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <DefaultButton href="/register">Abrir Minha Conta</DefaultButton>
                <DefaultButton href="/login" variant="secondary">Já sou cliente (Login)</DefaultButton>
            </div>
        </section>
    );
}