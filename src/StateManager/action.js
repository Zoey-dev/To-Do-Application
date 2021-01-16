import {ADD_TODO} from './types'

export const addTodo = (dispatch, payload) => {
    return dispatch({
        type: ADD_TODO,
        payload
    })
}