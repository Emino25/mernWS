import { GETALLPRODUCTLOAD } from "../actionTypes/productConst";

const iniState = {products : [],load : false , error: null}

const productReducer = (state=iniState,{type,payload}) => {
    switch (type) {
        case GETALLPRODUCTLOAD:
            return {...state,load:true}
        default:
            return state;
    }
}