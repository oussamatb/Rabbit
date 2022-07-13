import Head from "next/head"
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from "next/router"


export default function Aboutus(){
    const router =useRouter() 

    return (
        <div className="overflow-hidden bg-cover w-screen	h-screen bg-center bg-[url('../components/Images/blue.jpg')]"> 
            <Head> 
            <title>About Us</title>
            <link rel="icon" href="/favicon.ico" />
       
        </Head> 
            <div className="flex flex-col w-full  ">
        <div className="flex w-full justify-between">
        <h1 className="corsur font-PlayfairB sm:hidden text-xl pt-5 pl-5 sm:text-3xl text-white " onClick={()=>router.push("/")}>
            Rabbit
            </h1>
            </div>
        <div className="flex flex-grow px-2 max-w-3xl items-center ">
        <h1 className="corsur font-PlayfairB text-xl hidden sm:inline pl-3 pt-5 sm:text-3xl text-white " onClick={()=>router.push("/")}>
            Rabbit
            </h1>
        </div> 
        </div>
        <div className="flex justify-center content-center items-center mt-16 ">
        <div className="flex flex-col justify-center content-center items-center m-8 w-9/12">
           <p className="font-PlayfairB text-xl text-white ">  Rabbit is a custom search engine built in chace of the indexed information by Oussama trabelsi using Next.js and Tailwind css in Evoo ltd colaboratinng with Vastsky123 
</p> 
<div className="flex m-8" >
    <div className="m-8">
         <Image src="/Vatsky123.png" width={60} height={50}   /> </div>
         <div className="m-8">
         <Image src="/evoo.png" width={80} height={50}   /> </div>
    

</div>
<div></div>
        </div>
        </div> <div className="flex flex-col items-center">
            <h1 className="font-PlayfairB text-2xl text-white ">CONTACT US </h1>
            <p  className="font-PlayfairB text-l text-white "> say Hi or Report a Bug we will appreciate both !! </p>
            <p  className="font-PlayfairB text-l text-white "> And have a Nice day  </p>

            <div>

            </div>
           

            </div>
      
        </div>
    )
}