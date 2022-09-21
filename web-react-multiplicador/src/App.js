import './App.css';
import { React, useState } from 'react'
function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);

  
  const calc = () => {
    setResult(_ => number1 * number2)
  }

  return (
    <div className="app">
      <h1>Multiplicador de Números</h1>
      <br /><br />
      <input type="text" className="text" placeholder="Digite o primeiro n°" onChange={e => setNumber1(e.target.value)}/>
      <input type="text" className="text" placeholder="Digite o segundo n°" onChange={e => setNumber2(e.target.value)}/>
      <br />
      <input type="button" className="btn btn-calcular" value="Calcular" onClick={calc}/>
      <br /><br /><br />
      <span className="resultado">Resultado: {result}</span><br />
    </div>
  );
}

export default App;
