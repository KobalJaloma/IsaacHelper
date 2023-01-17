import React from 'react';
import { useCounter } from '../hooks'



export const Item = React.memo(({imageUrl, counterDefault = 2, item='item'}) => {
    
    const { counter, increment, decrement } = useCounter(counterDefault);

    return (
        <div 
            className="container border border-dark border-2 rounded d-flex align-items-center flex-column mx-1 my-2 py-3 bg-dark" 
        >
            <div onClick={() => increment(1)}>
                <img src={imageUrl} style={{width: "5rem"}}/>
                
                <div className={`text-center ${(counter >= 10) ? 'text-warning' : 'text-white'}`} >
                    <h1>{counter}</h1>
                </div>

            </div>

            <button 
                className='btn btn-sm'
                style={{background: 'white'}}
                onClick={() => {counter <= 0 ? decrement(0): decrement(1)} }
            >
            Decrement  
            </button>
        </div>
    
    )
})

// <div className="item border border-3 border-dark py-3">
//     <div className='item-increment' onClick={() => increment(1)}>
//         <img src={imageUrl} className='img-item'/>
        
//         <div className="counterText">
//             <h1>{counter}</h1>
//         </div>

//     </div>

//     <button 
//         className='btn btn-dark btn-sm'
//         onClick={() => {counter <= 0 ? decrement(0): decrement(1)} }
//     >
//     decrement  
//     </button>
// </div>