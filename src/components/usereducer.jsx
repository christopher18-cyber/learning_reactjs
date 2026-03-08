import { useReducer } from "react"

const initialState = { count: 0 }

function reducer(state, action) {
    if (action.type === "INCRREMENT") {
        return { count: state.count + 1 }
    }
    if (action.type === "DECREMENT") {
        return { count: state.count - 1 }
    }
    if (action.type === "RESET") {
        return initialState
    }

    return state
}


export default function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState)
}