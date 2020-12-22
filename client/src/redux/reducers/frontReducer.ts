import { SET_ERROR, SET_LOADING, TGL_ACTION_BTN } from "../actions/types"

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
            loading: true
        }
        case SET_ERROR: return {
            ...state,
            error: action.payload
        } 
        case TGL_ACTION_BTN: return{
            ...state,
            actionButtonOpen: !state.actionButtonOpen
        }
        default: return state;
    }
}