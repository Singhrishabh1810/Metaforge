import Link from "next/link";
import { ContainerBox } from "./components/containerBox/ContainerBox";


export default function Page() {
    return (
      <div className="flex flex-col justify-start items-center mx-20 my-10">
        <div className="flex flex-row justify-start gap-10 w-full">
         <Link href="/dashboard/textgeneration">   
        <ContainerBox title="Text"/>
        </Link>
        <Link href="/dashboard/imagegeneration">   
        <ContainerBox title="Image"/>
        </Link>
        <ContainerBox title="Music"/>
        </div>
        <div className="rounded-sm h-1 w-full bg-gray-500 bg-opacity-30 my-8"></div>
        {/* adding something premium */}
        <div>

        </div>
    </div>
    );
  }