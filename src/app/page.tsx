"use client";

import { useState } from "react";
import Button from "../components/atoms/Button";
import Input from "../components/atoms/Input";
import FormCheckbox from "../components/molecules/FormCheckbox";

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

      <FormCheckbox
        label="Aceito os termos de uso"
        checked={aceite}
        onChange={setAceite}
        required
      />
      
      <Button type="button" label="Clique aqui" onClick={getClick} />

    </div>
  );
}
