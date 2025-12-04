"use client";

type MachineFormProps = {
    onSubmit: (e: any) => void;
};

export default function MachineForm({ onSubmit }: MachineFormProps) {
    return (
        <form onSubmit={onSubmit} className="space-y-4">
            <input
                name="name"
                required
                placeholder="Nome da máquina"
                className="w-full border p-2 rounded-lg"
            />

            <input
                name="serial"
                required
                placeholder="Número de série"
                className="w-full border p-2 rounded-lg"
            />

            <input
                name="model"
                required
                placeholder="Modelo"
                className="w-full border p-2 rounded-lg"
            />

            <div className="flex justify-end gap-3 mt-4">
                <button
                    type="button"
                    className="px-4 py-2 border rounded-xl"
                >
                    Cancelar
                </button>

                <button
                    type="submit"
                    className="px-4 py-2 bg-purple-600 text-white rounded-xl"
                >
                    Salvar
                </button>
            </div>
        </form>
    );
}
