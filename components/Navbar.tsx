import Image from "next/image"
import Link from "next/link"


const Navbar = () => {
  return (
    <nav className="border border-red-500 flexBetween max-container padding-container relative z-30 py-5">
        <Link href="/">
            <Image src="/hilink-logo" alt="logo" width={75} height={29} />
        </Link>
    </nav>
  )
}

export default Navbar