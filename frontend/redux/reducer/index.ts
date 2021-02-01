import { combineReducers } from "redux";
import user from "./user";
import popup from "./popup";
import { PopupState, UserState } from "../../types/state";

export type RootState = {
  user: UserState,
  popup: PopupState
}

export default combineReducers({
  user, popup
})