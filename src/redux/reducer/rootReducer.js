import { combineReducers } from "redux";
import  userDetail  from "./userReducer";

const rootReducer = combineReducers({
    userDetail:userDetail,
})


export default rootReducer;