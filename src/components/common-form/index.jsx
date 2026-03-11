import CommonInput from "../common-input/index.jsx";

const formTypes = {
    INPUT: "input",
    SELECT: "select",
    TEXTAREA: "textarea"
}

function CommonForm({ formControls = [], formData, setFormData, buttonText, onHandleSubmit }) {

    function renderFormElement(getCurrentElement) {
        let content = null

        switch (getCurrentElement?.componentType) {
            case formTypes.INPUT:
                content = <CommonInput
                    label={getCurrentElement.label}
                    name={getCurrentElement.name}
                    id={getCurrentElement.id}
                    type={getCurrentElement.type}
                    placeholder={getCurrentElement.placeholder}
                    value={formData[getCurrentElement.name]}
                    handleOnChange={(event) => setFormData({
                        ...formData,
                        [event.target.name]: event.target.value
                    })}
                />
                break;

            default:
                content = <CommonInput
                    label={getCurrentElement.label}
                    name={getCurrentElement.name}
                    id={getCurrentElement.id}
                    placeholder={getCurrentElement.placeholder}
                    value={formData[getCurrentElement.name]}
                    type={getCurrentElement.type}
                    handleOnChange={(event) => setFormData({
                        ...formData,
                        [event.target.name]: event.target.value
                    })}
                />
                break;
        }

        return content
    }
    return (
        <form onSubmit={onHandleSubmit} action="">
            {
                formControls?.length ?
                    formControls.map(singleFormElememtItem => renderFormElement(singleFormElememtItem))
                    : null
            }
            <div style={{
                marginTop: "15px"
            }}>
                <button type="submit">{buttonText || "Submit"}</button>
            </div>
        </form>
    )
}

export default CommonForm