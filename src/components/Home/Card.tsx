import Image from "next/image";

interface CardProdProp{
    src: string
    alt: string
    item: string
    tamanho: string
    valor: string

}

export default function CardProd ({src, alt,item, tamanho,valor}:CardProdProp){
    return(
    <div className="bg-amarelo flex md:flex-col shadow-lg p-3 rounded-lg">
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
    </div>
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
    <div className="bg-cinza flex md:flex-col md:w-40 shadow-lg p-3 rounded-lg">
        <div className=" shadow-inner rounded-full w-16 relative">
            <Image src={src} alt={alt} width={60} height={60} objectFit={"contain"}/>      
        </div>
        <div className="absolute bg-rosa left-0 right-0">

        </div>
        <div>
            <div className="flex flex-col justify-center  py-2 text-center">
                <p className="font-semibold pb-3"> {nome} </p>
                <p>{cargo}</p>
                <p>{email}</p>
            </div>
            <div>
                    
            </div>
        </div>
    </div>
    )
}