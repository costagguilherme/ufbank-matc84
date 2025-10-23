import Button from "../atoms/Button";

interface FormButtonProps {
  label: string;
  onClick?: () => void;
  type?: "submit";
}

export default function FormButton({ label, onClick, type = "submit" }: FormButtonProps) {
  return <Button type={type} label={label} onClick={onClick} />;
}