import Link from "next/link";
import { TextServices } from "./Text";
import { TitleServices } from "./Title";
import Image from "next/image";
import { InstaIcon } from "./Icons/Insta";
import { MailIcon } from "./Icons/Mail";
import { PhoneIcon } from "./Icons/Phone";


export default function Footer() {
    return (
            <footer className=" bg-cinza text-md flex py-3 px-5 justify-between items-center bottom-0">
                <div className="flex flex-col justify-center md:flex-row gap-5">
                    <img className="w-20 h-11" src="/nomelogo.png" alt="Logo Amicraft" />
                    <p className="w-52 text-sm text-center">Empresa espeicalizada na criação de Amigurumis de Crochet</p>
                </div>
                <div>
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