interface ButtonProps {
  type?: "submit" | "button";
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

export default function Button({ type = "submit", label, onClick, variant = "primary" }: ButtonProps) {
  const baseClasses = "px-6 py-3 font-semibold rounded-lg shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-1";
  
  const primaryClasses = "bg-gray-800 text-white hover:bg-gray-900";
  const secondaryClasses = "bg-white text-gray-800 border border-gray-800 hover:bg-gray-100";

  const classes = `${baseClasses} ${variant === "primary" ? primaryClasses : secondaryClasses}`;

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
    >
      {label}
    </button>
  );
}
