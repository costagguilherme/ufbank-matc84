type CheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  id?: string;
  disabled?: boolean;
  className?: string;
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
      className={`h-5 w-5 rounded border-gray-300 focus:ring-2 focus:ring-purple-400 ${
        disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"
      } accent-purple-600 ${className ?? ""}`}
    />
  );
}
