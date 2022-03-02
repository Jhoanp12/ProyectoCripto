import React, {useState, Fragment} from 'react'

const useCripto = (label, SelectMonedas, opciones) => {
  
  const [state, setState] = useState(SelectMonedas);
  
  const SelectCripto = () => (
  <Fragment>
    <label htmlFor="moneda">{label}</label>
    <select id='moneda'
    onChange={(e) => setState(e.target.value )}>
      <option value="">- Seleccionar -</option>
      {opciones.map(opcion => (
        <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>{opcion.CoinInfo.FullName}</option>
      ))}
    </select>
  </Fragment>
  );

  // retorna el stado, la interfaz y la funcion para modificar ese estado
  return [state, SelectCripto, setState];
}

export default useCripto