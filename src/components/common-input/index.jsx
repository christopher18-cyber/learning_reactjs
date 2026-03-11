function CommonInput({ label, type, id, name, placeholder, value, onChange }) {
    return <div>
        <label htmlFor={name}>{label}</label>
        <input
            type={type || "text"}
            id={id}
            name={name}
            placeholder={placeholder || "Enter value here"}
            value={value}
            onChange={onChange}
        />
    </div>
}

export default CommonInput 