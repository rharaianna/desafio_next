//Projeto em Typescript para um CRUD de membros

'use client'

import { BackPage } from "@/components/Icons/BackPage";
import { DeleteIcon } from "@/components/Icons/Delete";
import { Edit } from "@/components/Icons/Edit";
import { NextPage } from "@/components/Icons/NextPage";
import { TitleServices } from "@/components/Title";
import InputServices from "@/components/teste";
import { useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';

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

export default function Home() {
  const [membros, setMembros] = useState<Membro[]>([]);
  const [newMembro, setNewMembro] = useState<Partial<Membro>>({}); // Tipo parcial, pois não temos todos os dados do membro
  const [editMemberId, setEditMemberId] = useState<number | null>(null); // Membro que está sendo editado
  const membrosppag = 10
  const [paginaAtual, setPaginaAtual] = useState<number>(1);
  const paginaTotal = Math.ceil(membros.length / membrosppag)

// https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating
// Função assíncrona para buscar membros da API.
const getMembros = async () => {
  const res = await fetch(API_URL);

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



// Função chamada ao enviar o formulário para criar um novo membro.
// Ela previne o comportamento padrão do evento, como o recarregamento da página.
const handleSubmit = async (event: React.FormEvent) => {
  event.preventDefault();

  // Envia uma requisição POST para a API com os detalhes do novo membro.
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newMembro),
  });

  // Exibe um aviso de sucesso usando toast.
  if (res.ok) {
    // Limpa o estado do novo membro e atualiza a lista após a criação.
    setNewMembro({});
    getMembros();
  } else {
    // Em caso de erro, exibe um aviso de erro usando toast.
    console.error("Erro ao criar membro");
  }
};



// Função chamada quando há uma mudança nos campos de entrada (input).
// Ela atualiza o estado do novo membro com os valores dos campos.
const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = event.target;
  setNewMembro((prevMembro) => ({ ...prevMembro, [name]: value }));
};



// Função para lidar com a ação de edição de um membro.
// Ela define o ID do membro que está sendo editado no estado.
const handleEdit = (memberId: number) => {
  setEditMemberId(memberId);
};



