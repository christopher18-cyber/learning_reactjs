import { useState } from "react"

function Rendernum() {
    const [count, setCount] = useState(0)

    function handleCountOnClick(event) {
        event.preventDefault()
        setCount(count + 1)
        if (count === 20) {
            setCount(count === 0)
        }

    }
    return (
        <div>
            <button onClick={handleCountOnClick}>Increase count</button>
            <p>{count}</p>
        </div>
    )
}

export default Rendernum