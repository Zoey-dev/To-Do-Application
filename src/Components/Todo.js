import React, {useState, useContext} from 'react';
import {AppContext} from '../StateManager/context'
import {addTodo} from '../StateManager/action'
import { v4 as uuidv4 } from 'uuid'

function Todo(props) {
    const [formData, setFormData] = useState({title: "", description: ""});

    const {dispatch, todo} = useContext(AppContext)

    const handleForm = (e) => {
        const {value, name} = e.target; 
        setFormData({
            ...formData, [name]: value
        })
    }

    const submitTodo = () => {
        const payload = {
            ...formData, 
            date: Date.now,
            id: uuidv4()
        }
        addTodo(dispatch, payload);
        setFormData({title: "", description: ""});
    }


    return (
        <div>
            <h2>Hey Todo</h2>
            {
                todo.map(a => (<div key={a.id}>{a.title} </div>))
            }
            <input name="title" value={formData.title } required onChange={handleForm} />
            <input name="description" value={formData.description } required onChange={handleForm} />
            <button onClick={submitTodo}>Click me!</button>
        </div>
    );
}

export default Todo;