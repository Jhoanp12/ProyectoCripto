import { combineReducers } from "redux";
import reducer from './consultarAPIReducer';

export default combineReducers({
     lista: reducer
})