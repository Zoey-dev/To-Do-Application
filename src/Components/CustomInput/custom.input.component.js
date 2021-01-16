import React, {useState} from 'react';
import './custom.input.style.scss';


function CustomInput(props) {
    const [isFocused, setFocused] = useState(false);
    const {type, name, value, label, handleChange, required, theme} = props;

    const handleLabelPosition = (state) => {
        if(value === ""){
            setFocused(state);
        }
    }

    return (
        <div className="custom-input">
            <label className={`custom-input-label ${isFocused ? " active" : ""}`}>{label}</label>
            <input
                onFocus= {() => setFocused(true)}
                onBlur = {() => handleLabelPosition(false)}
                name = {name}
                value = {value}
                type = {type}
                onChange = {handleChange}
                required = {required}
                theme = {theme}
            />
        </div>
    );
}

export default CustomInput;