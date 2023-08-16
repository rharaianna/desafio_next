import Image from "next/image";
import { TextServices } from "../Text";
import { TitleServices } from "../Title";

export default function AboutMe() {
    return (
        <>
        <img src="../botão2.png"/>
        <TitleServices
            title={"Feito com amor, ponto a ponto"}/>
        
        <TextServices text={"A AmiCrafts é especializada em criar brinquedos de pelúcia artesanais que são projetados com cuidado e atenção aos detalhes. Cada brinquedo é feito com amor, ponto por ponto, usando materiais de alta qualidade e design criativo"}/>
        <Image src="/botao1.png" width={"284"} height={"245"} unoptimized alt={""}/>
        <Image src="/cores.png" width={"1300"} height={"53"} unoptimized alt={"Separação de campos, sobre mim e Produtos"}/>
        </>
        )}