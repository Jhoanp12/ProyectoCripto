import React from 'react'

const Cotizacion = ({result, moneda, cripto}) => {
    if(Object.keys(result).length === 0) return null; // si llega vacio no ejecuta nada
    console.log(result)
  return (
    <div>
        <h3>El precio del {cripto} en {moneda} es: {result.PRICE}</h3>
    </div>
  )
}

export default Cotizacion