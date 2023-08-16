import  Head  from "next/head";
import Link from "next/link";

export default function NotFound() {
    return (
        <>
        <Head>
            <title> 404 | AmiCrafts </title>
        </Head>
        <div>
            <h1> Opps</h1>
            <h2>Não conseguimos encontrar esta página</h2>
            <div>
                
                <Link href={"/"}> Ir para a página inicial </Link>         
            </div>
        </div>
        </>
    )
}