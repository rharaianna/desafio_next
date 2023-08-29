
import { useEffect, useState } from "react";
import { BackPage } from "../Icons/BackPage";
import { NextPage } from "../Icons/NextPage";
import { TitleServices } from "../Title";
import CardProd from "./Card";
import Link from "next/link";

type Produto = {
  id: number,
  name: string,
  tamanho: string,
  preco: string,
}

export default function Produtos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
    const membrosppag = 10
    const [paginaAtual, setPaginaAtual] = useState<number>(1);
    const paginaTotal = Math.ceil(produtos.length / membrosppag)

    const getProdutos = async () => {
      const res = await fetch("http://localhost:3001/produtos");
    
      if (!res.ok) {
        console.error("Erro ao buscar Produtos");
      }
    
      // Converte a resposta JSON em uma lista de Produtos.
      const data: Produto[] = await res.json();
    
      // Atualiza o estado com a lista de Produtos obtida.
      setProdutos(data);
    };
    
    // Efeito colateral executado quando o componente é montado.
    // Chama a função getProdutos para buscar Produtos da API.
    useEffect(() => {
      getProdutos();
    }, []);

    return (
        <div>
            <div className="pb-12">
                <TitleServices title={"Produtos"}/>
            </div>
            <div className="flex flex-wrap gap-5 md:px-28 justify-center">
              <CardProd src={"/coelho.png"} alt={""} item={"telefone"} tamanho={"a"} valor={"w"} />
            </div>

            {produtos.slice((paginaAtual-1) * membrosppag, paginaAtual * membrosppag).map((produto) => (
            <div className="flex flex-wrap gap-5 md:px-28 justify-center bg-rosa" key={produto.id}>
              <Link href={"#"} className="bg-amarelo hover:brightness-110 hover:scale-105 flex md:flex-col shadow-lg p-3 rounded-lg">
                  <div className="shadow-inner rounded-lg w-fit">
                            imagem
                  </div>
                  <div>
                      <div className="flex justify-center font-semibold py-2 text-center">
                        <div className=" truncate col-span-3">{produto.name}</div>
                      </div>
              
                      <div className="flex p-3 justify-between">
                          <div>
                              <p >Tamanho:</p>
                              <p>Valor:</p>
                          </div>
                          <div >
                            <div className=" truncate col-span-3"> R$ {produto.preco}</div> {/* Exibe as informações dos produtos */}
                            <div className=" truncate  col-span-2"> {produto.tamanho}</div> {/* Exibe as informações dos produtos */}
                          </div>
                      </div>
                  </div>
              </Link>
            


            
          </div>
        ))}


            
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