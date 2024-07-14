import { navLinks } from "../../constans";

export default function NavLinks({view}) {

  let ulDesktopStyles = "hidden md:pl-4 flex-1 md:flex justify-center items-center gap-6 md:gap-8 lg:gap-16 font-montserrat text-lg lg:text-xl text-slate-gray";
  let ulMmobileStyles = "md:hidden absolute top-12 max-md:top-20 right-0 z-10 p-4 flex flex-col justify-center items-end gap-2 border shadow-md  bg-white";

  let liDesktopStyles = "";
  let liMmobileStyles= "p-2 font-montserrat md:text-md text-slate-gray hover:bg-slate-50";

  return (
    <ul className={view === "desktop" ? ulDesktopStyles : ulMmobileStyles}>
      { navLinks.map(link =>(
        <li key={link.label} className={view === "desktop" ? liDesktopStyles : liMmobileStyles}>
          <a href={link.href}>{link.label}</a>
        </li>
        ))
      }
    </ul>
  )
}
