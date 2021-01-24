import React, { useState } from 'react'
import { MdKeyboardArrowLeft } from 'react-icons/md';
import CustomInput from '../../Components/CustomInput/custom.input.component';
import './signup.css';
import Button from '../../Components/Button/button';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Contexts/AuthContexts';
import { Alert } from 'react-bootstrap';


export default function Signup() {
    const [ signupData, setSignUpData] = useState({name: "", email: "", password: "", confirmPassword: ""});
    const { signup } = useAuth()
    const [ error, setError] = useState('')
    const [ loading, setLoading] = useState(false)

    const handleOnChange = (evt) => {
        const {name, value} = evt.target
        setSignUpData({...signupData, 
        [name]: value})
    }

    async function handleSubmit(e){
        e.preventDefault()

        if( signupData.password !== signupData.confirmPassword){
            return setError('Passwords do not match')
        }

        try{
            setError('')
            setLoading(true)
            await signup(signupData.name, signupData.email, signupData.password)
        }catch(error){
            console.log(error)
            setError('Failed to create an account')
        }
        setLoading(false)
    }
    return (
        <div className="signup-page">
            <div className="back-arrow"> <MdKeyboardArrowLeft /></div>
            
            <h1>Create <br/> Account</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            
            <form onSubmit={handleSubmit}>

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
                        name="confirmPassword"
                        label="Confirm Password"
                        value={signupData.confirmPassword}
                        handleChange={handleOnChange}
                        required={true}
                    />

                    <div className="signup">
                    <h3>Sign Up</h3>
                    <Button disabled={loading} type="direction"/>
                    </div>
            </form>

        <Link className="link" to="/login" >Sign in</Link>
        </div>
    )
}
