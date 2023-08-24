import Button from "@/components/Button";
import Table from "@/components/Gerenciamento/Table";
import { TitleServices } from "@/components/Title";

export default function Gerenciamento () {
    return (
        <div className="py-12 px-6 md:px-32 space-y-4 md:space-y-20">
            <TitleServices title={"Gerenciamento"}/>
            <div className="flex justify-end">
                <Button text={"Adicionar Membro"} href={"#"}/>
            </div>
            <Table></Table>

        </div>
    )
}