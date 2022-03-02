import React, {useEffect, useState} from 'react';
import useMoney from '../hooks/useMoney';
import useCripto from '../hooks/useCripto';
import Error from './Error';
import axios from 'axios';
import { consultarAPIAction } from '../redux/actions/consultarAPIAction';
import { useDispatch, useSelector } from 'react-redux';


const Formulario = ({setMoneda, setCripto}) => {

  const dispatch = useDispatch();

  const {lista} = useSelector((state) => state.lista)

  const [listCripto, setListCripto] = useState([]);

  // para la validacion (aunque para mi lo mejor y mas facil es usar un require en los campos)
  const [error, setError] = useState(false);

  const MONEDAS = [
    {codigo: "USD", nombre: "Dolar Estadounidese"},
    {codigo: "EUR", nombre: "Euro"},
  ];

  // estraigo de useMoneda el state y setState, aunque tengan diferentes nombres
  const [moneda, SelectMonedas] = useMoney('Selecciona una moneda ', '', MONEDAS);

  // de useCripto
  const [cripto, SelectCripto] = useCripto('Elige una cripto', '', lista);

  //ejecutar llamado a la api
  useEffect(()=>{
    dispatch(consultarAPIAction())

    //const consultarApi = async () =>{
      //const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
      //const resultado = await axios.get(url);
      //setListCripto(resultado.data.Data);
  },[]);

  const cotizar = (e) =>{
    e.preventDefault();

    if(cripto === '' || moneda === ''){
      setError(true);
      return;
    }
    setError(false);
    setMoneda(moneda);
    setCripto(cripto);
  }
  return (
    <form onSubmit={cotizar}>
      {error ? <Error /> : null}
      <SelectMonedas />
      <SelectCripto />
      <button type='su'>Enviar datos</button>
    </form>
  )
}

export default Formulario