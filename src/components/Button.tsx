import Link from "next/link"
import { CopyIcon } from "./Icons/CopyIcon"

interface ButtonProps {
    text: string
    href: string
    type?:string
    onClick?:any
}

export default function Button({text, href, type, onClick}:ButtonProps) {
    return (
        <Link className="bg-rosa hover:scale-90 rounded-2xl shadow-md w-fit p-3" href={href} type={type} onClick={onClick}>
            {text}
        </Link>
    )}


interface CopyButtonProps{
    textToCopy: string;
}

export const CopyButton = ({textToCopy}:CopyButtonProps) => {
    const handleCopy = () => {
        navigator.clipboard.writeText(textToCopy)
    }
    return(
    <button onClick={handleCopy} className="inline-flex justify-center items-center w-3">
        <CopyIcon title="Clique aqui para copiar"/>
    </button>
    )
}