import { useEffect,useState } from 'react'
import Image from 'next/image'





export default function BgImage (){
function getWindowDim (){
    const {innerWidth:width , innerHeight:height} =window;
    return {width,
        height}

}
    const [width,setWidth]=useState(width)
    const [height,setHeight]=useState(height)

    useEffect(()=> {
        function handeleResize (){
        const {width,height}=getWindowDim()
        setHeight(height)
        setWidth(width)
    }
    window.addEventListener('resize',handeleResize)
    return ()=>window.removeEventListener("resize",handeleResize)

 },[]);
 if (width && height){
     return <Image
     
     src={"https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80"}
     width ={width}
     height={height}

     
     
     />
 }

return null

}