import { Logo } from "../atoms/Logo";
import { DefaultButton } from "../atoms/CustomButtom";
import { NavLink } from "../molecules/NavLink";


export function Header() {
    return (
        <header className="flex justify-between items-center px-8 py-4 shadow-sm sticky top-0 bg-white z-50">
            <Logo />
            <nav className="flex items-center gap-6">
                <NavLink href="#servicos">Serviços</NavLink>
                <NavLink href="#contato">Contato</NavLink>
                <NavLink href="/login">Entrar</NavLink>
                <DefaultButton href="/register">Cadastrar-se</DefaultButton>
            </nav>
        </header>
    );
}