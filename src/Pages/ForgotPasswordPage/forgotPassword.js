import React, { useState } from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import CustomInput from '../../Components/CustomInput/custom.input.component';
import Button from '../../Components/Button/button';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Contexts/AuthContexts';
import { Alert } from 'react-bootstrap';



export default function ForgotPassword() {
    const [ formData, setFormData] = useState({email: ""});
    const { resetPassword } = useAuth();
    const [ error, setError] = useState('')
    const [ loading, setLoading] = useState(false)
    const [ message, setMessage ] = useState('')



    const handleOnChange = (evt) => {
        const {name, value} = evt.target
        setFormData({...formData, 
        [name]: value})
    }

    async function handleSubmit(e){
        e.preventDefault()

        try{
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(formData.email)
            setMessage('Please check your inbox')
        }catch(error){
            console.log(error)
            setError('Failed to Reset Password')
        }
        setLoading(false)
    }
   
    return (
        
        <div className="login-page">
            <div className="back-arrow"> <MdKeyboardArrowLeft /></div>

            <h1> Reset <br/> Password</h1>
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
                       
                    <div className="sign-in">
                    <h3 >Reset Password</h3>

                    <Button type="direction" />
                    </div>
            </form>

        <div className="links">
        <Link to="/login">Sign In</Link>
        <Link to="/signup">Sign Up</Link>

        </div>

        </div>
    )
}
