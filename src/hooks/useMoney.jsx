import React, { Fragment, useState } from 'react'

const useMoney = (label, SelectMonedas, opciones) => {

  const [state, setState] = useState(SelectMonedas);

  const Select = () => (
  <Fragment>
    <label htmlFor="moneda">{label}</label>
    <select id='moneda'
    onChange={(e) => setState(e.target.value )}>
      <option value="">- Seleccionar moneda -</option>
      {opciones.map(opcion => (
        <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
      ))}
    </select>
  </Fragment>
  );

  // retorna el stado, la interfaz y la funcion para modificar ese estado
  return [state, Select, setState];
}

export default useMoney