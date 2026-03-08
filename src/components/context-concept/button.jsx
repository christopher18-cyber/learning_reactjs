import { useContext } from "react"
import { Globalcontext } from "../../context/index.jsx"

function ContextButtonComponent() {

    const { theme, setTheme } = useContext(Globalcontext)

    return <button onClick={() => { setTheme(theme === "light" ? "dark" : "light") }}>Change Theme</button>
}

export default ContextButtonComponent