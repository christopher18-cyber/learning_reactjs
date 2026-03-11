import { useState } from "react"
import CommonForm from "../common-form/index.jsx"
import { RegisterFormElements } from "../../config/index.js"

const initialFormData = {
    name: "",
    email: "",
    password: "",
    username: ""
}

function RegisterComponent() {
    const [registerData, setRegisterData] = useState(initialFormData)

    function onHandleSubmit(event) {
        event.preventDefault()
        setRegisterData(initialFormData)
    }
    return (
        <div>
            <h1>Register page component</h1>
            <CommonForm
                formData={registerData}
                setFormData={setRegisterData}
                formControls={RegisterFormElements}
                buttonText={"Register"}
                onHandleSubmit={onHandleSubmit}
            />
        </div>
    )
}

export default RegisterComponent