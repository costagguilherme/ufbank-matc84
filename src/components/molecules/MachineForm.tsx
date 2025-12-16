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
            <div>
                <label htmlFor="name" className="block text-left text-sm font-medium text-gray-700">Nome da máquina</label>
                <input
                    id="name"
                    name="name"
                    required
                    defaultValue={machine?.name}
                    placeholder="Nome da máquina"
                    className="mt-1 block w-full border p-2 rounded-lg"
                />
            </div>

            <div>
                <label htmlFor="serial" className="block text-left text-sm font-medium text-gray-700">Número de série</label>
                <input
                    id="serial"
                    name="serial"
                    required
                    defaultValue={machine?.serial}
                    placeholder="Número de série"
                    className="mt-1 block w-full border p-2 rounded-lg"
                />
            </div>

            <div>
                <label htmlFor="model" className="block text-left text-sm font-medium text-gray-700">Modelo</label>
                <input
                    id="model"
                    name="model"
                    required
                    defaultValue={machine?.model}
                    placeholder="Modelo"
                    className="mt-1 block w-full border p-2 rounded-lg"
                />
            </div>

            <div>
                <label htmlFor="valor" className="block text-left text-sm font-medium text-gray-700">Valor</label>
                <input
                    id="valor"
                    name="valor"
                    required
                    type="number"
                    defaultValue={machine?.valor}
                    placeholder="Valor"
                    className="mt-1 block w-full border p-2 rounded-lg"
                />
            </div>

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
