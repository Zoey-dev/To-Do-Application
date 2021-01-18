import React, { useState } from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import CustomInput from '../../Components/CustomInput/custom.input.component';
import Button from '../../Components/Button/button';
import { Link } from 'react-router-dom';
import './login.css'


export default function Login() {
    const [ formData, setFormData] = useState({email: "", password: "", error: ""});

    const handleOnChange = (evt) => {
        const {name, value} = evt.target
        setFormData({...formData, 
        [name]: value})
    }
   
    return (
        
        <div className="login-page">
            <div className="back-arrow"> <MdKeyboardArrowLeft /></div>

            <h1> Welcome <br/> Back!</h1>

            <CustomInput
                type= "text" 
                name= "email"
                value={formData.email}
                label="Email"
                handleChange={handleOnChange}
                required= {true}
            />
            <CustomInput
                type= "password" 
                name= "password"
                value={formData.password}
                label="Password"
                handleChange={handleOnChange}
                required= {true}
            />
        <div className="sign-in">
        <h3 >Sign In</h3>

        <Button type="direction" />
        </div>

        <div className="links">
        <Link to="/signup">Sign Up</Link>
        <Link to="google.com">Forgot Password</Link>
        </div>

        </div>
    )
}
