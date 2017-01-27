import React from 'react';
import Artist from './artist_container'
const Card = ({cards, addCard}) => (
  <div>
    <ul>
     
    </ul>
    {cards}

    <button onClick={addCard}>Card</button>
    <Artist />
  </div>
)


export default Card;
