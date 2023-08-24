import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Contact from '@/components/Contact/ContactList'
import { TitleServices } from '@/components/Title'

const inter = Inter({ subsets: ['latin'] })

export default function Contatos() {
  return (
    <>
      <Head>
        <title> Contatos | Amicrafts </title>
      </Head>
      <div className='py-12 px-6 md:px-32 space-y-10 md:space-y-10'>
        <TitleServices title={'Entre em contato'}></TitleServices>
        <div className=" flex justify-center">
          <Image src={'/colorphone.png'} alt={''} width={250} height={100}/>
          <ul className='bg-cinza rounded-r-lg p-6 shadow-md'>
              <li>
                  <Contact title={"Instagram"} text={"Para conhecer mais sobre os nossos últimos projetos, encontre-nos com o "} name={"@AmiCrafts"} href={"#"} clipboard={'@AmiCrafts'}/>
              </li>
              <li>
                  <Contact title={"Email"} text={"Para encomendar algum projeto  específico mande uma mensagem para "} name={"amicrafts@encomendas.com"} href={"mailto:amicrafts@encomendas.com"} clipboard={'amicrafts@encomendas.com'}/>
              </li>
              <li>
                  <Contact title={"Telefone"} text={"Para  esclarecer qualquer dúvida por um processo mais direto, ligue para"} name={"(11) 91234- 5678"} href={"callto:(11) 91234- 5678"} clipboard={'(11) 91234- 5678'}/>
              </li>
              <li>
                  <Contact title={"Loja Física"} text={"Para conhecer melhor nossa equipe, visite o nosso atelier no endereço"} name={"Rua Abc, 123 - Bairro Alfabeto (Cidade Z, MG)"} href={"#"} clipboard={'Rua Abc, 123 - Bairro Alfabeto (Cidade Z, MG)'}/>
              </li>
          </ul>
        </div>
      </div>

    
      <main>
        
      </main>
    </>
  )
}