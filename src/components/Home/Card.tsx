import Image from "next/image";
import Link from "next/link";

interface CardProdProp{
    src: string
    alt: string
    item: string
    tamanho: string
    valor: string

}

export default function CardProd ({src, alt,item, tamanho,valor}:CardProdProp){
    return(
    <Link href={"#"} className="bg-amarelo hover:brightness-110 hover:scale-105 flex md:flex-col shadow-lg p-3 rounded-lg">
        <div className="shadow-inner rounded-lg w-fit">
            <Image src={src} alt={alt} width={150} height={150} />      
        </div>
        <div>
            <div className="flex justify-center font-semibold py-2 text-center">
                <p> {item} </p>
            </div>
            <div className="flex p-3 justify-between">
                <div>
                    <p >Tamanho:</p>
                    <p>Valor:</p>
                </div>
                <div >
                    <p className="text-end">{tamanho}</p>
                    <p>R$ {valor}</p>
                </div>
            </div>
        </div>
    </Link>
    )
}


interface CardMembProp{
    nome: string
    src: string
    alt: string
    cargo: string
    email: string

}

export function CardMemb ({src, alt,nome, cargo, email}:CardMembProp){
    return(
    <div className="bg-cinza hover:brightness-110 hover:scale-105 p-3 flex md:flex-col md:w-48 shadow-lg  rounded-lg">
    
        <div className="flex justify-center items-center">
            <Image className="relative w-16 h-16 rounded-full shadow-inner " src={src} alt={alt} width={60} height={60}/>
            <div className="absolute bg-rosa rounded-full w-16 h-16 opacity-50"/>
        </div>
        <div>
            <div className="flex flex-col justify-start md:justify-center py-2 m-3 md:text-center text-left">
                <p className="font-semibold pb-3 "> {nome} </p>
                <p>{cargo}</p>
                <p className="overflow-clip text-xs">{email}</p>
            </div>
            <div>
                    
            </div>
        </div>
    </div>
    )
}