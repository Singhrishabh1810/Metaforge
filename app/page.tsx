import Image from "next/image";
import { Navbar } from "./components/navbar/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
     <main className="main">
      <div className="fixed top-0">
        <Navbar/>
      </div>
      <div className="mainDiv">
        <h1 className="bigTitle font-normal align-center flex flex-col items-center gap-0"><span className="welcomeTexjt align-center font-bold">
        METAFORGE </span><br/>Decentralized platform for Content Creation with AI, </h1>
        <div className='research'>
        <Link href="/sigin-up" className="py-2.5 px-8 me-2 mb-2 text-lg font-semibold text-white border border-white hover:border-2 rounded-full bg-opacity-40 bg-gray-500">
          Click To Get Started
        </Link>

        </div>
        <div className="line"/>
      </div>
    </main>
    </>
  );
}
