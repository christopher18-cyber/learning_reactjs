import { createContext, useState } from "react";

export const Globalcontext = createContext(null)

function GlobalState({ children }) {
    const [theme, setTheme] = useState("light")

    return <Globalcontext.Provider value={{ theme, setTheme }}>{children}</Globalcontext.Provider>
}

export default GlobalState