import Link from "next/link";
import AddMachineModal from "./AddMachineModal";

export default async function MachinesPage() {
    const machines: any[] = await fetch('http://localhost:3000/api/machines', {
        method: "GET",
        cache: "no-store",
    }).then(res => res.json());

    return (
        <main className="min-h-screen bg-gray-50 p-8 flex flex-col items-center justify-start">

            {/* <AddMachineModal /> */}

            <div className="w-full max-w-3xl mt-12 mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                    Máquinas Cadastradas
                </h2>

                <div className="grid gap-4">
                    {machines.map((machine) => (
                        <div
                            key={machine.id}
                            className="rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all p-5 flex items-center justify-between"
                        >
                            <div>
                                <p className="font-semibold text-gray-900 text-lg">
                                    {machine.name}
                                </p>
                                <p className="text-gray-600 text-sm">
                                    {machine.serial} • {machine.model}
                                </p>
                            </div>

                            <button className="text-purple-600 hover:text-purple-800 font-medium text-sm transition">
                                ✎ Editar
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <Link href="/dashboard" className="inline-block mt-8 text-purple-600 hover:underline text-sm">
                Voltar ao Dashboard
            </Link>
        </main>
    );
}
