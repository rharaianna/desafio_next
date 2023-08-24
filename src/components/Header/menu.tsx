import Image from "next/image"
import Link from "next/link"
import { MenuCloseIcon } from "../Icons/CloseMenu"

interface MenuProps {
    isVisible: boolean;
    onClose: () => void;
}

export const Menu = ({isVisible,onClose}:MenuProps) => {
    return(
        <div className={`${isVisible ? 'flex' : 'hidden'}
            fixed inset-0 w-full h-full bg-rosa bg-opacity-40 backdrop:blur-md md:hidden
        `}
            onClick={onClose}
        >
            <div className="w-full bg-cinza h-72 shadow-md py-4 px-5"
                onClick={(e)=> e.stopPropagation()}
            >
                <div className="flex justify-between mb-5">
                    <Link href={"/"}>
                        <Image src={"/logoext.png"} width={100} height={100} alt={""}/>
                    </Link>
                    <button onClick={onClose}>
                        <MenuCloseIcon className="w-6 h-6"/>
                    </button>
                </div>
                <nav className="flex flex-col gap-5 text-xl p-5 items-center">
                    <Link onClick={onClose} href={"/"}>Home</Link>
                    <Link onClick={onClose} href={"contatos"}>Contato</Link>
                    <Link onClick={onClose} href={"membros"}>Membros</Link>
                    <Link onClick={onClose} href={"login"}>Login</Link>
                </nav>
            </div>
        </div>
    )
}