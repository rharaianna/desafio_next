
interface TitleServicesProps {
    title: string
}
export function TitleServices ({title}:TitleServicesProps){
    return(
        <div
        className="text-6xl mt-32"
        > {title}</div>
    )
}