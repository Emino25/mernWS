import axios from "axios"
import { GETALLPRODUCTFAILED, GETALLPRODUCTLOAD, GETALLPRODUCTSUCCESSED } from "../actionTypes/productConst"

const getallproduct = () => async (dispatch) => {
    dispatch ({type:GETALLPRODUCTLOAD})
    try {
        const response = await axios.get("http://localhost:7000/product")
        console.log(response);
        dispatch ({type:GETALLPRODUCTSUCCESSED,payload:response.data})
    } catch (error) {
        dispatch({type:GETALLPRODUCTFAILED,payload:error})
    }
}