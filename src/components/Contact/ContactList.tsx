import { CopyButton } from "../Button"

interface ContactProps{
    title:string
    text: string
    name: string
    href:string
    clipboard:string
}

export default function Contact({title, text, name, href, clipboard}: ContactProps) {
    return (
        <div className="pb-6">      
                <span className="font-bold">{title}</span>
                <p>{text}</p>
                <a href={href}>{name} </a>
                <CopyButton textToCopy={clipboard}/>
      </div>
    )}