import {combineReducers} from "redux"
import frontReducer from "./frontReducer"

export default combineReducers({
    front: frontReducer
});