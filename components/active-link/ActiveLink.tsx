'use client'

import Link from "next/link"
import style from "./ActiveLink.module.css"
import { usePathname } from "next/navigation"
interface props {
    text: string,
    path: string
}


export const ActiveLink = ({text,path}:props) => {

    const pathName = usePathname();

    console.log(pathName)
  return (

    <Link className={`${style.link}   ${ (pathName === path) && style['active-link']}`} 
    href={path}>
        {text}
    </Link>
  )
}
