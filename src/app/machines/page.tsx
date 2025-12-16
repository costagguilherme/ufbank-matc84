import MachinesTemplate from "src/components/templates/MachinesTemplate";
import Link from "next/link";

export default async function MachinesPage() {
  const machines = await fetch("http://localhost:3000/api/machines", {
    method: "GET",
    cache: "no-store",
  }).then((res) => res.json());

  return (
    <div className="relative">
      <Link
        href="/dashboard"
        aria-label="Voltar ao Dashboard"
        className="fixed top-6 left-6 z-50 inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
      >
        <span className="text-xl">←</span>
      </Link>

      <MachinesTemplate machines={machines} />
    </div>
  );
}
