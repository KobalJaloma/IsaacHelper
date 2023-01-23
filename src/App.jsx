import { Item, Dice } from './components'
import { useNavigate, useParams } from 'react-router-dom';
import { getCharactersByName } from './helpers/getCharactersByName';
import './App.css'



function App() {
  
  const { isaac } = useParams();
  const Character = getCharactersByName(isaac);

  const {name, objecturl} = Character[0];



  const navigate = useNavigate();

  const navigateHome = () => {
     navigate('/');
  }
  

  return (
    <div className="app">
      <h1 className='text-white text-center bg-dark py-1' onClick={navigateHome}>{name}</h1>
      
      <div className="container mt-4 h-10">

          <div className='row row-cols-2 justify-content-center'>
            <div className="col">
              <div className="isaacCard">
                <img alt='not found' src={objecturl} className='image-fluid rounded border border-3 border-dark' style={{maxWidth: 300, height: 'auto'}}/>
              </div>
            </div>

          </div>
      </div>  

      <div className='container mt-4 d-flex justify-content-center'>
        <div className="row row-cols-2 justify-content-center" style={{maxWidth: 600}}>
          
          <div className='col'>
            <Item 
              imageUrl='https://cdn.discordapp.com/attachments/1062288717097746442/1064033702063124501/heart.png'
              counterDefault={2}
            />      
          </div>

          <div className='col'>
            <Item 
              imageUrl='https://cdn.discordapp.com/attachments/1062288717097746442/1063367722903285770/atack.png'
              counterDefault={1}
            />
          </div>

          <div className='col'>
            <Item 
              imageUrl='https://cdn.discordapp.com/attachments/1062288717097746442/1064033702688083968/coin.png'
              counterDefault={3}
              item="coin"
              tresure = {true}
              />  
          </div> 

        </div>
      </div>

      <div className="container">
        <Dice />
      </div>
    </div>
  )
}

export default App


// <div className="overflow-x-hidden">
// <div className="row mx-1 my-1" onClick={null} key={isaac.id}>
//     <div className="col">
//         <img className="img-fluid " src={isaac.cardUrl} />
//     </div>
//     <div className="col">
//         <img className="img-fluid " src={isaac.objecturl} />
//     </div>
// </div>
// </div>