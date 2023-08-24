import Button from "../Button";

export default function Table (){
    return (
        <table className="mx-auto mb-44 mt-3 w-3/4 border-separate text-center border-spacing-0 rounded-xl">
            
                <thead className="bg-amarelo ">
                    <tr className=" flex gap-10">
                    <th>Nome</th>
                    <th>Cargo</th>
                    <th>Aniversário</th>
                    <th>Ações</th>
                    </tr>
                </thead>
                <tbody className="bg-cinza ">
                    <tr>
                        <td>Ana Maria</td>
                        <td>Designer</td>
                        <td>30/11</td>
                        <td>
                
                        </td>
                    </tr>
                    <tr>
                        <td>Ana Maria</td>
                        <td>Designer</td>
                        <td>30/11</td>
                        <td>
                
                        </td>
                    </tr>
                    <tr>
                        <td>Ana Maria</td>
                        <td>Designer</td>
                        <td>30/11</td>
                        <td>
                
                        </td>
                    </tr>
                </tbody>
            
        </table>
    )
}