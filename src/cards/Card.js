import React from 'react';


const Card = ({ exerciseName, gifURL, target }) => (
    <div className= 'bg-light-green dib br3 pa3 ma2 grow bw5 shadow-5'>
        <img src={gifURL} alt="loading..."/>
        <div classname='tc'>
            <h2>{exerciseName}</h2>
            <h2>Leads to: {target}</h2>
        </div>
    </div>
)

export default Card;