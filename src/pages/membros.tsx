import { CardMemb } from "@/components/Home/Card";
import { TitleServices } from "@/components/Title";

export default function Membros (){
    return (
        <div className="py-12 px-6 md:px-32 space-y-10 md:space-y-20">
            <TitleServices title={"Membros"}/>
            <div className="flex flex-wrap gap-5 md:px-32 justify-center">
                <CardMemb nome={"Ana Maria"} src={"/ana.png"} alt={""} cargo={"Designer"} email={"aa@gmail.com"} />
                <CardMemb nome={"Ana Maria"} src={"/ana.png"} alt={""} cargo={"Designer"} email={"aa@gmail.com"} />
                <CardMemb nome={"Ana Maria"} src={"/ana.png"} alt={""} cargo={"Designer"} email={"aa@gmail.com"} />
                <CardMemb nome={"Ana Maria"} src={"/ana.png"} alt={""} cargo={"Designer"} email={"aa@gmail.com"} />
                <CardMemb nome={"Ana Maria"} src={"/ana.png"} alt={""} cargo={"Designer"} email={"aa@gmail.com"} />
                <CardMemb nome={"Ana Maria"} src={"/ana.png"} alt={""} cargo={"Designer"} email={"aa@gmail.com"} />
            </div>
        </div>
    )
}