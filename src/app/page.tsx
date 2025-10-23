"use client";

// import { useState } from "react";
// import Button from "../components/atoms/Button";
// import Input from "../components/atoms/Input";
// import FormCheckbox from "../components/molecules/FormCheckbox";
// import Label from "../components/atoms/Label";
import RegistrationForm from "../components/organism/RegistrationForm";
import LoginForm from "../components/organism/LoginForm";

export default function Home() {

  // Código de alguém abaixo (comentei para deixar apenas o formulário de cadastro na página)

  // const [text, setText] = useState("");
  // const [aceite, setAceite] = useState(false);

  // const getClick = () => {
  //   alert(`texto: ${text} | termos: ${aceite}`);
  // };

  return (
    // <div className="flex justify-center mt-12">
    //   <label className="block text-sm font-medium text-gray-800">
    //       Digite algo
    //       <div className="mt-1">
    //         <Input value={text} onChange={setText} placeholder="Digite algo aqq" />
    //       </div>
    //     </label>
    // </div>
    
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <LoginForm/>
    </div>

  );
}
