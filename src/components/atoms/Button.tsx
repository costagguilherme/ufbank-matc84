interface ButtonProps {
  type?: "submit" | "button";
  label: string;
  onClick?: () => void;
}

export default function Button({ type = "submit", label, onClick }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-1"
    >
      {label}
    </button>
  );
}
