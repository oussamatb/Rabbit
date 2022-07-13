import PaginationButton from "./PaginationButton"
////import 'custom-cursor-react/dist/index.css';
///import CustomCursor from "custom-cursor-react";




export default function SearchResult({result}){
    
    return (
        <div className="  bg-[url('../components/Images/blue.jpg')]  h-full cursor-none bg-center bg-fixed bg-cover px-3 w-full mx-auto  sm:pl-[5%] md:pl-[14%] lg:pl-32 ">
          
        <div className="mx-auto w-full " >
        {    <p className="text-grayyy text-md pb-1 pt-3">About {result.searchInformation?.formattedTotalResults} results ({result.searchInformation?.formattedSearchTime}seconds)</p>}
        {result.items?.map((result)=>(
            <div key={result.link} className= "shadow-md max-w-xl sm:max-w-5xl my-3 rounded-xl  bg-[url('../components/Images/SearchBg.png')] bg-center  p-2   ">
                  
                   { /***<div> {result.displayLink==="www.google.com"? <p className="text-sm  bg-center bg-cover  float-right rounded-full w-16 h-6 bg-[url('../components/Images/google-logo.png')] p-1 m-2  "></p>:""} </div>
                    <div> {result.displayLink==="www.bing.com"? <p   className="text-sm  bg-center bg-cover   float-right rounded-full w-16 h-  bg-[url('../components/Images/Bing_logo.png')]  p-1 m-2  "></p>:""} </div>
                    <div> {result.displayLink==="www.youtube.com"? <p   className="text-sm bg-cover bg-center float-right w-16 h-6  bg-[url('../components/Images/youtube-logo.png')]  p-1 my-1  "></p>:""} </div>
                    <div> {result.displayLink==="www.aol.com"? <p   className="text-sm bg-cover bg-center float-right w-16 h-6  bg-[url('../components/Images/aol.png')]  p-1 my-1  "></p>:""} </div>
        ***/}
                    <div className="m-4"> 
                   <div className="group  ">
                    <a href={result.link}>
                    <h2 className="truncate text-xl text-grayyy  font-medium groupe-hover:underline corsur cursor-none">
                         {result.title} </h2></a>

                </div>
                <p className="line-clamp-3 sm:line-clamp-3 text-grayyy">{result.snippet}</p>
                </div>
                 </div>

        ))}
                  <PaginationButton />

        </div>
       
        </div>
    )
}