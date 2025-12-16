import { DefaultButton } from "../atoms/CustomButtom";


export function CTA() {
    return (
        <section className="py-20 px-8 bg-white text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pronto para transformar sua vida financeira?</h2>
            <p className="text-gray-600 mb-8">Comece agora mesmo e descubra como é fácil ter controle total sobre suas finanças.</p>
            <DefaultButton href="/register" className="px-8 py-4 text-lg">Abrir Minha Conta</DefaultButton>
        </section>
    );
}