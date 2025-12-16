import MachinesTemplate from "src/components/templates/MachinesTemplate";
import Link from "next/link";

export default async function MachinesPage() {
    const machines = await fetch("http://localhost:3000/api/machines", {
        method: "GET",
        cache: "no-store",
    }).then((res) => res.json());

    return (
        <div className="text-center">
            <MachinesTemplate machines={machines} />
            <Link href="/dashboard" aria-label="Voltar ao Dashboard" className="inline-block mt-8 p-3 bg-purple-600 text-white font-bold rounded-full shadow-md hover:bg-purple-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-1">
                <span className="text-2xl">←</span>
            </Link>
        </div>
    );
}
