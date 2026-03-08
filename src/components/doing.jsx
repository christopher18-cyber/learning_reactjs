import { useContext } from "react";
import { AppContext } from "./appComponents.jsx";


export default function Navbar() {
    const [state, dispatch] = useContext(AppContext)

    return (
        <div>
            <h2>{state.user ? state.user.name : "Guest"}</h2>

            <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
                Theme:{state.theme}
            </button>
        </div>
    )
}