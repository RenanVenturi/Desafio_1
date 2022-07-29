import './App.css';
import Image from './images/Scarecrow.png'

function App() {
  return (
    <body>
      <div className="all">
        <h3>404 NOT FOUND</h3>
        <div className="content"> 
          <img src={Image} alt=""/>
          <div>
            <h1>I have bad news <br /> for you</h1>
            <h2>The page you are looking for might be removed or is temporarily unavailable</h2>
            <button>Back to home</button>
          </div>
        </div>
      </div>
    </body>
  )
}

export default App;

