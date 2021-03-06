import React, { useState } from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import CustomInput from '../../Components/CustomInput/custom.input.component';
import Button from '../../Components/Button/button';
import { Link } from 'react-router-dom';
import './login.css'
import { useAuth } from '../../Contexts/AuthContexts';
import { Alert } from 'react-bootstrap';



export default function Login() {
    const [ formData, setFormData] = useState({email: "", password: "", error: ""});
    const { login } = useAuth();
    const [ error, setError] = useState('')
    const [ loading, setLoading] = useState(false)



    const handleOnChange = (evt) => {
        const {name, value} = evt.target
        setFormData({...formData, 
        [name]: value})
    }

    async function handleSubmit(e){
        e.preventDefault()

        try{
            setError('')
            setLoading(true)
            await login(formData.email, formData.password)
        }catch(error){
            console.log(error)
            setError('Failed to Sign in')
        }
        setLoading(false)
    }
   
    return (
        
        <div className="login-page">
            <div className="back-arrow"> <MdKeyboardArrowLeft /></div>

            <h1> Welcome <br/> Back!</h1>
            {error && <Alert variant="danger">{error}</Alert>}

            <form onSubmit={handleSubmit}>

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
            </form>

        <div className="links">
        <Link to="/signup">Sign Up</Link>
        <Link to="/forgotPassword">Forgot Password?</Link>
        </div>

        </div>
    )
}
