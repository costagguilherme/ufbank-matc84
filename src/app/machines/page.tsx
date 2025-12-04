import MachinesTemplate from "src/components/templates/MachinesTemplate";
import Link from "next/link";

export default async function MachinesPage() {
    const machines = await fetch("http://localhost:3000/api/machines", {
        method: "GET",
        cache: "no-store",
    }).then((res) => res.json());

    return (
        <>
            <MachinesTemplate machines={machines} />
            <Link href="/dashboard" className="inline-block mt-8 text-purple-600 hover:underline text-sm text-center w-full">
                Voltar ao Dashboard
            </Link>
        </>
    );
}
