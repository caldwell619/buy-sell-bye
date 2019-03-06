import { COUNT_ALL_ADS } from "../actions/types";

export default (state = null, action) => {
    switch (action.type){
        case COUNT_ALL_ADS:
            return action.payload;
        default:
            return state
    }
}