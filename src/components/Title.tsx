
import { Kumbh_Sans } from 'next/font/google';
const kumbhsansBold = Kumbh_Sans ({
    subsets: ['latin'],
    weight:'700',
})
interface TitleServicesProps {
    title: string
}
export function TitleServices ({title}:TitleServicesProps){
    return(
        <div
        className={`${kumbhsansBold.className} text-xl md:text-4xl flex justify-center`}
        > {title}</div>
    )
}