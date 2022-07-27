import './App.css';
import Image from './images/Scarecrow.png'

function App() {
  return (
    <body>
      <div className='all'>
        <div>
          <text>404 not found</text>
        </div>
        <div>
        <div className='content'>
          <img src={Image} alt="Imagem" />
          </div>
          <div className='texts'>
            <h1>I have bad news <br/> for you</h1>
            <h3>The page you are looking for might be removed or is temporarily unavailable</h3>
            <button>Back to home page</button>
          </div>
          </div>
        </div>
    </body>
  )
}

export default App;

