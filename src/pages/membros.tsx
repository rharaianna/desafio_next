"use client"
import { CardMemb } from "@/components/Home/Card";
import { BackPage } from "@/components/Icons/BackPage";
import { NextPage } from "@/components/Icons/NextPage";
import { TitleServices } from "@/components/Title";
import { useEffect, useState } from "react";

const API_URL = "http://localhost:3001/membros";

type Membro = {
  userId: number,
  id: number,
  name: string,
  email: string,
  aniversario: string,
  cargo: string,
  completed: boolean,
}

  
export default function Membros (){


    const [membros, setMembros] = useState<Membro[]>([]);
    const membrosppag = 10
    const [paginaAtual, setPaginaAtual] = useState<number>(1);
    const paginaTotal = Math.ceil(membros.length / membrosppag)

    const getMembros = async () => {
    const res = await fetch("http://localhost:3001/membros");
    
      
        if (!res.ok) {
          console.error("Erro ao buscar membros");
        }
      
        // Converte a resposta JSON em uma lista de membros.
        const data: Membro[] = await res.json();
      
        // Atualiza o estado com a lista de membros obtida.
        setMembros(data);
      };
      
      // Efeito colateral executado quando o componente é montado.
      // Chama a função getMembros para buscar membros da API.
      useEffect(() => {
        getMembros();
      }, []);
    return (
        <div className="py-12 px-6 md:px-32 space-y-10 md:space-y-20">
            <TitleServices title={"Membros"}/>
            <div className="flex flex-wrap gap-5 md:px-32 justify-center">
                {membros.slice((paginaAtual-1) * membrosppag, paginaAtual * membrosppag)?.map((membro) => (
                <>
                <CardMemb nome={membro.name} src={"/ana.png"} alt={""} cargo={membro.cargo} email={membro.email} />
                </>
                ))}
            </div>
            <div>
        <div className="flex justify-center">
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
      
    </div>
    )
}