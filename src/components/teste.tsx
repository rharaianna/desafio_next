
interface inputProps {
    title:string
    type: string
    name: string
    placeholder: string
    value:any
    onChange:any
}
export default function InputServices ({title,type,name,placeholder,value,onChange}:inputProps){
    return(
        <div>
            <div className="font-semibold pb-2"> {title}</div>
            <input className="p-3 rounded-lg  shadow-md"
                    type= {type} // Tipo de dado que será inserido e validado no input
                    name={name} // Nome do input para o javascript reconhecer os valores
                    placeholder={placeholder}
                    value={value} // Mostra valores originais do membro
                    onChange={onChange} // Captura as mudanças de valor
            />
                
        </div>
    )
}