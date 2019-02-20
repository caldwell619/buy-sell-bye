
import axios from 'axios';
import {
    FETCH_USER
} from "./types";


export const fetchUser = (username, password) => (dispatch) => {
    axios.post("http://localhost:8080/api/login",
        `username=${username}&password=${password}`)
        .then(res => {
            console.log(res);
            dispatch({type: FETCH_USER, payload: res.data})
        })
        .catch(err => {
            debugger;
        });
};

