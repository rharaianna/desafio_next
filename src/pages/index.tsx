import Image from 'next/image'
import Head from 'next/head'
import AboutMe from '@/components/Home/AboutMe'
import Produtos from '@/components/Home/Produtos'


export default function Home() {
  return (
    <>
      <Head>
        <title> Home | Amicrafts </title>
        <meta
          name='description'
          content='A AmiCrafts é especializada em criar brinquedos de pelúcia artesanais que são projetados com cuidado e atenção aos detalhes.'
        />
      </Head>
    
      <div className='py-12 px-6 md:px-32 space-y-10 md:space-y-20'>
        <AboutMe/>
        <Produtos/>
      </div>
    </>
  )
}
