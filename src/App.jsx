import { useContext } from 'react';
import { Item, Dice } from './components'
import { CharacterContext } from './context/CharacterContexts';
import { useNavigate } from 'react-router-dom';
import './App.css'



function App() {
  
  const { Character } = useContext(CharacterContext);

  const navigate = useNavigate();

  const navigateHome = () => {
     navigate('/');
  }
  

  return (
    <div className="app">
      <h1 className='text-white text-center bg-dark py-1' onClick={navigateHome}>{Character.name}</h1>
      
      <div className="container mt-4 h-10">

          <div className='row row-cols-2 justify-content-center'>
            <div className="col">
              <div className="isaacCard">
                <img alt='not found' src={Character.tresure} className='image-fluid' style={{maxWidth: 300, height: 'auto'}}/>
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