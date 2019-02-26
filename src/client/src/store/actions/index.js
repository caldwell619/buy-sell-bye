import axios from 'axios';
import {
    FETCH_USER
} from "./types";

// function to sign in
export const fetchUser = () => (dispatch) => {
    axios.get("/api/logged-user")
        .then(res => dispatch({type: FETCH_USER, payload: res.data}))
        .catch(error => console.log(error))
};

