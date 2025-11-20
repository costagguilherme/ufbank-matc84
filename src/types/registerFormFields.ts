type TextFieldKey = "nome" | "cpf" | "email" | "senha";

export type FormFieldConfig = {
  key: TextFieldKey;
  label: string;
  type?: "text" | "email" | "password" | "cpf";
  placeholder?: string;
  required?: boolean;
};

const formFields: FormFieldConfig[] = [
  { key: "nome",  label: "Nome completo", placeholder: "Digite seu nome", required: true },
  { key: "cpf",   label: "CPF",  type: "cpf", placeholder: "000.000.000-00", required: true },
  { key: "email", label: "Email", type: "email", placeholder: "exemplo@email.com", required: true },
  { key: "senha", label: "Senha", type: "password", placeholder: "********", required: true },
];

export default formFields;
