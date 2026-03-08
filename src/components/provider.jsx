// import { useReducer } from "react";
// import { AppContext } from "./appComponents.jsx";

// const initialState = {
//     user: null,
//     theme: light
// }

// function reducer(state, action) {
//     if (action.type === "LOGIN") {
//         return { ...state, user: action.payload }
//     }
//     if (action.type === "LOGOUT") {
//         return { ...state, user: null }
//     }
//     if (action.type === "TOGGLE_THEME") {
//         return { ...state, theme: state.theme === "light" ? "dark" : "light" }
//     }

//     return state
// }


// export function AppProvider({ children }) {
//     const [state, dispatch] = useReducer(reducer, initialState)
//     return (
//         <AppContext.Provider value={{ state, dispatch }}>
//             {children}
//         </AppContext.Provider>
//     )
// }