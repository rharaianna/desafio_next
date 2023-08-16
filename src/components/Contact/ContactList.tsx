interface ContactProps{
    title:string
    text: string
    name: string
    href:string
}

export default function Contact({title, text, name, href}: ContactProps) {
    return (
        <div>      
                <span>{title}</span>
                <p>{text}</p>
                <a href={href}>{name} </a>
      </div>
    )}