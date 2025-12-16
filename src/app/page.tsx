"use client";

import { useRouter } from "next/navigation";
import Button from "../components/atoms/Button";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          UFBank Machine Portal
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Control, monitor, and manage your machine assets with ease.
        </p>

        <div className="flex justify-center gap-4">
          <Button
            label="View All Machines"
            onClick={() => router.push("/machines")}
            variant="primary"
          />
          <Button
            label="Register User"
            onClick={() => router.push("/register")}
            variant="secondary"
          />
        </div>
      </div>
    </div>
  );
}
