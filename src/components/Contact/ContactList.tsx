interface ContactProps{
    title:string
    text: string
    name: string
    href:string
}

export default function Contact({title, text, name, href}: ContactProps) {
    return (
        <div className="pb-6">      
                <span className="font-bold">{title}</span>
                <p>{text}</p>
                <a href={href} className=" ">{name} </a>
      </div>
    )}