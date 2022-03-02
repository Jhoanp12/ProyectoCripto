import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';
import axios from 'axios';
import './app.css';
import { Provider } from 'react-redux';
import store from '../src/redux/store';


function App() {
  const [moneda, setMoneda] = useState('');
  const [cripto, setCripto] = useState('');
  const [result, setResult] = useState({});



  useEffect(() => {
    if (moneda === '') return; // evito una primera ejecucion

    const cotizarCripto = async () => {
      // consultar la cotizacion
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`;
      const resultado = await axios.get(url);
      setResult(resultado.data.DISPLAY[cripto][moneda])
    }

    cotizarCripto();

  }, [moneda, cripto])
  return (
   <Provider store = {store}>
   <div className="app">
      <h1>Cotizador de criptomonedas</h1>
      <Formulario setMoneda={setMoneda}
        setCripto={setCripto} />
      <Cotizacion  result={result} moneda={moneda} cripto={cripto}/>
    </div>
    </Provider>
  );
}

export default App;
