"use client";

import { useState } from "react";
import AddMachineModal from "../organism/AddMachineModal";
import EditMachineModal from "../organism/EditMachineModal";
import MachinesList from "../organism/MachinesList";
import DeleteMachineModal from "../organism/DeleteMachineModal";

type Props = {
    machines: any[];
};

export default function MachinesTemplate({ machines }: Props) {
    const [editing, setEditing] = useState<any | null>(null);
    const [deleting, setDeleting] = useState<any | null>(null);

    function handleDeleteMachine(machine: any) {
        setDeleting(machine);
    }

    async function handleConfirmDelete() {
        if (deleting) {
            await fetch('/api/machines', {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id: deleting.id }),
            });
            window.location.reload();
        }
    }

    return (
        <main className="min-h-screen bg-gray-50 p-8 flex flex-col items-center justify-start">
            <AddMachineModal />

            <div className="w-full max-w-3xl mt-12 mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                    Máquinas Cadastradas
                </h2>

                <MachinesList
                    machines={machines}
                    onEditMachine={(m) => setEditing(m)}
                    onDeleteMachine={handleDeleteMachine}
                />
            </div>

            {editing && (
                <EditMachineModal
                    machine={editing}
                    onClose={() => setEditing(null)}
                />
            )}

            {deleting && (
                <DeleteMachineModal
                    machine={deleting}
                    onClose={() => setDeleting(null)}
                    onConfirm={handleConfirmDelete}
                />
            )}
        </main>
    );
}