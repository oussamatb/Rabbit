import {Power4} from "gsap"
import {useRef, useEffect} from "react"

export default function Transition ({timeline}){ 
    const trans =useRef(null);
    useEffect(()=>{
        timeline.to(trans.current,{
            duration:12,
            x:2700,
            ease: Power4.easeOut   })
    })
    return (
        <div>
            <div className="w-full h-full bg-black top-0 bg-grayyy absolute z-40 overflow-hidden " ref={trans}>
            </div> 
        </div>
    )

}