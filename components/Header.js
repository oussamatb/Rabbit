import { useRouter } from "next/router"
import MyChips from "./MyChips"
import 'custom-cursor-react/dist/index.css';
import {useRef} from "react"
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/outline"
import Avatar from "./Avatar"
import SearchBotton from "./SearchBotton"
import CustomCursor from "custom-cursor-react";

export default function Header (){
    const router =useRouter()
    const searchInputRef=useRef(null)
    let searchEngine=[
      {id:1,value:"Google",srcc:"/google.png"},
      {id:2,value:"Bing",srcc:"/Bing.png"},
      {id:3,value:"Yahoo",srcc:"/Yahoo.png"}, 
      {id:4,value:"DuckDuckGo",srcc:"/duckduckgo.png"}, 
      {id:5,value:"Youtube",srcc:"/Youtube.png"},
    ]
    
    
    function changedEngine (v) {
      console.log ('changed ', v)
    
    }

    const search =(e)=>{
        e.preventDefault()
        const term=searchInputRef.current.value
        if (!term) return ;

        router.push(`/search?term=${term}`)
    
    }


    return (
        

    <header className=" flex flex-col items-center sm:items-start  relative sm:sticky w-full top-0 bg-Navv cursor-none">
      <CustomCursor
        targets={['.corsur']}
        customClass='custom-cursor'
        dimensions={40}
        fill='#FFF'
        smoothness={{
          movement: 0.9,
          scale: 0.1,
          opacity: 0.2,
        }}
        targetOpacity={0.3}
      />
    
        <div className="flex flex-col w-full ">
        <div className="flex w-full justify-between">
        <h1 className="corsur font-PlayfairB sm:hidden text-2xl pt-5 pl-5 sm:text-3xl text-white " onClick={()=>router.push("/")}>
            Rabbit
            </h1>
            </div>
        <form className="flex flex-grow px-2 max-w-3xl items-center ">
        <h1 className="corsur font-PlayfairB text-xl hidden sm:inline pl-3 pt-5 sm:text-3xl text-white " onClick={()=>router.push("/")}>
            Rabbit
            </h1>
           <input type="text" placeholder='Search' ref={searchInputRef} className=" cursor-none corsur sm:ml-20 pb-1 ml-3 mt-7 border-b border-grayyy flex-grow w-full text-sm outline-none bg-transparent text-grayyy"/> 

          <SearchBotton onClick={search} />
    </form>
    
    </div> 
    <div className="mb-4 sm:ml-28 ">
    <MyChips searchEngine ={searchEngine } changedEngine={changedEngine}> </MyChips>

    </div>
    </header>
)
}