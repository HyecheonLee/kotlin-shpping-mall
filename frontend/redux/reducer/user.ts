import { ActionProps } from "../../types/state";
import axios from "axios";
import { API } from "../../config";
import { showPopupAction } from "./popup";

// actions
export const SIGN_IN = 'user/SIGN_IN';
export const SIGN_UP = 'user/SIGN_UP';

export const singInAction =
  (email: string, password: string) =>
    (dispatch) =>
      axios.post(`${API}/api/user/signIn`,
        JSON.stringify({email, password}), {withCredentials: true})
        .then(response => {
          if (response.headers["authorization"]) {
            localStorage.setItem("authToken", response.headers["authorization"].replace("Bearer", "").trim());
          }
          dispatch({
            type: SIGN_IN,
            user: response.data
          });
          dispatch(showPopupAction("로그인에 성공했습니다.", "", "success"))
        })
        .catch(e => {
          e.response.data
          dispatch(showPopupAction("로그인을 실패했습니다.", e.response.data.message, "danger"))
        });


export interface SignInAction {
  type: typeof SIGN_IN
}

export interface SignUpAction {
  type: typeof SIGN_UP
}

const initialState = {
  id: -1,
  username: "",
  name: null,
  email: null,
  profile: null,
  roles: [],
  photo: null,
};

const userReducer = (state = initialState, action: ActionProps) => {
  switch (action.type) {
    case SIGN_IN:
      return {...state, ...action.user}
    case SIGN_UP:
      return {...state, ...action.user}
    default:
      return state;
  }
}
export default userReducer