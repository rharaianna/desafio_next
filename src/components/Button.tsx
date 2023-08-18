import Link from "next/link"

interface ButtonProps {
    text: string
    href: string
}

export default function Button({text, href}:ButtonProps) {
    return (
        <Link className="bg-rosa rounded-2xl shadow-md w-fit p-3" href={href}>
            {text}
        </Link>
    )}