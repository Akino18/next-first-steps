import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import { ActiveLink } from "../active-link/ActiveLink"

const navItems = [{
  path:"/pricing",
  text: "Pricing"
},
{
  path:"/contact",
  text: "Contact"
},
{
  path:"/about",
  text: "About"
}
]

export const Navbar = async() => {

  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded gap-3 items-center">
      <Link href={"/"} className="flex items-center">
        <HomeIcon/>
        Home
        </Link>

      {navItems.map(({path,text}) => (
        
        <ActiveLink key={path} text={text} path={path} />
      ))}
    </nav>
  )
}
