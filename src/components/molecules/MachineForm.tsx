"use client";

import Button from "../atoms/Button";

type MachineFormProps = {
    onSubmit: (e: any) => void;
    onCancel?: () => void;
};

export default function MachineForm({ onSubmit, onCancel }: MachineFormProps) {
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
