import Link from "next/link";
import { ReactNode } from "react";


export function NavLink({ href, children }: { href: string; children: ReactNode }) {
    return (
        <Link href={href} className="text-gray-700 hover:text-purple-700">
            {children}
        </Link>
    );
}