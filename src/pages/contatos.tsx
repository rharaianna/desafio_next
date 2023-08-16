import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Contact from '@/components/Contact/ContactList'

const inter = Inter({ subsets: ['latin'] })

export default function Contatos() {
  return (
    <>
      <Head>
        <title> Contatos | Amicrafts </title>
      </Head>
      <div>
        <h1>Entre em contato</h1>
        <ul>
            <li>
                <Contact title={"Instagram"} text={"Para conhecer mais sobre os nossos últimos projetos, encontre-nos com o "} name={"@AmiCrafts"} href={"#"}/>
            </li>
            <li>
                <Contact title={"Email"} text={"Para encomendar algum projeto  específico mande uma mensagem para "} name={"amicrafts@encomendas.com"} href={"mailto:amicrafts@encomendas.com"}/>
            </li>
            <li>
                <Contact title={"Telefone"} text={"Para  esclarecer qualquer dúvida por um processo mais direto, ligue para"} name={"(11) 91234- 5678"} href={"callto:(11) 91234- 5678"}/>
            </li>
            <li>
                <Contact title={"Loja Física"} text={"Para conhecer melhor nossa equipe, visite o nosso atelier no endereço"} name={"Rua Abc, 123 - Bairro Alfabeto (Cidade Z, MG)"} href={"#"}/>
            </li>

        </ul>
      </div>

    
      <main>
        
      </main>
    </>
  )
}