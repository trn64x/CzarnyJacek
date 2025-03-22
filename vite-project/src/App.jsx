import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import * as All from '@letele/playing-cards';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const cards = [
    { index: 'H2', value: 2 }, { index: 'H3', value: 3 }, { index: 'H4', value: 4 },
    { index: 'H5', value: 5 }, { index: 'H6', value: 6 }, { index: 'H7', value: 7 },
    { index: 'H8', value: 8 }, { index: 'H9', value: 9 }, { index: 'H10', value: 10 },
    { index: 'HJ', value: 10 }, { index: 'HQ', value: 10 }, { index: 'HK', value: 10 }, { index: 'HA', value: '11 or 1' },

    { index: 'D2', value: 2 }, { index: 'D3', value: 3 }, { index: 'D4', value: 4 },
    { index: 'D5', value: 5 }, { index: 'D6', value: 6 }, { index: 'D7', value: 7 },
    { index: 'D8', value: 8 }, { index: 'D9', value: 9 }, { index: 'D10', value: 10 },
    { index: 'DJ', value: 10 }, { index: 'DQ', value: 10 }, { index: 'DK', value: 10 }, { index: 'DA', value: '11 or 1' },

    { index: 'C2', value: 2 }, { index: 'C3', value: 3 }, { index: 'C4', value: 4 },
    { index: 'C5', value: 5 }, { index: 'C6', value: 6 }, { index: 'C7', value: 7 },
    { index: 'C8', value: 8 }, { index: 'C9', value: 9 }, { index: 'C10', value: 10 },
    { index: 'CJ', value: 10 }, { index: 'CQ', value: 10 }, { index: 'CK', value: 10 }, { index: 'CA', value: '11 or 1' },

    { index: 'S2', value: 2 }, { index: 'S3', value: 3 }, { index: 'S4', value: 4 },
    { index: 'S5', value: 5 }, { index: 'S6', value: 6 }, { index: 'S7', value: 7 },
    { index: 'S8', value: 8 }, { index: 'S9', value: 9 }, { index: 'S10', value: 10 },
    { index: 'SJ', value: 10 }, { index: 'SQ', value: 10 }, { index: 'SK', value: 10 }, { index: 'SA', value: '11 or 1' },

    { index: 'J1', value: 0 }, { index: 'J2', value: 0 }, // Jokers (not used in Blackjack)
    { index: 'B1', value: 0 }, { index: 'B2', value: 0 } // Back sides
  ];
  
  
  const randomCard = () => cards[Math.floor(Math.random() * cards.length - 2)]
  let cardPlayer= [randomCard(), randomCard()];
  
  return (
    <div className="container">
<div className="card-container">
  {cardPlayer.map((card,index) => {
    let CardIndex = All[card.index];
    return(
      <div key={index} className = 'card'>
        {CardIndex ? <CardIndex style={{height:"100%", width:"100%"}} /> : null}
      </div>
    );
  })}
</div>
    </div>
  )
}

export default App
