import { UserButton } from "@clerk/nextjs"
import Link from "next/link"

export const Navbar = ()=>{
    return(
        <>
        <div className="flex flex-row justify-between items-center px-2 text-white bg-gray-300 bg-opacity-10 w-full h-[4rem]">
           <div className="font-bold text-xl mx-4">METAFORGE</div>
           <div className="mx-4">
           <UserButton
           afterSignOutUrl="/"
           />
           </div>
        </div>
        </>
    )
}