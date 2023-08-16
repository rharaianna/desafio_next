interface TextServicesProps {
    text: string
}
export function TextServices ({text}:TextServicesProps){
    return(
        <div
        className="text-2xl m-2"
        > {text}</div>
    )
}