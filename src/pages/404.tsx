import Button from "@/components/Button";
import { TitleServices } from "@/components/Title";
import  Head  from "next/head";
import Image from "next/image";
import Link from "next/link";


export default function NotFound() {
    return (
        <>
        <Head>
            <title> 404 | AmiCrafts </title>
        </Head>
        <div className="m-10 flex flex-col space-y-2 text-center items-center justify-center">
            <TitleServices title={"Opps"}/>
            <TitleServices title={"Não conseguimos encontrar esta página"}/>
            <Image src={"/Botão Triste.png"} alt={""} width={"60"} height={"60"}/>
            <Button text={"Ir para a página inicial "} href={"/"}/>   
            
        </div>
        </>
    )
}