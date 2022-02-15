import * as constants from './userConstants'

const initialState = {
    id: 0,
    name: '',
    firstName: '',
    job: '',
    salary: 0,
    date: 0
};
  
export function addUserReducer(state = initialState, action) {
    switch (action.type) {
      case constants.add:
        return {
          ...state
        };
      default:
        return state;
    }
}