"use client";

import { LoginTemplate } from "../components/templates/LoginTemplate";
import { RegistrationTemplate } from "../components/templates/RegistrationTemplate";

export default function Home() {

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <RegistrationTemplate/>
    </div>

  );
}
