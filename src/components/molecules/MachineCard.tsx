type CardProps = {
    name: string;
    serial: string;
    model: string;
};

export default function MachineCard({ name, serial, model }: CardProps) {
    return (
        <div className="rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all p-5 flex items-center justify-between">
            <div>
                <p className="font-semibold text-gray-900 text-lg">
                    {name}
                </p>
                <p className="text-gray-600 text-sm">
                    {serial} • {model}
                </p>
            </div>

            <button className="text-purple-600 hover:text-purple-800 font-medium text-sm transition">
                ✎ Editar
            </button>
        </div>
    );
}
