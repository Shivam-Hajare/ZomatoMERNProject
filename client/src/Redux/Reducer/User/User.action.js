import axios from "axios";
import { AUTH_USER, CLEAR_USER, GET_USER, SELF } from "./User.type";

// Redux types


export const getUser = (_id) => async (dispatch) => {
    try {
        const User = await axios({
            method: "GET",
            url: `http://localhost:4000/user/${_id}`,
        });
     
        return dispatch({ type: GET_USER, payload: User.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};

export const getMyself = (_id) => async (dispatch) => {
    try {
        const User = await axios({
            method: "GET",
            url: `http://localhost:4000/user/${_id}`,
        });
     
        return dispatch({ type: SELF, payload: User.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};

export const clearUser = () => async (dispatch) => {
    try {     
        return dispatch({ type: CLEAR_USER, payload: {} });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};