import React, { useState, Fragment} from 'react';
import AddUser from './components/Users/AddUser';


function App() {
 const [usersList, setUserList] = useState([]);


 const addUserHandler = (uName, uAge) => {
     setUserList((prevUserList) => {
         return [
             ...prevUserList,
             {name: uName, age: uAge, id: Math.random().toString()},
         ]
     })
 }

    return (
<Fragment>
    <AddUser onAddUser = {addUserHandler} />
    <div users = {usersList}></div>

        </Fragment>
    )
}

export default App;