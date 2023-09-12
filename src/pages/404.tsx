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
        <div>
            <div className=" min-h-full">
                <Image className="fixed top-12 -z-20 md:w-[25%] left-0 ctt:-left-5" src={"/Group 18.png"}  width={150} height={100}  alt={""}/>
                <Image className="fixed top-12 -z-20 md:w-[25%] right-0 ctt:-right-5 " src={"/Group 19.png"} width={150} height={100} alt={""}/>
                <div className="m-10  flex flex-col md:space-y-10 space-y-2 text-center items-center justify-center">
                    <TitleServices title={"Opps..."}/>
                    <TitleServices title={"Não conseguimos encontrar esta página"}/>
                    <Image unoptimized className="md:w-32  hover:rotate-45 " src={"/Botão Triste.png"} alt={""} width={"60"} height={"60"}/>
                    <div className=" hover:scale-90 pt-6">
                        
                        <Button text={"Ir para a página inicial "} href={"/"}/>
                    </div>
                </div>
                
            </div>
        </div>
        </>
    )
}