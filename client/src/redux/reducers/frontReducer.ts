import { SET_ERROR, SET_LOADING, SET_ACTION_BTN } from "../actions/types"

const initalState = {
    error: "",
    loading: false,
    actionButtonOpen: false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state:any = initalState, action:any) => {
    switch(action.type){
        case SET_LOADING: return {
            ...state,
            loading: action.payload
        }
        case SET_ERROR: 
        console.error(action.payload);
        return {
            ...state,
            error: action.payload
        } 
        case SET_ACTION_BTN: 
        console.log("Triggered Action",action.payload)
        return{
            ...state,
            actionButtonOpen: action.payload
        }
        default: return state;
    }
}