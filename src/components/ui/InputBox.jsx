export default function InputBox({ handleChange, label, inputType, name, value }) {

    const handleInputChange = (e) => {
        handleChange(e)
    }

    return (
        <div className="field-box">
            <input type={inputType} name={name} value={value} required="" onChange={handleInputChange} />
            <label>{label}</label>
        </div>
    )
}