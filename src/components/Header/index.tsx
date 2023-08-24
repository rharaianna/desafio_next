import Image from "next/image";
import Link from "next/link";
import { Kumbh_Sans } from 'next/font/google';
import { Menu } from "./menu";
import { useCallback, useState } from "react";
import { MenuIcon } from "../Icons/MenuIcon";

const kumbhsans = Kumbh_Sans ({
    subsets: ['latin'],
    weight:'500',
})

const kumbhsansBold = Kumbh_Sans ({
    subsets: ['latin'],
    weight:'700',
})

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const openMenu = useCallback (() => {
        setIsMenuOpen(true);
    },[])
    
    const closeMenu = useCallback (() => {
        setIsMenuOpen(false);
    },[])
    return (
        <header className={`${kumbhsansBold.className} bg-cinza text-md flex py-3 px-5 justify-between items-center sticky top-0 z-20`}>
            
                <Link href={"/"}>
                    <Image src="/logoext.png" width={100} height={100} className="md:w-36" alt="Logo da AmiCrafts"/>
                </Link>
                <button className="p-1 md:hidden" onClick={openMenu}>
                    <MenuIcon className="fill-black w-6 h-6"/>
                </button>
                <nav className={`${kumbhsans.className} hidden md:flex items-center gap-6 text-md`}>
                    <Link className="hover:bg-rosa hover:shadow-md py-1 px-4 rounded-xl" href={"/"}>Home</Link>
                    <Link className="hover:bg-amarelo hover:shadow-md py-1 px-4 rounded-xl" href={"/contatos"}>Contato</Link>
                    <Link className="hover:bg-verde hover:shadow-md py-1 px-4 rounded-xl" href={"/membros"}>Membros</Link>
                    <Link className="hover:bg-cinzaEsc hover:shadow-md py-1 px-4 rounded-xl" href={"login"}>Login</Link>
                    <Link className="hover:bg-cinzaEsc hover:shadow-md py-1 px-4 rounded-xl" href={"/"}>Logout</Link>
                </nav>
                <Menu isVisible={isMenuOpen} onClose={closeMenu}/>
        </header>

    )}
