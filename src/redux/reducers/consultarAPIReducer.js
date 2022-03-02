import {CUNSULTA_API_SUCCESS, CUNSULTA_API_ERROR} from "../types";

const initialState = {
    lista: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case CUNSULTA_API_SUCCESS:
            return {...state, lista: action.payload}
        case CUNSULTA_API_ERROR:
            return {...state, lista: []}
        default:
                return state;
        }
    
}