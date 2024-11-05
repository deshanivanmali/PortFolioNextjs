import Link from "next/link"
import { Button } from "@/components/ui/button"
import Nav from "./Nav"
import MobileNav from "./MobileNav"

Button
function Header() {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx:auto items-center flex justify-between">
        {/* Logo */}
      <Link href={"/"} className="text-4xl font-semibold">
      Vanmali <span className="text-accent">.</span>
      </Link>
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
