interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}

export default function Input({ value, onChange, placeholder, type = "text", required = true }: InputProps) {

  function validateNumbers(e: React.ChangeEvent<HTMLInputElement>) {
    let val = e.target.value;

    if (type === "cpf") {
      val = val.replace(/\D/g, "");
    }

    onChange(val);
  }

  function getMaxLength(inputType: string) {
    const types: { [key: string]: number } = {
      cpf: 11,
      email: 50,
      password: 25,
    };

    return types[inputType];   
  }

  return (
    <input
      type={type}
      value={value}
      onChange={validateNumbers}
      placeholder={placeholder}
      required={required}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all duration-200"
      maxLength={getMaxLength(type)}
    />
  );
}
