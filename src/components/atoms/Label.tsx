type LabelProps = {
  text: string;
  htmlFor?: string;
  required?: boolean;
  className?: string;
};

export default function Label({ text, htmlFor, required, className }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-left text-sm font-medium text-gray-900 mb-1 ${className ?? ""}`}
    >
      {text}
      {required && <span className="text-red-600 ml-0.5">*</span>}
    </label>
  );
}
