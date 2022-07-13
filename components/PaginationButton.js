import { ChevronLeftIcon,ChevronRightIcon } from "@heroicons/react/solid"
import Link from "next/link"
import { useRouter } from "next/router"

///import 'custom-cursor-react/dist/index.css';
////import CustomCursor from "custom-cursor-react";


export default function PaginationButton(){
    const router =useRouter();
    const startIndex=Number(router.query.start)||0
    return (
        <div className="flex max-w-lg text-grayyy  py-5">
            {startIndex >=10 && (
                
            <Link href={`/search?term=${router.query.term}&start=${startIndex-10}`}>
                <div className="flex flex-grow flex-col items-center cursor-none ">
                <ChevronLeftIcon className="h-5 corsur "/>
                <p className="corsur">Previous</p>
                </div>
                </Link>

            )}

            <Link href={`/search?term=${router.query.term}&start=${startIndex +10}`}>
                <div className="flex flex-grow flex-col items-center cursor-none  ">
                    <ChevronRightIcon className="h-5 corsur "/>
                    <p className="corsur">Next</p>
                </div>
            
            </Link>
           
        </div>    
    )
}