import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useCounter } from '../hooks'



export const Item = React.memo(({imageUrl, counterDefault = 2, item='item', tresure = false}) => {
    
    const { counter, increment, decrement } = useCounter(counterDefault);

    const showTresure = () => {
        if(tresure && counter >= 10) {
            return (
                <button 
                className='btn btn-sm bg-warning mt-2'
                style={{background: 'white'}}
                onClick={() => decrement(10) }
                >
                Treasure  
                </button>
            )
        }
        else return(<></>)
    }
    

    return (
        <div 
            className="container border border-dark border-2 rounded d-flex align-items-center flex-column mx-1 my-2 py-3 bg-dark" 
        >
            <div onClick={() => increment(1)}>
                <img src={imageUrl} style={{width: "5rem"}}/>
                
                <div 
                    className={`text-center 
                        ${item === 'coin' 
                        ? counter >= 10 
                            ? 'text-warning' 
                            : 'text-white' 
                        : 'text-white'}`} 
                >
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
            {
                showTresure()
            }
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