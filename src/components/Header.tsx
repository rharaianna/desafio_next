import Image from "next/image";
import Link from "next/link";
import { Kumbh_Sans } from 'next/font/google';

const kumbhsans = Kumbh_Sans ({
    subsets: ['latin'],
    weight:'500',
})

const kumbhsansBold = Kumbh_Sans ({
    subsets: ['latin'],
    weight:'700',
})

export default function Header() {
    return (
        <header className={`${kumbhsansBold.className} bg-cinza text-md flex py-3 px-5 justify-between items-center sticky top-0 z-20`}>
            
                <Link href={"/"}>
                    <Image src="/logoext.png" width={170} height={55} alt="Logo da AmiCrafts"/>
                </Link>
                
                <nav className={`${kumbhsans.className} hidden md:flex items-center gap-10 text-md`}>
                    <Link href={"/"}>Home</Link>
                    <Link href={"/contato"}>Contato</Link>
                    <Link href={"/membros"}>Membros</Link>
                    <Link href={"/gerenciamento"}>Login</Link>
                    <Link href={"/"}>Logout</Link>
                </nav>
            
        </header>

    )}
