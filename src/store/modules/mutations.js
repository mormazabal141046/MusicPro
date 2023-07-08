import * as types from "./mutations-types";
import { errorAlert, infoAlert, successAlert } from "src/utils/notify";


const SET_ADD_CART = (state, data) => {
    console.log("SET_ADD_CART", data);
    let find = state.cart.findIndex(item => item.code == data.code)
    if(find == -1){
        state.cart.push(data)
        successAlert("Nuevo Producto agregado al Carrito", 'las la-cart-plus');

    }else{
        console.log("SIP", state.cart[find])
        state.cart[find].qty = state.cart[find].qty + 1 
        infoAlert(`Producto sumado. Llevas ${state.cart[find].qty} Unidades `, 'las la-cart-plus');

    }
}
const SET_EMPTY_CART = (state) => {
    state.cart = []
}

export default{
    [types.SET_ADD_CART]: SET_ADD_CART,
    [types.SET_EMPTY_CART]: SET_EMPTY_CART,

}
