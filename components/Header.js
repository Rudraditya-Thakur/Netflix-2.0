import Image from "next/image"
import { useRouter } from "next/router"
import requests from "../utils/requests"

function Header() {
    const router = useRouter();
    return (
        <div>
            <header className="flex flex-col sm:flex-row justify-between items-center h-80">
                <Image src="/header-background.jpg" className="object-cover" width={1980} height={1080} />
            </header>
            <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
                {Object.entries(requests).map(([key,{title,url}])=> (
                    <h2 key={key} 
                    onClick={() => router.push(`/?genre=${key}`)}
                    className="last: pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white hover:font-bold"
                    >{title}</h2>
                ))}
            </div>
            <div className="absolute top-0 right-0 bg-gradient-to-l from-{#06202A} h-10 w-1/12"/>
        </div>
    )
}

export default Header
