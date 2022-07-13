import Head from "next/head"
import { useRouter } from "next/router";
import Header from "../components/Header"
import Response from "../Response";
import SearchResult from "../components/SearchResult";
import MyChips from "../components/MyChips";

function Search ({result}){
    console.log(result)
    const router =useRouter()
    return (
    <div >
        <Head> 
            <title>{router.query.term}-Rabbit Search</title>
            <link rel="icon" href="/favicon.ico" />

        </Head>
       
        <Header/> 
    
        <SearchResult result={result}/>
  
    </div>
    )
}
export default Search ;
export async function getServerSideProps(context) {
    const useDummyData=false ; 
    const startIndex=context.query.start || "0"
    const sitesearch=""
    
    
    const data= useDummyData? 
    Response
    : await fetch (
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY_LOCAL}&cx=${process.env.CONTEXT_KEY_LOCAL}&q=${context.query.term}&siteSearch=${""}&safe=${"active"}&start=${startIndex}`
    ).then((response)=>response.json())
        
    return {
        props:{
            result:data,
        },

    }
}