import Link from "next/link"

export const Navbar = ()=>{
    return(
        <>
        <div className="flex flex-row justify-between items-center px-2 bg-gray-300 bg-opacity-10 w-[100vw] h-[4rem]">
           <div className="font-bold text-xl mx-4">MetaForge</div>
           <Link href="sign-in" className="font-semibold text-lg mx-4 border px-2 py-1 rounded-sm hover:bg-gray-300 hover:bg-opacity-20">
            Login
           </Link>
        </div>
        </>
    )
}