import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
    href: string;
    children: ReactNode;
    variant?: "primary" | "secondary";
    className?: string;
}

export function DefaultButton({
    href,
    children,
    variant = "primary",
    className = "",
}: ButtonProps) {
    const base = "px-6 py-3 rounded-lg transition-colors";
    const variants = {
        primary: "bg-purple-600 text-white hover:bg-purple-700",
        secondary: "border border-gray-300 hover:bg-gray-100",
    };

    return (
        <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
            {children}
        </Link>
    );
}
