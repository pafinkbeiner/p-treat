import { SET_ERROR, SET_LOADING, SET_ACTION_BTN } from "./types"

export const setError = (payload: string) => {
    return (dispatch: any) => {
        dispatch({
            type: SET_ERROR,
            payload
        })
    }
}

export const setLoading = (payload: boolean) => {
    return (dispatch: any) => {
        dispatch({
            type: SET_LOADING,
            payload
        })
    }
}

export const setActionButton = (payload: boolean) => {
    return (dispatch: any) => {
        dispatch({
            type: SET_ACTION_BTN,
            payload
        })
    }
}