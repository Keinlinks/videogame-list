import Link from "next/link";


export default function Header(){
    return (
        <div className="h-28 bg-white dark:bg-gray-800 px-6 py-8 ring shadow-xl flex ring-gray-900/5 ">
            <Link href="/">
            <h1 className="text-2xl font-bold h-full">Videogames API</h1>
            </Link>
        </div>
    )   
}