import Image from "next/image";
import { TextServices } from "../Text";
import { TitleServices } from "../Title";
import { Kumbh_Sans } from 'next/font/google';

const kumbhsansBold = Kumbh_Sans ({
    subsets: ['latin'],
    weight:'700',
})


export default function AboutMe() {
    return (
        <article className="flex flex-col justify-center items-center gap-4 text-center md:gap-10 ">
            <section className= {`${kumbhsansBold.className} text-5xl`}>
                <TitleServices title={"Feito com amor,"}/>
                <TitleServices title={"ponto a ponto"}/> 
            </section>
            <section className="lg:w-3/6 ">
                <TextServices  text={"A AmiCrafts é especializada em criar brinquedos de pelúcia artesanais que são projetados com cuidado e atenção aos detalhes. Cada brinquedo é feito com amor, ponto por ponto, usando materiais de alta qualidade e design criativo"}/>
            </section>

            <section className=" flex flex-col  justify-center gap-10 md:gap-11 items-center">
                <Image className=" w-1/3 md:w-1/5 justify-center items-center" src="/botao1.png" width={"284"} height={"245"} unoptimized alt={""}/>
            
                <Image className="lg:relative" src="/cores.png" width={"1300"} height={"53"} unoptimized alt={"Separação de campos, sobre mim e Produtos"}/>
             </section>
        </article>
        )}
