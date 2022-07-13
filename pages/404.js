import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from "next/router"


const notFound=()=>{
    const router =useRouter() 

    return(
        <div className="flex flex-col ">
            <div className="flex justify-between m-4">
                <h1 className="animate-dropDown font-Playfair text-xl sm:text-3xl text-black corsur sm:pl-4" onClick={()=>router.push("/")} >Rabbit</h1>
                <h1 className="animate-dropDown font-Playfair text-xl sm:text-3xl text-black corsur sm:pr-4">About us</h1>

            </div>

            <div className="flex flex-col sm:flex-row w-full h-full items-center pt-12 sm:pt-1 ">
                <div className="">
                <Image src="/big.png" width={980} height={680} /> </div>
                
                <div className="flex flex-col pt-12 sm:pt-1 mr-2  ">
                    <p className=" bg-gray-400 p-2  rounded-full text-l text-white m-2 place-self-start">Page not found</p>
                    <h1 className="text-black text-3xl ml-2 sm:text-5xl font-bold  mt-1">Ohh No! ERROR 404!</h1>
                
                <p className="text-gray-500 ml-2 mt-1 text-xl">Maybe Big Foot has broken this page.</p>
                <p className="text-gray-500 ml-2 mb-1 text-xl">Come Back to the page later </p>

                <div className="flex">
                <p className=" bg-blued p-2 m-2 rounded-xl text-white">Back to Homepage</p>
                <p className=" m-2 p-2">Repport the Bug</p></div>
             </div> </div></div>
       
    );
}
export default notFound;