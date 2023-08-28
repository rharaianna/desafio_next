import Link from "next/link";
import { TextServices } from "./Text";
import { TitleServices } from "./Title";
import Image from "next/image";


export default function Footer() {
    return (
            <div className=" bg-cinza text-md flex py-3 px-5 justify-between items-center bottom-0 z-20">
                <div className="flex flex-col justify-center md:flex-row gap-5">
                    <img className="w-20 h-11" src="/nomelogo.png" alt="Logo Amicraft" />
                    <p className="w-52 text-sm text-center">Empresa espeicalizada na criação de Amigurumis de Crochet</p>
                </div>
                <div>
                    <h1 className="text-center font-bold pb-3">Contatos</h1>
                    <div className="flex items-center gap-5 text-md">
                        <Link href={"#"}>
                            <Image width={30} height={30} src={"/instagram.png"} alt={"Instagram da AmiCrafts"}/>
                        </Link>
                        <Link href={"#"}>
                            <Image width={30} height={30} src={"/mail.png"} alt={"Instagram da AmiCrafts"}/>
                        </Link>
                        <Link href={"#"}>
                            <Image width={18} height={30} src={"/phone.png"} alt={"Instagram da AmiCrafts"}/>
                        </Link>
                    </div>
                </div>
            </div>
    )}