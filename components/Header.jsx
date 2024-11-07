import Link from "next/link"
import { Button } from "@/components/ui/button"
import Nav from "./Nav"
import MobileNav from "./MobileNav"
import Image from "next/image"

Button
function Header() {
  return (
    <header className="py-8 xl:py-12 text-white -mt-10">
      <div className="container mx:auto items-center flex justify-between">
        {/* Logo */}
        <div className="flex">
          <Image
            src="/assets/vdLogo.png"   // Path to your logo file
            alt="Logo"
            width={160}        // Adjust the width
            height={120}        // Adjust the height
            priority={true}    // Optimize loading for the logo
          />
           <Link href={"/"} className="text-4xl font-semibold mt-10">
            Vanmali <span className="text-accent">.</span>
            </Link>
        </div>
     
      {/* Desktop nav and hire me button */}
      <div className="hidden xl:flex items-center gap-8">
      <Nav/>
      <Link href="/contact">
      <Button>
        Hire Me
      </Button>
      </Link>
      </div>
      
      {/* Mobile Nav */}
      <div className="xl:hidden">
       <MobileNav/>
      </div>
      </div>
    </header>
  )
}

export default Header
