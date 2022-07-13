 import { useRef,useState, useEffect} from 'react'
 import Image from 'next/image'




export default function MyChips ({searchEngine, changedEngine}){
    const [Curren, setCurren]=useState(searchEngine[0].id)
    function onClick (v) { 
        changedEngine(v)
        setCurren(v.id)

    }
    return (
        <div className="flex mt-2  overflow-hidden ">
           <div className='sm:m-1 pt-1 font-Playfair text-white pr-2  animate-appeare animation-delay-400'> Filter :</div>
        {searchEngine.map((v,i)=>{
            return <div key={i} onClick={()=>onClick(v)} className= {`sm:m-1 corsur flex pt-1 px-2 mx-2 sm:px-4 font-Playfair rounded-full ease-in duration-300 cursur items-center content-center animate-appeare animation-delay-400 text-white hover:bg-selectes ${Curren===v.id? 'bg-selectes':''}`} >  <div className="sm:pr-1 overflow-hidden "> <Image src={v.srcc} width={20} height={20} /></div><div className="hidden sm:inline">
            {v.value}</div></div>
        })}
        </div>
    )
}