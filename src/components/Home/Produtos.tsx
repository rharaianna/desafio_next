import { TitleServices } from "../Title";
import CardProd from "./Card";


export default function Produtos() {
    return (
        <div>
            <TitleServices title={"Produtos"}/>
            <div className="flex flex-wrap space-x-6 justify-center">
            <CardProd src={"/colorphone.png"} alt={""} item={"telefone"} tamanho={"a"} valor={"w"} width={50} height={50}/>
            <CardProd src={"/colorphone.png"} alt={""} item={"telefone"} tamanho={"a"} valor={"w"} width={50} height={50}/>
            <CardProd src={"/colorphone.png"} alt={""} item={"telefone"} tamanho={"a"} valor={"w"} width={50} height={50}/>
            </div>
        </div>
    )
}