"use client";

import MachineForm from "../molecules/MachineForm";

type EditMachineModalProps = {
    machine: any | null;
    onClose: () => void;
};

export default function EditMachineModal({ machine, onClose }: EditMachineModalProps) {

    if (!machine) return null;

    async function updateMachine(e: any) {
        e.preventDefault();

        const data = {
            id: machine.id,
            name: e.target.name.value,
            serial: e.target.serial.value,
            model: e.target.model.value,
            valor: e.target.valor.value,
        };

        await fetch('/api/machines', {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        onClose();
        window.location.reload();
    }

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-xl font-semibold mb-4">Editar Máquina</h2>

                <MachineForm machine={machine} onSubmit={updateMachine} onCancel={onClose} />
            </div>
        </div>
    );
}
