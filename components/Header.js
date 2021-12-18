import Image from "next/image"

function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-80">
            <Image src="/header-background.jpg" layout="fill"/>
            <h1>Netflix 2.0</h1>
        </header>
    )
}

export default Header
