
import './App.css';
import Counts from './Counts';
import img1 from './iete-logo-white.png'; 

function App() {
  return (
    <div className="App">
      
      <img className='img'  src={img1} alt=""  height={100} />
      <h1>Let's see how much you can click</h1>
      

       <Counts></Counts>
       

    </div>
  );
}

export default App;
