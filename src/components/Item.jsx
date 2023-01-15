import React from 'react';
import { useCounter } from '../hooks'
import './item.css';


export const Item = React.memo(({imageUrl, counterDefault = 2}) => {
    
    const { counter, increment, decrement } = useCounter(counterDefault);

    return (
        <div className="item border border-3 border-dark py-3">
            <div className='item-increment' onClick={() => increment(1)}>
                <img src={imageUrl} className='img-item'/>
                
                <div className="counterText">
                    <h1>{counter}</h1>
                </div>

            </div>

            <button 
                className='btn btn-dark btn-sm'
                onClick={() => {counter <= 0 ? decrement(0): decrement(1)} }
            >
            decrement  
            </button>
        </div>
    
    )
})
