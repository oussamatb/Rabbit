import {  CubeIcon } from "@heroicons/react/solid"
import Link from 'next/link'
export default function Divertesement (){
    return (
<div className="flex fixed right-7 bottom-7 cursor-none ">
<Link href="/page.html"><a>
    <div className="rounded-full animate-[grow_1s_ease-in-out_] flex justify-center items-center bg-grayyy m-1 w-7 h-7 hover:scale-110 transition duration-300  sm:w-14 sm:h-14 cursor-pointer sm-bottom-10 ">
        <CubeIcon className="h-10 w-10 text-black"/>
    </div></a></Link> 
    <Link href="/TicTacToe"><a>
    <div className="rounded-full animate-[grow_1s_ease-in-out_]  justify-center items-center bg-grayyy m-1 w-7 h-7 hover:scale-110 transition duration-300  sm:w-14 sm:h-14  cursor-pointer  hidden">
        <CubeIcon className="h-10 w-10 text-black"/>
    </div></a></Link> 
    <Link href="/TicTacToe"><a>
    <div className="rounded-full animate-[grow_1s_ease-in-out_]  justify-center items-center bg-grayyy m-1 w-7 h-7 hover:scale-110 transition duration-300  sm:w-14 sm:h-14  cursor-pointer hidden ">
        <CubeIcon className="h-10 w-10 text-black"/>
    </div>



 </a></Link> 
    
</div>
    
    
    
    
    )
}