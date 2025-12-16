"use client";

import MachinesTemplate from "src/components/templates/MachinesTemplate";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function MachinesPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [machines, setMachines] = useState([]);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  useEffect(() => {
    if (status !== "authenticated") return;

    async function fetchMachines() {
      const res = await fetch("/api/machines");
      const data = await res.json();
      setMachines(data);
    }

    fetchMachines();
  }, [status]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Carregando...
      </div>
    );
  }

  if (!session) return null;

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
