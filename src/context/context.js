import { createContext, useReducer } from "react"
import { Reducer } from "./reducers"

const INITIAL_STATE = {
    darkMode: false,
}

export const Context = createContext(INITIAL_STATE)


export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE)

    return (
        <Context.Provider value={{
            darkMode: state.darkMode,
            dispatch,
        }}>
            {children}
        </Context.Provider>
    )
}