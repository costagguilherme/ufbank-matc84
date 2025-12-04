"use client";

import { useState } from "react";
import MachineForm from "../molecules/MachineForm";

export default function AddMachineModal() {
    const [open, setOpen] = useState(false);

    const createMachine = async (e: any) => {
        e.preventDefault();

        const data = {
            name: e.target.name.value,
            serial: e.target.serial.value,
            model: e.target.model.value,
        };

        await fetch("/api/machines", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        setOpen(false);
        window.location.reload();
    };

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="mb-6 px-4 py-2 bg-purple-600 text-white rounded-xl shadow hover:bg-purple-700 transition"
            >
                + Adicionar Máquina
            </button>

            {open && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
                        <h2 className="text-xl font-semibold mb-4">Adicionar Máquina</h2>

                        <MachineForm onSubmit={createMachine} />
                    </div>
                </div>
            )}
        </>
    );
}
