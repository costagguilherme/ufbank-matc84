"use client";

import Button from "../atoms/Button";

type MachineFormProps = {
    onSubmit: (e: any) => void;
    onCancel?: () => void;
    machine?: any;
};

export default function MachineForm({ onSubmit, onCancel, machine }: MachineFormProps) {
    return (
        <form onSubmit={onSubmit} className="space-y-4">
            <input
                name="name"
                required
                defaultValue={machine?.name}
                placeholder="Nome da máquina"
                className="w-full border p-2 rounded-lg"
            />

            <input
                name="serial"
                required
                defaultValue={machine?.serial}
                placeholder="Número de série"
                className="w-full border p-2 rounded-lg"
            />

            <input
                name="model"
                required
                defaultValue={machine?.model}
                placeholder="Modelo"
                className="w-full border p-2 rounded-lg"
            />

            <input
                name="valor"
                required
                type="number"
                defaultValue={machine?.valor}
                placeholder="Valor"
                className="w-full border p-2 rounded-lg"
            />

            <div className="flex justify-end gap-3 mt-4">
                <Button 
                    type="button" 
                    label="Cancelar" 
                    onClick={onCancel} 
                />

                <Button 
                    type="submit" 
                    label="Salvar" 
                />
            </div>
        </form>
    );
}
