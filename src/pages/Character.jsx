import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { CharacterContext } from "../context/CharacterContexts";
import { isaacs } from '../data/characters';
import { getCharactersByName } from "../helpers/getCharactersByName";


export const Character = () => {
    
    const characters = isaacs;
    const navigate = useNavigate();

    const { setCharacter} = useContext(CharacterContext);

    console.log(getCharactersByName("Whore of Babylone"));


    const test = (name = '') => {
         const isaac = getCharactersByName(name);
         
         //object
         setCharacter( {
            name: isaac[0].name,
            card: isaac[0].cardUrl,
            tresure: isaac[0].objecturl,
         } );

         navigate('game');
    }

    
    
  
    return (

    <div className="container">
        <h1 className="text-center bg-dark text-white py-1"> Escoge tu Isaac</h1>
        <div className="row">

        <div className="overflow-x-hidden">
            <div className="row row-cols-3 mx-1 my-1" onClick={null}>
                {
                characters.map(
                    isaac => (
                        <div className="col mt-1" onClick={() => test(isaac.name)} key={isaac.id}>
                            <img className="img-fluid " src={isaac.cardUrl} alt={isaac.name}/>
                        </div>
                    )
                    )   
                }
            </div>
        </div>
    
        </div>
    </div>
    )
}
