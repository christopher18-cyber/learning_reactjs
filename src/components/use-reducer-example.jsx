import { useReducer } from "react"

export default function UseReducerExample() {


    const initialState = {
        showTextFlag: false,
        changeTextStyle: false
    }

    const HIDE_TEXT = "HIDE_TEXT"

    const SHOW_TEXT = "SHOW_TEXT"

    const CHANGE_TEXT_STYLE = "CHANGE_TEXT_STYLE"

    function reducer(state, action) {
        switch (action.type) {
            case "HIDE_TEXT":
                console.log(state, action);
                return {
                    ...state,
                    showTextFlag: false
                }

            case "SHOW_TEXT":
                console.log(state, action);
                return {
                    ...state,
                    showTextFlag: true
                }

            case "CHANGE_TEXT_STYLE":
                console.log(state, action);
                return {
                    ...state,
                    changeTextStyle: !state.changeTextStyle
                }

            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    console.log(state);

    return <div>

        {
            state?.showTextFlag ? <h3>Use reducer Hook example</h3> : null
        }

        <button onClick={() => { dispatch({ type: SHOW_TEXT }) }}>Show text</button>
        <button onClick={() => { dispatch({ type: HIDE_TEXT }) }}>Hide text</button>
        <button onClick={() => { dispatch({ type: CHANGE_TEXT_STYLE }) }}>Toggle text styles</button>
    </div >
}