import React, { useState, useRef} from 'react';
import Card from '../UI/Card'
import classes from './AddUser.module.css'

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
const [enteredUserName, setEnteredUserName]  = useState('');
const [enteredAge, setEnteredAge] = useState('');

const addUserHandler = (event) => {
    event.preventDefault()
const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    props.onAddUser(enteredName, enteredUserAge)
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
}




    return (
<Card className = {classes.input}>
    <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input
        id = 'username'
        type= 'text'
        ref={nameInputRef}

        />
        <label htmlFor= 'age'>Age (Years)</label>
        <input
        id = 'age'
        type= 'number'
        ref={ageInputRef}
        />
        <button type= 'submit'>Add User</button>
    </form>
</Card>
    )
}

export default AddUser;