import Head from 'next/head'
import Avatar from '../components/Avatar'
import QuatesData from '../components/QuatesData'
import SeachBotton from '../components/SearchBotton';
import SeachBotton2 from '../components/SearchBotton2';
import Link from 'next/link'
import MyChips from '../components/MyChips';
import Transition from '../components/transition';
import gsap from 'gsap';
import testssst from '../components/tetssst';

import CustomCursor from 'custom-cursor-react';
import 'custom-cursor-react/dist/index.css';


import { useRouter } from 'next/router'
import { useRef,useState, useEffect} from 'react'
import Divertesement from '../components/Divertesement';

export default function Home() {

  


  const [allQuotesArray, SetAllQuoteArray]= useState(QuatesData.data.quotes)
  console.log(allQuotesArray)
  const RandomeQuote=Math.floor(Math.random()*allQuotesArray.length) 
  console.log(RandomeQuote)
  const [Quote,SetQuote] =useState({
    id:1,
    brand: "",
    author: "",
    quote:"",
    emoji:""
  })


useEffect(() => {
  
  SetQuote (prev=> {
    return {
    id:allQuotesArray[RandomeQuote].id,
    brand : allQuotesArray[RandomeQuote].brand,
    author:allQuotesArray[RandomeQuote].author,
    quote:allQuotesArray[RandomeQuote].quote,
    emoji:allQuotesArray[RandomeQuote].emoji
 
   }
 
}


)},[])

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
  const searchInputRef=useRef(null)
  const router =useRouter()

  const search =(e)=>{
    e.preventDefault();
    const term=searchInputRef.current.value;
    
    if (!term) return ;

    router.push(`/search?term=${term}&siteSearch=${""}`)
  }

    

  return (
    <div> 
      
    <div  className=" cursor-none overflow-hidden bg-cover w-screen	h-screen bg-center bg-[url('../components/Images/blue.jpg')] ">
      <Head>
        <title>Rabbit</title>
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


      {/*Header*/}
      
      <header className="flex w-full p-5 justify-between text-sm items-center">
      <div  className="flex space-x-4 item-center" >
      <p className=" animate-dropDown font-Playfair text-xl sm:text-3xl text-white corsur">Rabbit</p>
      </div>
      <div>
        
      </div>
      <div className="flex space-x-4 item-center">
      <Link href="/Aboutus"><a className="animate-dropDown font-Playfair text-xl sm:text-3xl text-white cursor-none corsur"> About us </a></Link> 
      </div>
      </header>

      {/*Body*/} 
      <testssst/>   
      <div className=" mx-2 flex flex-col text-grayyy items-center content-center mt-24 " >
      <h1 className="animate-appeare font-Playfair text-6xl	mb-4 ">{Quote.brand}</h1>
        <p className="animate-appeare animation-delay-75 font-CalSansSemiBold  text-l sm:text-xl flex items-center mx-6 text-center ">{Quote.quote}</p>
        <p className="animate-appeare animation-delay-100   font-CalSansSemiBold ">{Quote.author}</p>
        <h2 className="animate-appeare animation-delay-150  text-4xl	mt-4 sm:mt-2">{Quote.emoji} </h2>

        </div>
      <form className="flex flex-col h-full items-center mt-50 flex-grow ">
        
   
        
        <div className="flex w-full mt-5 
         max-w-md   px-5 py-3 items-center
         sm:max-w-xl lg:max-w-2xl">
          <input type="text" ref={searchInputRef} placeholder="eg.search" className=" cursor-none animate-appeare animation-delay-200  border-b pl-1 border-grayyy mt-7 focus text-grayyy outline-none bg-transparent flex-grow   corsur "/>
          <div className="hidden sm:inline cursor-none">
          <SeachBotton  type="submit" onClick={search} />
          </div>
         
        </div>
        <div className='cursor-none'>
     <MyChips searchEngine ={searchEngine } changedEngine={changedEngine}> </MyChips></div>
        <div className="flex flex-col w-full items-center space-y-5 mt-2 sm:space-x-4 cursor-none">
          <div className=' flex text-grayyy'>
              </div>
          <div className="sm:hidden">
          <SeachBotton2 type="submit" onClick={search}/>
          </div>
         
              
        </div>
        <div className='cursor-none corsor'>
         <Divertesement/>
      </div>
        <button type="submit"></button>

      </form>
    
    </div>
    </div>

  )
}
