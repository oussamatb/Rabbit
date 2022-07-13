import { useState, useEffect } from "react";
import { useRouter } from "next/router"
import Link from "next/dist/client/link";
import Head from "next/dist/shared/lib/head";


const board = ["🤖", "👽", "👻", "🤡", "🐧", "🦚", "😄", "🚀"];
export default function Home() {
  const [boardData, setBoardData] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  useEffect(() => {
    initialize();
  }, []);

  useEffect(() => {
    if (matchedCards.length == 16) {
      setGameOver(true);
    }
  }, [moves]);

  const initialize = () => {
    shuffle();
    setGameOver(false);
    setFlippedCards([]);
    setMatchedCards([]);
    setMoves(0);
  };
  const shuffle = () => {
    const shuffledCards = [...board, ...board]
      .sort(() => Math.random() - 0.5)
      .map((v) => v);

    setBoardData(shuffledCards);
  };
  const router =useRouter()
  const updateActiveCards = (i) => {
    if (!flippedCards.includes(i)) {
      if (flippedCards.length == 1) {
        const firstIdx = flippedCards[0];
        const secondIdx = i;
        if (boardData[firstIdx] == boardData[secondIdx]) {
          setMatchedCards((prev) => [...prev, firstIdx, secondIdx]);
        }

        setFlippedCards([...flippedCards, i]);
      } else if (flippedCards.length == 2) {
        setFlippedCards([i]);
      } else {
        setFlippedCards([...flippedCards, i]);
      }

      setMoves((v) => v + 1);
    }
  };

  return (
    <div className=" flex flex-col 	overflow-hidden bg-cover h-screen w-sceen bg-center bg-[url('../components/Images/blue.jpg')]">
       <Head>
        <title>Cards Flip</title>
        <meta name="description" content="Card flip is a a memory game  " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <header className="flex w-full p-5 justify-between text-sm items-center overflow-hidden ">
      <div  className="flex space-x-4 item-center" onClick={()=>router.push("/")} >
          
      <p className=" animate-dropDown font-Playfair corsur text-xl sm:text-3xl text-white corsur overflow-hidden" >Rabbit</p>
      </div>
      <div className="flex space-x-4 item-center overflow-hidden ">
      <Link href="/Aboutus"><a className="animate-dropDown font-Playfair text-xl sm:text-3xl text-white corsur"> About us </a></Link> 

      </div>
      </header>
    <div className="flex justify-center items-center flex-col h-screen w-sceen">
    <div>   
      <div className="my-4 p-3 font-Playfair text-center text-white text-xl">
        <p>{`Moves : ${moves}`}</p>
      </div> 

      <div className="board">
        {boardData.map((data, i) => {
          const flipped = flippedCards.includes(i) ? true : false;
          const matched = matchedCards.includes(i) ? true : false;
          return (
            <div
              onClick={() => {
                updateActiveCards(i);
              }}
              key={i}
              className={`card ${flipped || matched ? "active" : ""} ${
                matched ? "matched" : ""
              } ${gameOver ? "gameover" : ""}`}
            >
              <div className="card-front">{data}</div>
              <div className="card-back"></div>
            </div>
          );
        })} 
     
      </div>
    
    </div>
    
    <div className="menu p-4">
        <p>{`${gameOver ? "Game Over" : ""}`}</p>
        
      </div><button className="rounded-lg bg-grayyy p-1 px-2 font-Playfair" onClick={() => initialize()} >
          Reset
        </button>
    </div></div>
  );
}