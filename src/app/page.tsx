"use client";

import { useState } from "react";
import Button from "../components/atoms/Button";
import Input from "../components/atoms/Input";
import Checkbox from "../components/atoms/Checkbox";

export default function Home() {
  const [text, setText] = useState("");
  const [aceite, setAceite] = useState(false);

  const getClick = () => {
    alert(`texto: ${text} | termos: ${aceite}`);
  };

  return (
    <div className="flex justify-center mt-12">
      <label className="block text-sm font-medium text-gray-800">
          Digite algo
          <div className="mt-1">
            <Input value={text} onChange={setText} placeholder="Digite algo aqq" />
          </div>
        </label>

      <label className="flex items-center gap-2 text-sm text-gray-800">
          <Checkbox checked={aceite} onChange={setAceite} />
          Aceito os termos de uso
        </label>
      
      <Button type="button" label="Clique aqui" onClick={getClick} />

    </div>
  );
}
