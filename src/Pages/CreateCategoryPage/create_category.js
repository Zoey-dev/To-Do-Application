import React, { useState, useContext } from 'react'
import CustomInput from '../../Components/CustomInput/custom.input.component'
import  Button  from '../../Components/Button/button'
import './create_category.css'
import { AuthContext } from '../../Contexts/AuthContexts'
import { v4 as uuidv4 } from 'uuid'

export default function CreateCategory() {
    const [ categoryForm, setCategoryForm ] = useState({tag: "", color: "#041955"})
    const [error, setError ] = useState('')
    const [ loading, setLoading ] = useState(false)
    const { currentUser } = useContext(AuthContext)
    // console.log(currentUser)


    const handleOnChange = (evt) => {
        const {name, value} = evt.target
        setCategoryForm({...categoryForm,
        [name]: value})
    }

    async function handleCreate(e){
        e.preventDefault()

        try{
            setError('')
            setLoading(true)
            const category = {tag: categoryForm.tag, color: categoryForm.color, userId: currentUser.id, id: uuidv4()} 
            console.log(category)
        }catch(error){
            console.log(error)
            setError('Failed to Create Category')
        }
        setLoading(false)
    }



    return (
        <div className="create-category">
            <h4>Create a Category</h4>
            <form onSubmit={handleCreate} className="category-form">
                <CustomInput
                    type="text"
                    name="tag"
                    value={categoryForm.tag}
                    label="TAG"
                    handleChange={handleOnChange}
                    required= {true}
                    />

                <div>

                    <label className="color-style">COLOR</label>
                <input
                    type="color"
                    name="color"
                    value={categoryForm.color}
                    label="Color"
                    onChange={handleOnChange}
                    required={true}
                    />
                 </div>   

                <div className="add-category">
                    <h3>CREATE</h3>
                <Button handleClick={handleCreate} type="direction" />

                </div>

                    
            </form>
            
        </div>
    )
}
