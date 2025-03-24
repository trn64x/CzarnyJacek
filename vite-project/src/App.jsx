import { useEffect, useState } from "react";
import * as All from "@letele/playing-cards";
import "./App.css";

function App() {

  const cards = [
    { index: "H2", value: 2 }, { index: "H3", value: 3 }, { index: "H4", value: 4 },
    { index: "H5", value: 5 }, { index: "H6", value: 6 }, { index: "H7", value: 7 },
    { index: "H8", value: 8 }, { index: "H9", value: 9 }, { index: "H10", value: 10 },
    { index: "Hj", value: 10 }, { index: "Hq", value: 10 }, { index: "Hk", value: 10 },
    { index: "Ha", value: "11 or 1" },

    { index: "D2", value: 2 }, { index: "D3", value: 3 }, { index: "D4", value: 4 },
    { index: "D5", value: 5 }, { index: "D6", value: 6 }, { index: "D7", value: 7 },
    { index: "D8", value: 8 }, { index: "D9", value: 9 }, { index: "D10", value: 10 },
    { index: "Dj", value: 10 }, { index: "Dq", value: 10 }, { index: "Dk", value: 10 },
    { index: "Da", value: "11 or 1" },

    { index: "C2", value: 2 }, { index: "C3", value: 3 }, { index: "C4", value: 4 },
    { index: "C5", value: 5 }, { index: "C6", value: 6 }, { index: "C7", value: 7 },
    { index: "C8", value: 8 }, { index: "C9", value: 9 }, { index: "C10", value: 10 },
    { index: "Cj", value: 10 }, { index: "Cq", value: 10 }, { index: "Ck", value: 10 },
    { index: "Ca", value: "11 or 1" },

    { index: "S2", value: 2 }, { index: "S3", value: 3 }, { index: "S4", value: 4 },
    { index: "S5", value: 5 }, { index: "S6", value: 6 }, { index: "S7", value: 7 },
    { index: "S8", value: 8 }, { index: "S9", value: 9 }, { index: "S10", value: 10 },
    { index: "Sj", value: 10 }, { index: "Sq", value: 10 }, { index: "Sk", value: 10 },
    { index: "Sa", value: "11 or 1" },{index:"B1", value: 0}
  ];
  let drawnCards = [];
  let [playerCards, setPlayerCards] = useState([getRandomCard(), getRandomCard()]);
  const [dealerCards, setDealerCards] = useState([getRandomCard(), cards[cards.length - 1]]);
  let [gameStatus, setgameStatus] = useState("");
  const [isEnd, setisEnd] = useState(false);
  const [isTrue,setisTrue] = useState(false);
  
  function getRandomCard() {
    let random;
    do {
      random = cards[Math.floor((Math.random() * cards.length) - 1)];
    } while (drawnCards.includes(random));
    drawnCards.push(random);
    return random;
  }
  function calculateSum(hand) {
    let sum = 0;
    let aceCount = 0;

    hand.forEach((card) => {
      if (card.index.charAt(1) === "a") {
        aceCount++;
        sum += 11;
      } else {
        sum += card.value;
      }
    });
    while (sum > 21 && aceCount > 0) {
      sum -= 10; 
      aceCount--;
    }
    return sum;
  }

  const playerSum = calculateSum(playerCards);
  const dealerSum = calculateSum(dealerCards);
  
  const HandleHit = () =>{
    playerSum < 21 ? setPlayerCards(prevObjects => [...prevObjects, getRandomCard()]) : null;
  }

  const HandleStand = () =>{
    setDealerCards(prevCards => {
      const updatedCards = [...prevCards];
      updatedCards[1] = getRandomCard(); // Reveal second card
      return updatedCards;

    });
    setisTrue(true);
  }

  useEffect(()=> {
if(!isTrue) return;
if(playerSum > 21) return;
setTimeout(()=>{
  let dealerSet = [...dealerCards];
  let dealerNewSum = calculateSum(dealerSet);
  if(playerSum > dealerSum){
  while(dealerNewSum < 17){
      const newCard = getRandomCard();
      dealerSet.push(newCard);
      dealerNewSum = calculateSum(dealerSet);
      console.log(dealerNewSum);
  }
}
  setDealerCards(dealerSet);
  if(dealerNewSum > 21 || playerSum > dealerNewSum){
    setgameStatus(" U WON!");
  }
  if(dealerNewSum > playerSum && dealerNewSum <= 21){
    setgameStatus(" U LOST!");
  }
  if(dealerNewSum === playerSum ){
    setgameStatus(" ITS A TIE!");
  }

  setisTrue(true);
},1000)

  }, [isTrue]);
  useEffect(() => {
    console.log("Player sum:", playerSum, "Dealer sum:", dealerSum);
    if (playerSum > 21) {
      setgameStatus("U LOST!");
      setisTrue(true);
    } else if (dealerSum > 21) {
      setgameStatus("U WON!");
      setisTrue(true);
    }
  }, [playerSum, dealerSum]);
  return (
    <>
      <div className="container-dealer">
        <div className="card-container-dealer">
          {dealerCards.map((card, index) => {
            const CardComponent = All[card.index];
            drawnCards.push(CardComponent);
            return (
              <div key={index} className="card">
                {CardComponent ? <CardComponent /> : null}
              </div>
            );
          })}
        </div>
        <div className="count">Dealer's total: {dealerSum} </div>
      </div>
          <div className="option"><button disabled={isTrue} className="Hit" onClick={ HandleHit }>Hit</button><button disabled={isTrue} className="Stand" onClick={HandleStand}>Stand</button></div>
      <div className="container-player">
        <div className="card-container-player">
          {playerCards.map((card, index) => {
            const CardComponent = All[card.index];
            return (
              <div key={index} className="card">
                {CardComponent ? <CardComponent /> : null}
              </div>
            );
          })}
        </div>
        <div className="count">Player's total: {playerSum} {gameStatus} </div>
      </div>
    </>
  );
}

export default App;
