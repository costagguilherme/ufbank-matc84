import { ContactCard } from "../molecules/ContactCard";


export function Contact() {
    return (
        <section id="contato" className="bg-purple-50 py-20 px-8">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Fale com a gente</h2>
                <p className="text-gray-600 mb-10">Tem alguma dúvida ou precisa de ajuda? Nosso time está pronto para te atender.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ContactCard icon="📧" title="E-mail" value="suporte@ufbank.com" />
                    <ContactCard icon="📞" title="Telefone" value="(11) 4000-1234" />
                    <ContactCard icon="💬" title="WhatsApp" value="(11) 9 9999-9999" />
                </div>
            </div>
        </section>
    );
}