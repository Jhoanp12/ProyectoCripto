import axios from "axios";
import { CUNSULTA_API_SUCCESS, CUNSULTA_API_ERROR } from "../types";

export const consultarAPIAction = () => {
    return async (dispatch) =>{
        try{
            const result = await axios.get(`https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`)
            dispatch(consultarDatos(result.data.Data));
            console.log(result.data.Data);
        }
        catch (error){
            dispatch(consultaError(Error));
        }
    }
}  

const consultarDatos = (data) => ({
    type: CUNSULTA_API_SUCCESS,
    payload: data
});

const consultaError = (error) => ({
    type: CUNSULTA_API_ERROR,
    payload: error
});
