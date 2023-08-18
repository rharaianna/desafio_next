interface TextServicesProps {
    text: string
}
export function TextServices ({text}:TextServicesProps){
    return(
        <div
        className="text-base md:text-xl m-2"
        > {text}</div>
    )
}