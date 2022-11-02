import * as ACTION_TYPES from '/Users/drewhines/Desktop/projects/travel-blog/travel-blog/Client/src/store/actions/action_types.js'

export const initialState = {
  stateprop1: false,
  stateprop2: false
}

export const Reducer1 = (state = initialState, action) => {
    switch(action.type) {
      case ACTION_TYPES.SUCCESS:
        return {
          ...state,
          stateprop1: true,
          stateprop2: true
        }
      case ACTION_TYPES.FAILURE:
        return {
          ...state,
          stateprop1: false,
          stateprop2: false
        }
      default:
        throw new Error();
    }
}