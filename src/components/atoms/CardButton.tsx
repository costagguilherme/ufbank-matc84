interface CardButtonProps {
  label: string;
  onClick?: () => void;
}

export default function CardButton({ label, onClick }: CardButtonProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="text-purple-600 hover:text-purple-800 font-medium text-sm transition"
    >
      {label}
    </button>
  );
}
