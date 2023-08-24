import { TitleServices } from "../Title";
import CardProd from "./Card";


export default function Produtos() {
    return (
        <div>
            <div className="pb-12">
                <TitleServices title={"Produtos"}/>
            </div>
            <div className="flex flex-wrap gap-5 md:px-28 justify-center">
            
            <CardProd src={"/coelho.png"} alt={""} item={"telefone"} tamanho={"a"} valor={"w"} />
            <CardProd src={"/coelho.png"} alt={""} item={"telefone"} tamanho={"a"} valor={"w"} />
            <CardProd src={"/coelho.png"} alt={""} item={"telefone"} tamanho={"a"} valor={"w"} />
            <CardProd src={"/coelho.png"} alt={""} item={"telefone"} tamanho={"a"} valor={"w"} />
            <CardProd src={"/coelho.png"} alt={""} item={"telefone"} tamanho={"a"} valor={"w"} />
            <CardProd src={"/coelho.png"} alt={""} item={"telefone"} tamanho={"a"} valor={"w"} />
            
            </div>
        </div>
    )
}