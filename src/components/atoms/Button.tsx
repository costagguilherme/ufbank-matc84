interface ButtonProps {
  type?: "button" | "submit" | "reset";
  label: string;
  onClick?: () => void;
}

export default function Button({ type = "button", label, onClick }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-500 transition-colors"
    >
      {label}
    </button>
  );
}
