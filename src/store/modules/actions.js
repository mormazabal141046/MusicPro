import * as actionsTypes from "./actions-types";
import * as mutationTypes from "./mutations-types";

const SIGN_IN = async ({ commit }, { email, password }) => {
    try {
        // commit(mutationTypes.SET_CURRENT_USER, data);

    } catch (error) {
      errorAlert("Email y/o Contraseña Inválidos");
    }
}






export default {
    [actionsTypes.SIGN_IN]: SIGN_IN,

}
