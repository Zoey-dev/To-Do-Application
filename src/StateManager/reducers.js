import {LOGIN_USER,
        ADD_TODO
     } from './types'

export const appReducer = (state, action) => {
    switch(action.type){
        case LOGIN_USER:
            console.log("Logged in user")
            return [...state
            ]
        case ADD_TODO:
            return [action.payload, ...state]
        default:
            return state;
    }
}