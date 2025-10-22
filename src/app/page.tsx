"use client";

import { useState } from "react";
import Button from "../components/atoms/Button";
import Input from "../components/atoms/Input";

export default function Home() {
  const [text, setText] = useState("");

  const getClick = () => {
    alert("texto: " + text);
  };

  return (
    <div className="flex justify-center mt-12">
      <Input
        value={text}
        onChange={setText}
        placeholder="Digite algo aqq"
      />
      <Button type="button" label="Clique aqui" onClick={getClick} />

    </div>
  );
}
