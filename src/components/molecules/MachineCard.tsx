import CardButton from "../atoms/CardButton";

type CardProps = {
    name: string;
    serial: string;
    model: string;
    valor: number;
    onEdit?: () => void;
    onDelete?: () => void;
};

export default function MachineCard({ name, serial, model, valor, onEdit, onDelete }: CardProps) {
    const formattedValor = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);

    return (
        <div className="rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all p-5 flex items-center justify-between">
            <div>
                <p className="font-semibold text-gray-900 text-lg">
                    {name}
                </p>
                <p className="text-gray-600 text-sm">
                    {serial} • {model} • {formattedValor}
                </p>
            </div>

            <div className="flex gap-2">
                <CardButton label="✎ Editar" onClick={onEdit} />
                <CardButton label="🗑️ Excluir" onClick={onDelete} />
            </div>
        </div>
    );
}
