import { useNavigate } from "react-router-dom";
import { ShuffleCard } from "../components";
import { isaacs } from '../data/characters';


export const Character = () => {
    
    const navigate = useNavigate();
    const characters = isaacs;
    
    
    const navGame = (name = '') => {
        navigate(`game/${name}`);
    }

    return (

    <div className="container">
        <h1 className="text-center bg-dark text-white py-1"> Escoge tu Isaac</h1>

        <ShuffleCard />

        <div className="row">

        <div className="overflow-x-hidden">
            <div className="row row-cols-3 mx-1 my-1">
                {
                characters.map(
                    isaac => (
                        <div className="col mt-1" onClick={() => navGame(isaac.name)} key={isaac.id}>
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
