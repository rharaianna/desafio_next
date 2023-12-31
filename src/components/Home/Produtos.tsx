
import { useEffect, useState } from "react";
import { BackPage } from "../Icons/BackPage";
import { NextPage } from "../Icons/NextPage";
import { TitleServices } from "../Title";
import Link from "next/link";
import Image from "next/image";


type Produto = {
  id: number,
  imagem: string,
  name: string,
  tamanho: string,
  preco: string,
}

export default function Produtos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
    const membrosppag = 6
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
      console.log(produtos)
    }, []);

    return (
        <div className="mx-32">
            <div className="pb-12">
                <TitleServices title={"Produtos"}/>
            </div>

            <div className="flex flex-wrap gap-8 justify-center">
              {produtos.slice((paginaAtual-1) * membrosppag, paginaAtual * membrosppag).map((produto) => (
              <div className="" key={produto.id}>
                <Link href={"#"} className="bg-amarelo hover:brightness-110 hover:scale-105 flex justify-center flex-col shadow-lg p-3 rounded-lg ">
                   
                      <Image className="md:w-40  block m-auto pb-3" src={produto.imagem} width={"120"} height={"120"} alt={""}/>
                   
                    
                    <div>
                        <h3 className="flex justify-center font-semibold md:py-2 text-center truncate col-span-3">{produto.name}</h3>
                       
                        <div className="flex p-3 justify-center space-x-4">
                            <div>
                                <p >Valor:</p>
                                <p>Tamanho:</p>
                            </div>

                            <div >
                              <div className=" truncate  text-right col-span-3"> R$ {produto.preco}</div> 
                              <div className=" truncate text-right col-span-2"> {produto.tamanho}</div> 
                            </div>
                        </div>

                    </div>
                </Link>
              </div>
                      ))}
            </div>


            
            <div className="flex justify-center ">
              <div className="flex justify-center pt-10">
                <button className="bg-verde rounded-full p-1 disabled:bg-cinzaEsc disabled: verde"
                onClick={()=> setPaginaAtual((paginaAtual)=> Math.max(paginaAtual-1,1))}
                disabled={paginaAtual===1}
                >
                  <BackPage/>
                </button>
                <span className="px-3 w-32 text-center "> {paginaAtual} de {paginaTotal} </span>
                <button className="bg-verde rounded-full p-1 disabled:bg-cinzaEsc disabled: verde"
                 onClick={()=> setPaginaAtual((paginaAtual)=> Math.min(paginaAtual+1,paginaTotal))}
                 disabled={paginaAtual===paginaTotal}
                >
                  <NextPage/>
                </button>
              </div>
            </div>
        </div>

        
    )
}