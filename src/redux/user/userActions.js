import * as constants from './userConstants'

export const addUserAction = user => ({
    type: constants.add,
    payload: user
});