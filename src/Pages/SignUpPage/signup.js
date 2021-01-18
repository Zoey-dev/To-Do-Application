import React, { useState } from 'react'
import { MdKeyboardArrowLeft } from 'react-icons/md';
import CustomInput from '../../Components/CustomInput/custom.input.component';
import './signup.css';
import Button from '../../Components/Button/button';
import { Link } from 'react-router-dom';


export default function Signup() {
    const [ signupData, setSignUpData] = useState({name: "", email: "", password: "", confirmPassword: ""});
    
    const handleOnChange = (evt) => {
        const {name, value} = evt.target
        setSignUpData({...signupData, 
        [name]: value})
    }
    return (
        <div className="signup-page">
            <div className="back-arrow"> <MdKeyboardArrowLeft /></div>
            
            <h1>Create <br/> Account</h1>

            <CustomInput 
                type="text"
                name="name"
                label="Name"
                value={signupData.name}
                handleChange={handleOnChange}
                required={true}
            />
            <CustomInput 
                type="text"
                name="email"
                label="Email"
                value={signupData.email}
                handleChange={handleOnChange}
                required={true}
            />
            <CustomInput 
                type="password"
                name="password"
                label="Password"
                value={signupData.password}
                handleChange={handleOnChange}
                required={true}
            />
            <CustomInput 
                type="password"
                name="password"
                label="Confirm Password"
                value={signupData.confirmPassword}
                handleChange={handleOnChange}
                required={true}
            />

            <div className="signup">
              <h3>Sign Up</h3>
              <Button type="direction"/>
            </div>

        <Link className="link" to="/signin" >Sign in</Link>
        </div>
    )
}
