import AddMachineModal from "../organism/AddMachineModal";
import MachinesList from "../organism/MachinesList";

type Props = {
    machines: any[];
};

export default function MachinesTemplate({ machines }: Props) {
    return (
        <main className="min-h-screen bg-gray-50 p-8 flex flex-col items-center justify-start">
            <AddMachineModal />

            <div className="w-full max-w-3xl mt-12 mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                    Máquinas Cadastradas
                </h2>

                <MachinesList machines={machines} />
            </div>
        </main>
    );
}
