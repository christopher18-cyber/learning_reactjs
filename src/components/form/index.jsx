import { useState } from "react"

function FormComponent() {

    const [nameValue, setNameValue] = useState("")
    const [emailValue, setEmailValue] = useState("")
    const [formData, setFormData] = useState({
        name: "",
        email: ""
    })

    function handleInputChange(event) {
        const { value } = event.target
        setNameValue(value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log("namevalue", emailValue, nameValue);
    }

    function handleOnChange(event) {
        console.log(event.target.name);
        const { name, value } = event.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    function handleEmailChange(event) {
        const { value } = event.target
        setEmailValue(value)
    }

    return (
        <div>
            <h1>Form</h1>
            <form onSubmit={handleSubmit} action="">

                <input
                    type="text"
                    value={formData.name}
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    onChange={handleOnChange}
                />
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    onChange={handleOnChange}
                    value={formData.email}
                />
                <button type="submit" >Submit</button>
            </form>
        </div>
    )
}

export default FormComponent