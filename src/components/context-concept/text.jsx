import { useContext } from "react"
import { Globalcontext } from "../../context/index.jsx"

function ContextTextComponent() {

    const { theme } = useContext(Globalcontext)

    // console.log(getStateFromGlobalContext);

    return <h1 style={{
        fontSize: theme === "light" ? "50px" : "100px",
        backgroundColor: theme === "light" ? "#fff" : "#000",
        color: theme === "light" ? "blue" : "yellow"
    }}>Christopher adegoke</h1>
}

export default ContextTextComponent