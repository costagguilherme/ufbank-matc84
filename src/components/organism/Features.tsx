import { FeatureCard } from "../molecules/FeatureCard";


export function Features() {
    return (
        <section className="bg-purple-50 py-16">
            <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                <FeatureCard
                    icon={<span className="text-4xl text-purple-600">💻</span>}
                    title="Conta 100% Digital"
                    description="Abra sua conta sem precisar sair de casa. Tudo feito online, de forma simples e rápida."
                />
                <FeatureCard
                    icon={<span className="text-4xl text-purple-600">💡</span>}
                    title="Sem Taxas Ocultas"
                    description="Transparência total: você sabe exatamente o que está pagando e quando."
                />
                <FeatureCard
                    icon={<span className="text-4xl text-purple-600">🔒</span>}
                    title="Segurança Garantida"
                    description="Protegemos seus dados e seu dinheiro com tecnologia de ponta e criptografia completa."
                />
            </div>
        </section>
    );
}