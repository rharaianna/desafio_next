import Link from "next/link";
import Image from "next/image";
import { InstaIcon } from "./Icons/Insta";
import { MailIcon } from "./Icons/Mail";
import { PhoneIcon } from "./Icons/Phone";


export default function Footer() {
    return (
            <footer className=" bg-cinza text-md flex py-3 px-5 md:px-10 justify-between items-center ctt:items-start bottom-0">
                <div className="flex flex-col md:flex-row gap-5">
                    <Image className=" block m-auto md:w-28 md:h-16" src="/nomelogo.png" alt="Logo Amicraft" width={80} height={44} unoptimized />
                    <p className="w-52 ctt:w-32 text-sm  text-center">Empresa espeicalizada em Amigurumis de Crochet</p>
                </div>
                <div >
                    <h1 className="text-center font-bold pb-3">Contatos</h1>
                    <div className="flex items-center gap-5 text-md">
                        <Link href={"#"}>
                            <InstaIcon/>
                        </Link>
                        <Link href={"#"}>
                            <MailIcon/>
                        </Link>
                        <Link href={"#"}>
                            <PhoneIcon/>
                        </Link>
                    </div>
                </div>
            </footer>
    )}