import { useState } from "react"

function FormPracticeComponent() {
    const [formData, setFormData] = useState({
        name: "",
        email: ""
    })

    function handleSubmit(event) {
        event.preventDefault()
    }

    function handleOnChange(event) {
        const { name, value } = event.target
        setFormData({
            ...formData,
            [name]: value
        })
    }


    return (
        <div>
            <h1>Practice form</h1>
            <form onSubmit={handleSubmit} action="">
                <input
                    name="name"
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleOnChange}
                    placeholder="Enter your name"
                />

                <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleOnChange}
                    placeholder="Enter your email"
                />
            </form>
        </div>
    )
}

export default FormPracticeComponent