import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
    return (
        <div className="py-12 px-6 ctt:h-[72vh] md:h-[84vh] md:px-32 items-center space-y-10 flex flex-col">
            <Image src={"/Login.png"} alt={"Logo login"} width={120} height={120}/>
            <div className="bg-cinza shadow-md rounded-xl">
                
                    <div className="flex flex-col md:flex-row pt-12 px-12 md:space-x-10 md:justify-between">
                        <div className="pb-12 font-bold text-center">
                            <p>Email</p>
                            <input className="rounded-xl bg-amarelo shadow-sm"></input>
                        </div>
                        <div className="pb-12 font-bold text-center">
                            <p>Senha</p>
                            <input type="password" className="rounded-xl bg-amarelo shadow-sm"></input>
                        </div>
                    </div>
                    <div className="items-center flex justify-center pb-6">
                        <Button text={"Entrar"} href={"/gerenciar"}/>
                    </div>
                
            </div>
        </div>
    )}