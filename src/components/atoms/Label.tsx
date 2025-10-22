// components/atoms/Label.tsx
type LabelProps = {
  text: string;
  htmlFor?: string;      // opcional
  required?: boolean;    // opcional: mostra "*"
  className?: string;
};

export default function Label({ text, htmlFor, required, className }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-sm font-medium text-gray-800 ${className ?? ""}`}
    >
      {text}
      {required && <span className="text-red-600 ml-0.5">*</span>}
    </label>
  );
}
