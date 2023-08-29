
import { useState } from "react";
import { BackPage } from "../Icons/BackPage";
import { NextPage } from "../Icons/NextPage";
import { TitleServices } from "../Title";
import CardProd from "./Card";


export default function Produtos() {
    const membrosppag = 10
    const [paginaAtual, setPaginaAtual] = useState<number>(1);
    const paginaTotal = Math.ceil(30 / membrosppag)
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
            <CardProd src={"/coelho.png"} alt={""} item={"telefone"} tamanho={"a"} valor={"w"} />
            </div>
            
            
            <div className="flex justify-center pt-10">
            <button className="bg-verde rounded-full p-1 disabled:bg-cinzaEsc disabled: verde"
            onClick={()=> setPaginaAtual((paginaAtual)=> Math.max(paginaAtual-1,1))}
            disabled={paginaAtual===1}
            >
              <BackPage/>
            </button>
            <span className="px-3"> {paginaAtual} de {paginaTotal} </span>
            <button className="bg-verde rounded-full p-1 disabled:bg-cinzaEsc disabled: verde"
               onClick={()=> setPaginaAtual((paginaAtual)=> Math.min(paginaAtual+1,paginaTotal))}
               disabled={paginaAtual===paginaTotal}
            >
              <NextPage/>
            </button>
        </div>
        </div>
    )
}