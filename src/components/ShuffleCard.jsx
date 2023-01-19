import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isaacs } from '../data/characters'

export const ShuffleCard = () => {

    const isaacsLength = isaacs.length;
    const [card, setCard] = useState({
        name: '',
        cardUrl: '',
    });
    const { cardUrl, name } = card;
    const navigate = useNavigate();

    
    const shuffleCard = () => {
        const random = Math.floor(Math.random() * (isaacsLength));
        const selected = isaacs[random];
        setCard(selected);
    }

    const navGame = (name = '') => {
        navigate(`game/${name}`);
    }

    return (
        <div className="container mb-2">
            <div className="d-flex flex-column">

                {
                    !(card === '') 
                    ?   <div 
                            className="container d-flex justify-content-center my-2"
                            onClick={() => navGame(name)}    
                        >   
                            <img src={cardUrl} className='img-fluid' />
                        </div>
                    
                    : <></>
                }

                <button
                    className="btn btn-dark"
                    onClick={shuffleCard}
                >

                    Isaac Random
                </button>
            </div>
        </div>
    )
}
