import Link from "next/link";
import { TextServices } from "./Text";
import { TitleServices } from "./Title";


export default function Footer() {
    return (
            <div className=" bg-cinza text-md flex py-3 px-5 justify-between items-center bottom-0 z-20">
                <div className="md:flex flex-row gap-5">
                    <img className="w-20 h-11" src="/nomelogo.png" alt="Logo Amicraft" />
                    <p className="w-52 text-sm text-center">Empresa espeicalizada na criação de Amigurumis de Crochet</p>
                </div>
                <div>
                    <h1>Contato</h1>
                    <div className="flex items-center gap-10 text-md">
                        <Link href={"#"}>
                            <img src="/instagram.png" alt="Instagram da AmiCrafts"/>
                        </Link>
                        <Link href={"#"}>
                            <img src="/mail.png" alt="Email da AmiCrafts"/>
                        </Link>
                        <Link href={"#"}>
                            <img src="/phone.png" alt="Telefone da AmiCrafts"/>
                        </Link>
                    </div>
                </div>
            </div>
    )}