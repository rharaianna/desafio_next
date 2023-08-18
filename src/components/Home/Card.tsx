import Image from "next/image";

interface CardProdProp{
    src: string
    alt: string
    item: string
    tamanho: string
    valor: string
    width: number
    height: number
}

export default function CardProd ({src, alt,item,width, height, tamanho,valor}:CardProdProp){
    return(
    <div className="bg-amarelo flex md:flex-col shadow-sm p-3">
        <div className="shadow-inner">
            <Image src={src} alt={alt} width={width} height={height} />      
        </div>
        <div>
            <div className="flex">
                <p>Item:</p>
                <p> {item} </p>
            </div>
            <div className="flex">
                <p>Tamanho:</p>
                <p> {tamanho} </p>
            </div>
            <div className="flex">
                <p>Valor:</p>
                <p>R$ {valor}</p>
            </div>
        </div>
    </div>
    )
}