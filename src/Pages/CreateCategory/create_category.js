import React, { useState } from 'react'
import CustomInput from '../../Components/CustomInput/custom.input.component'
import { Button } from 'react-bootstrap'
import './create_category.css'

export default function CreateCategory() {
    const [ categoryForm, setCategoryForm ] = useState({tag: "", color: "#041955"})
    const [error, setError ] = useState('')
    const [ loading, setLoading ] = useState(false)


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
            (categoryForm.tag, categoryForm.color)
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
                    handleOnChange={handleOnChange}
                    required= {true}
                    />

                <div>

                    <label className="color-style">COLOR</label>
                <input
                    type="color"
                    name="color"
                    value={categoryForm.color}
                    label="Color"
                    required={true}
                    />
                 </div>   

                <div className="add-category">
                    
                <Button type="direction" />

                </div>

                    
            </form>
            
        </div>
    )
}
