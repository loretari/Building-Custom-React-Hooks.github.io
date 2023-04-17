import React, { useState, useRef} from 'react';
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button';

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

const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value)
}

const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value)
}

    return (
<Card className = {classes.input}>
    <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input
        id = 'username'
        type= 'text'
        value={enteredUserName}
        onChange={userNameChangeHandler}
        ref={nameInputRef}

        />
        <label htmlFor= 'age'>Age (Years)</label>
        <input
        id = 'age'
        type= 'number'
        value={enteredAge}
        onChange={ageChangeHandler}
        ref={ageInputRef}
        />
        <Button type= 'submit'>Add User</Button>
    </form>
</Card>
    )
}

export default AddUser;