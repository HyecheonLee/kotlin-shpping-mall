import { PopupProps } from "../../types/state";

// actions
export const SHOW_POPUP = 'popup/SHOW_POPUP';
export const HIDE_POPUP = 'popup/HIDE_POPUP';

export const showPopupAction = (title, body, variant = null) => {
  return {
    type: SHOW_POPUP,
    popup: {
      title: title,
      body: body,
      variant: variant
    }
  }
}

export const hidePopupAction = () => {
  return {
    type: HIDE_POPUP,
  }
}


const initialState = {
  isDisplay: false,
  popup: {
    title: "",
    body: "",
    variant: null
  },
};

const errorReducer = (state = initialState, action: PopupProps) => {
  switch (action.type) {
    case SHOW_POPUP:
      return {
        ...state,
        isDisplay: true,
        popup: {...action.popup}
      }
    case HIDE_POPUP:
      return {...state, isDisplay: false}
    default:
      return state;
  }
}
export default errorReducer