// components/atoms/Checkbox.tsx
type CheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  id?: string;            // opcional: para parear com Label (htmlFor)
  disabled?: boolean;     // opcional
  className?: string;     // opcional
};

export default function Checkbox({
  checked,
  onChange,
  id,
  disabled,
  className,
}: CheckboxProps) {
  return (
    <input
      id={id}
      type="checkbox"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      disabled={disabled}
      className={`h-4 w-4 rounded border-gray-300 focus:ring-2 focus:ring-blue-400 ${
        disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"
      } accent-blue-600 ${className ?? ""}`}
    />
  );
}
