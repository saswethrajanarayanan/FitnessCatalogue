import React from 'react';

const Button = ({ foo, item }) => {
    //console.log("hi");
    return (
        <div display='flex' className='dib ma2'>
            <button className='tc f6 fw6 ttu tracked link dim ph3 pv2 mb2 dib br3 white bg-black grow href="#0" white bg-black' onClick={foo} data-arg={item}>{item}</button>
        </div>
    )
}

export default Button;