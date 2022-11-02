import * as ACTION_TYPES from '/Users/drewhines/Desktop/projects/travel-blog/travel-blog/Client/src/store/actions/action_types.js'


export const initialState = {
  user_textChange: '',
  user_textSubmit: ''
}


export const FormReducer = (state, action) => {
    switch(action.type) {
      case ACTION_TYPES.USER_INPUT_CHANGE:
        return {
          ...state,
          user_textChange: action.payload
        }
      case ACTION_TYPES.USER_INPUT_SUBMIT:
        return {
          ...state,
          user_textSubmit: action.payload
        }
      default:
        throw new Error();
    }
}