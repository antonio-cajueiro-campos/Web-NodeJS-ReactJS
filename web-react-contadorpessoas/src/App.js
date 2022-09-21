import './App.css';
import { React, useState } from 'react'
function App() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(count => count + 1)
  }
  
  const decrease = () => {
    setCounter(count => count - 1)
  }

  return (
    <div className="app">
      <h1>Contador de pessoas</h1>
      <span className="count">{counter}</span><br />
      <input type="button" className="btn btn-plus" value="+" onClick={increase}/>
      <br />
      <input type="button" className="btn btn-minus" value="-" onClick={decrease}/>
    </div>
  );
}

export default App;
