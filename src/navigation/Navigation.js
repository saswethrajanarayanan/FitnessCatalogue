import React from 'react';


const Navigation = () => {
    return (
        <div>
            <h1 className='ttu tracked'><i><b>The Fitness Chapter</b></i></h1>
                <div display='flex' title="Tab1" className='dib ma3'>
                    <button className='ma3 tracked link dim ph3 pv2 mb2 dib br3 white bg-black" href="#0" white bg-black'>Search By Equipment</button>
                    <button className='ma3 tracked link dim ph3 pv2 mb2 dib br3 white bg-black" href="#0" white bg-black'>Search by Body-Part</button>
                </div>
        </div>
    );
}

export default Navigation;