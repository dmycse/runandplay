import { useState } from "react";
import { logo } from "../../assets/images";
import { hamburger } from "../../assets/icons";
import NavLinks from "./NavLinks";


export default function Navbar() {

  let [mobileNavOpen, setMobileNavOpen] = useState(false);
  
  return (
    <header className="absolute z-20 padding-x py-8 w-full">
      <nav className="max-container flex justify-between items-center">
        <div className="flex items-center gap-3">
          <a href="/" className="shrink-0">
            <img 
              src={logo} 
              alt="logo" 
              width={50}
              height={15}
            />
          </a>
          <a href="/">
            <span className="hidden sm:inline text-3xl lg:text-4xl font-light font-montserrat text-coral-red">Run&Play</span>
          </a>
        </div>
        { mobileNavOpen ? <NavLinks view="mobile" /> : <NavLinks view="desktop"/>}
        <div 
          className="md:hidden cursor-pointer"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          <img 
            src={hamburger} 
            alt="mobile navigation"
            width={25}
            height={25} 
          />
        </div>
      </nav>
    </header>
  )
}
