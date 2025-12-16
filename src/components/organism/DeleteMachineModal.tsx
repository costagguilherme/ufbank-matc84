"use client";

import Button from "../atoms/Button";

type DeleteMachineModalProps = {
    machine: any | null;
    onClose: () => void;
    onConfirm: () => void;
};

export default function DeleteMachineModal({ machine, onClose, onConfirm }: DeleteMachineModalProps) {

    if (!machine) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-xl font-semibold mb-4">Confirmar Exclusão</h2>
                <p>Tem certeza que deseja excluir a máquina <strong>{machine.name}</strong>?</p>
                <div className="flex justify-end gap-3 mt-4">
                    <Button
                        type="button"
                        label="Cancelar"
                        onClick={onClose}
                    />
                    <Button
                        type="button"
                        label="Confirmar"
                        onClick={onConfirm}
                        
                    />
                </div>
            </div>
        </div>
    );
}
