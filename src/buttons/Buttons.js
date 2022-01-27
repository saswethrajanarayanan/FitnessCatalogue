import React from 'react';
import Button from './Button';
import buttoncontent from './buttoncontent';
//console.log("hi");

const Buttons = ({ exercise }) => {
    const button = buttoncontent.map(item => {
        return <Button 
                foo={exercise}
                item = {item}/>
    });
    return (
        <div>
            {button}
        </div>
    )
}

export default Buttons;