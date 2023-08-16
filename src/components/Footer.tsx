import Link from "next/link";
import { TextServices } from "./Text";
import { TitleServices } from "./Title";


export default function Footer() {
    return (
            <div className="bg-cinza flex flex-row justify-between">
                <div className="flex flex-row">
                    <img className="w-20 h-11" src="/nomelogo.png" alt="Logo Amicraft" />
                    <p>Empresa espeicalizada na criação de Amigurumis de Crochet</p>
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