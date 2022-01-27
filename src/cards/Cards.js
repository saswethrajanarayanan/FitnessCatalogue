import React from 'react';
import Card from './Card'

const Cards = ({ routines }) => {
    console.log(routines);
    const card = routines.map(item => {
        return <Card exerciseName={item.name} gifURL={item.gifURL} target={item.target} />
    });
    return (
        <div>
            {card}
        </div>
    )

}

export default Cards;