import React, { createContext, useReducer } from 'react';
import {appReducer} from './reducers'

export const AppContext = createContext();



export default function AppContextProvider(props) {

    const intialState = [
        {
            id: 1,
            title:"Go to work",
            date:  Date.now,
            description: "hello from to do"
        }
    ]
    



    const [todo, dispatch] = useReducer(appReducer, intialState);
    return (
        <AppContext.Provider value={{todo, dispatch}} >
            {props.children}
        </AppContext.Provider>
    )
}
