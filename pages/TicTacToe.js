import { useRef,useState, useEffect} from 'react'
import { useRouter } from "next/router"
import Link from 'next/link'
import gsap from 'gsap';
import Transition from '../components/Transition'
import Head from 'next/head'
import CustomCursor from 'custom-cursor-react';
import 'custom-cursor-react/dist/index.css';





const WINNERTEST=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    
]

export default function TicTacToe(){
const [won,setWon]=useState(false)
const [modalTitle,setModalTitle]=useState('')
const router =useRouter() 
const [xTurn,setXturn]=useState (true)
const [boardData,setBoardData]=useState ({ 0:'' ,1:'',2:'',3:'',4:'',5:'',6:'',7:'',8:'',})
const [isDraw,setDraw]=useState(false)
const [winnerTest,setWinnerTest]=useState([])



const home=gsap.timeline();
  const home1=useRef(null);
  const homeimg =useRef(null);






useEffect (()=>{
    checkWinner()
    checkDraw()
} ,[boardData])

const updateBoeardData=(idx)=>{
    if (!boardData[idx]&& !won){
   let value=xTurn ===true ?'X':'O';
    setBoardData({...boardData,[idx]:value});
    setXturn(!xTurn)
}}
const checkDraw=()=>{
   let check= Object.keys(boardData).every((v)=>boardData[v])
    setDraw(check)
    if (check) setModalTitle('The Match Is a Draw !! ')

}   
const checkWinner=()=>{
    WINNERTEST.map((bd)=>{
        const [a,b,c]=bd 
        if (boardData[a] && boardData[a]===boardData[b] && boardData[a] === boardData[c] ){
            setWon(true)
            setWinnerTest([a,b,c])
            setModalTitle(`Player ${!xTurn?'X':'O'}  Won 🎉!! `)

            return;
        }
    })

}


const reset=()=> {
    setBoardData({ 0:'' ,1:'',2:'',3:'',4:'',5:'',6:'',7:'',8:'',})
    setXturn(true)
    setWon(false)
    setWinnerTest([])
    setDraw(false)
    setModalTitle("")
}

    return (
        <div className="bg-cover h-screen w-screen bg-center overflow-hidden bg-[url('../components/Images/blue.jpg')] flex flex-col items-center ">
       <Head>
        <title>TicTacToe</title>
        <meta name="description" content="Search Engine For optimazied Results " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
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
        targetOpacity={0.3}/>
        <Transition timeline={home}/>       
  <header className="flex w-full p-5 justify-between text-sm items-center overflow-hidden " ref={home1}>
      <div  className="flex space-x-4 item-center" onClick={()=>router.push("/")} >
          
      <p className=" animate-dropDown font-Playfair corsur text-xl sm:text-3xl text-white corsur overflow-hidden" >Rabbit</p>
      </div>
      <div className="flex space-x-4 item-center overflow-hidden ">
      <Link href="/Aboutus"><a className="animate-dropDown font-Playfair text-xl sm:text-3xl text-white corsur"> About us </a></Link> 

      </div>
      </header>
         <div  className="flex justify-center content-center items-center flex-col  h-screen w-sceen overflow-hidden">
<           div >
            <div className="p-4 font-Playfair text-white  text-center text-xl overflow-hidden " >{ xTurn===true ? 'X Turn':'O Turn '} </div>

            <div className="grid grid-cols-3 w-96 h-96 gap-2 overflow-hidden ">
               {   
                   [... Array(9)].map((v,idx)=>{
                     return <div onClick={()=>{
                         updateBoeardData(idx);
                     } }
                     
                     
                     key={idx} className={`border border-grayyy font-Playfair rounded-lg overflow-hidden corsur drop-shadow-xl justify-center font-black text-4xl p-8 text-center items-center content-center	text-white  		 ${winnerTest.includes(idx) ? 'bg-gray-400':''}`}> {boardData[idx]} </div>


                   })
               }

                 </div>
                 </div>

         </div>
  <div className="p-2  left-1/2  rounded-lg shadow-xl text-center flex flex-col font-Playfair  text-white text-xl items-center  overflow-hidden  " > {modalTitle}</div>
  <div>

  <button onClick={ reset} className="rounded-lg p-2 m-14  corsur	bg-grayyy left-1/2  font-Playfair text-xl shadow-xl text-center flex flex-col items-center  overflow-hidden  ">New Game</button>
  </div>
  
        </div>
    )
}