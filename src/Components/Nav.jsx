import { headerLogo } from "../assets"
import { navLinks } from "../constants"
import { useState } from "react"
import { IconMenu2, IconX } from "@tabler/icons-react"

const Nav = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <header className="padding-x py-2 absolute z-10 w-full bg-slate-50">
        <nav className="flex justify-between items-center max-container">
            <a href="/">
               <img src={headerLogo} alt="logo" width={200} height={29} />
            </a>
            <ul className="flex-1 flex justify-center items-center gap-16 max-2md:hidden">
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a href={item.href} className="font-montserrat font-bold text-black no-underline cursor-pointer transition-all duration-300 hover:text-blue-500">
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>

            {/* Mobile */}
            <div className="hidden max-2md:block">
              {isOpen ? (<IconX width={30} height={30} onClick={toggleMenu} className="absolute right-12 top-12 cursor-pointer z-50 transition-all duration-300 "/>)
               : (
                <IconMenu2 width={30} height={30} onClick={toggleMenu} className="cursor-pointer"/>
               )}
            </div>
            {isOpen && (
              <div className={`top-0 right-0 w-full bg-white shadow-md z-40 fixed h-full ${isOpen ? "flex" : "hidden"}`}>
                <ul className="flex flex-col items-center justify-center absolute gap-8 top-[44%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
                  {navLinks.map((item) => (
                    <li key={item.label} className="w-full text-center py-6 border-gray-200">
                      <a href={item.href} className=" block w-full font-montserrat font-bold text-black no-underline cursor-pointer transition-all duration-300 hover:text-blue-500" onClick={toggleMenu}>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
        </nav>
      </header>
    </>
  )
}

export default Nav