const handleSaveEdit = async (memberId: number) => {
  // Envia uma requisição PATCH para a API com os detalhes editados do membro.
  const res = await fetch(`${API_URL}/${memberId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newMembro),
  });

  // Exibe um aviso de sucesso usando toast.
  if (res.ok) {
    // Limpa a edição, e atualiza a lista de membros após salvar.
    setEditMemberId(null);
    setNewMembro({});
    getMembros();
  } else {
    // Em caso de erro, exibe um aviso de erro usando toast.
    console.error("Erro ao editar membro");
  }
};



const handleDelete = async (memberId: number) => {
  const confirmDelete = window.confirm('Tem certeza que deseja excluir o membro?');

  if (confirmDelete) {
    // Envia uma requisição DELETE para a API para excluir o membro.
    const res = await fetch(`${API_URL}/${memberId}`, {
      method: "DELETE",
    });

    // Exibe um aviso de sucesso usando toast.
    if (res.ok) {
      // Atualiza a lista de membros após excluir.
      getMembros();
    } else {
      // Em caso de erro, exibe um aviso de erro usando toast.
      console.error("Erro ao excluir membro");
    }
  }
};



  return (
    <div className="py-12 px-6 md:px-32 ">
      <TitleServices title={"Gerenciamento"}/>
      <form className="flex flex-wrap my-20 gap-5 justify-center py-5 p-2 bg-cinza rounded-lg shadow-md" onSubmit={handleSubmit}> {/* Formulário para adicionar membros */}
        <input
          className="bg-cinza"
          type="text" // Tipo de dado que será inserido e validado no input
          name="name" // Nome do input para o javascript reconhecer os valores
          placeholder="Nome"
          value={newMembro.name || ""} // Mostra valores originais do membro, caso não tenha valor, mostra vazio
                                      // no caso não terá valor, porque estamos criando um usuário novo
          onChange={handleInputChange} // Captura as mudanças de valor
        />
        <input
          className="bg-cinza"
          type="email" // Tipo de dado que será inserido e validado no input
          name="email" // Nome do input para o javascript reconhecer os valores
          placeholder="Email"
          value={newMembro.email || ""} // Mostra valores originais do membro, caso não tenha valor, mostra vazio
                                       // no caso não terá valor, porque estamos criando um usuário novo
          onChange={handleInputChange} // Captura as mudanças de valor
        />
        <input
          className="bg-cinza"
          type="text" // Tipo de dado que será inserido e validado no input
          name="aniversario" // Nome do input para o javascript reconhecer os valores
          placeholder="Aniversario"
          value={newMembro.aniversario || ""} // Mostra valores originais do membro, caso não tenha valor, mostra vazio
                                             // no caso não terá valor, porque estamos criando um usuário novo
          onChange={handleInputChange} // Captura as mudanças de valor
        />
        <input
          className="bg-cinza"
          type="text" // Tipo de dado que será inserido e validado no input
          name="cargo" // Nome do input para o javascript reconhecer os valores
          placeholder="Cargo"
          value={newMembro.cargo || ""} // Mostra valores originais do membro, caso não tenha valor, mostra vazio
                                       // no caso não terá valor, porque estamos criando um usuário novo
          onChange={handleInputChange} // Captura as mudanças de valor
        />
        <button className="bg-rosa hover:scale-90 rounded-2xl shadow-md w-fit p-3" type="submit">Criar Membro</button>
      </form>
      

      <div className="relative overflow-x-auto">
  <table className="w-full">
    <thead className="bg-amarelo text-left">
      <tr className="py-3">
        <th scope="col" className="w-20 p-5">#</th>
        <th scope="col" className="w-32 p-5">nome</th>
        <th scope="col" className="w-96 p-5">email</th>
        <th scope="col" className="w-20 p-5">aniversário</th>
        <th scope="col" className="w-28 p-5">cargo</th>
        <th scope="col" className="w-40 text-center">ações</th>
      </tr>
    </thead>
    <tbody className="text-left text-sm">
      {membros.slice((paginaAtual - 1) * membrosppag, paginaAtual * membrosppag).map((membro) => (
        <tr key={membro.id} className="bg-cinza px-8 pb-5 rounded-b-lg items-center gap-2 space-y-3">
          <td className="w-20 p-5">{membro.id}</td>
          <td className="w-32 p-5">{membro.name}</td>
          <td className="w-96 p-5">{membro.email}</td>
          <td className="w-20 p-5">{membro.aniversario}</td>
          <td className="w-28 p-5">{membro.cargo}</td>
          <td className="flex flex-col justify-end items-center gap-2 col-span-2 w-40">
            <button className="bg-rosa hover:scale-90 rounded-2xl shadow-md w-fit p-3" onClick={() => handleDelete(membro.id)}>
              <DeleteIcon/>
            </button>
            <button className="bg-rosa hover:scale-90 rounded-2xl shadow-md w-fit p-3" onClick={() => handleEdit(membro.id)}>
              <Edit/>
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

      <div className="flex justify-center pt-10">
            <button className="bg-verde hover:scale-125 disabled:scale-100 rounded-full p-1 disabled:bg-cinzaEsc disabled: verde"
            onClick={()=> setPaginaAtual((paginaAtual)=> Math.max(paginaAtual-1,1))}
            disabled={paginaAtual===1}
            >
              <BackPage/>
            </button>
            <span className="px-3"> {paginaAtual} de {paginaTotal} </span>
            <button className="bg-verde hover:scale-125 disabled:scale-100 rounded-full p-1 disabled:bg-cinzaEsc disabled: verde"
               onClick={()=> setPaginaAtual((paginaAtual)=> Math.min(paginaAtual+1,paginaTotal))}
               disabled={paginaAtual===paginaTotal}
            >
              <NextPage/>
            </button>
        </div>
    </div>
  );
}