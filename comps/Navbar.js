import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/Logo.png" width={150} height={35} />
      </div>
      <Link href="/"><a> Home </a></Link>
      <Link href="/about"><a> About </a></Link>
      <Link href="/sami"><a> Sami Listing </a></Link>
    </nav>
  )
}

export default Navbar
