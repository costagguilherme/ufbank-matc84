"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import KeyMetrics from "src/components/organism/KeyMetrics";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [machines, setMachines] = useState([]);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);
  
  useEffect(() => {
    async function fetchMachines() {
      const res = await fetch("/api/machines");
      const data = await res.json();
      setMachines(data);
    }
    fetchMachines();
  }, []);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Carregando...
      </div>
    );
  }

  if (!session) return null;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="w-full max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Painel de Controle</h1>
        <KeyMetrics machines={machines} />
        <div className="mt-8 text-center">
            <Link href="/machines" className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-1 text-lg">
                Gestão de Máquinas de Pagamento
            </Link>
        </div>
      </div>
    </div>
  );
}
