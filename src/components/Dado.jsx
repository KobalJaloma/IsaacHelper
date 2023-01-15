import { useState } from "react"


export const Dado = ({num = 6}) => {
    

    const [dado, setDado] = useState(1);
    const delay = ms => new Promise(res => setTimeout(res, ms));

    const dadoUrl = `/dado/dado_${dado-1}.png` 
    const delayTime = 200;

    let clickButton = true;
  
    const randomNumber = async() => {

        if(clickButton){
            
            for (let index = 0; index < 10; index++) {
                const random = Math.floor(Math.random() * (num + 1));
                
                if(random > 0 && random < 7 ) {
                    setDado(random);
                }
                else {
                    setDado(3);
                }
                await delay(delayTime);
            }
        }
        
    }



    return (
    <div className=" mt-5 d-flex justify-content-center flex-column align-items-center" onClick={randomNumber}>
        <h1 className="text-center">D{num}</h1>
        <img src={dadoUrl} className="img-thumbnail" style={{maxWidth: 200}}/>
    </div>
  )
}
