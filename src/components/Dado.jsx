import { useState } from "react"


export const Dice = ({num = 6}) => {
    
    //seteables
    const [dice, setDice] = useState(1);
    const [diceColor, setDiceColor] = useState('red');
    const [isRolling, setIsRolling] = useState(false);
    const delayTime = 200;
    const colors = {
        Red:        'e63946',
        Blue :      '219ebc',
        Yellow :    'ffb703',
        Black :     '000000',
        Pink :      'ffb4a2',
        Green:      '2a9d8f',
    }
    
    
    const delay = ms => new Promise(res => setTimeout(res, ms));
    const diceUrl = `/dado/dado_${diceColor}_${dice-1}.png` 

  
    const randomNumber = async() => {

        setIsRolling(true);
        
        for (let index = 0; index < 10; index++) {
            const random = Math.floor(Math.random() * (num + 1));
            if(random > 0 && random < 7 ) {
                setDice(random);
            }
            else {
                dice < 1 ? setDice(1) : setDice(6);
            }
            await delay(delayTime);
        }
        
        setIsRolling(false);
    }



    return (
    <div className=" my-5 d-flex justify-content-center flex-column align-items-center" >
        <h1 className="text-center bg-black px-5 py-2 text-white rounded">D{num}</h1>

        <div className="container my-3 d-flex justify-content-center">
            <button onClick={() =>  setDiceColor('black')} className="btn btn-sm mx-2 text-white" style={{background: '#' + colors.Black}}>Black</button>
            <button onClick={() =>  setDiceColor('red')} className="btn btn-sm mx-2 text-white" style={{background: '#' + colors.Red}}>Red</button>
            <button onClick={() =>  setDiceColor('blue')} className="btn btn-sm mx-2 text-white" style={{background: '#' + colors.Blue}}>Blue</button>
            <button onClick={() =>  setDiceColor('yellow')} className="btn btn-sm mx-2 text-white" style={{background: '#' + colors.Yellow}}>Yellow</button>
            <button onClick={() =>  setDiceColor('pink')} className="btn btn-sm mx-2 text-white" style={{background: '#' + colors.Pink}}>Pink</button>
            <button onClick={() =>  setDiceColor('green')} className="btn btn-sm mx-2 text-white" style={{background: '#' + colors.Green}}>Green</button>
        </div>

        <img src={diceUrl} className="img-thumbnail" style={{maxWidth: 200}} onClick={randomNumber}/>

        {
            isRolling 
            ? 
            <p className="bg-secondary text-white px-5 mt-1">Rolling...</p> 
            :
            <></>
        }


    </div>
  )
}
