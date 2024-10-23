import React,{useContext, useState} from 'react'
import { UserUserContext } from './hooks/userContext';


const Newuser = () => {
    const {users,setUsers}=UserUserContext()

    const [addnewUser,setAddNewUser]=useState();

    const handleNewChange=(e)=>{
         setAddNewUser(e.target.value)
    };

    const handleNewSubmit=(e)=>{
        e.preventDefault();
        const newUser={id:new Date().getTime().toString(), userName:addnewUser};
        setUsers(prevuser=>[...prevuser,newUser])
        setAddNewUser('')
    }
  return (
    <div>
      <h2 className='heading'>User Registration</h2>
      <form onSubmit={handleNewSubmit}>
             <label htmlFor='name'></label> 
             <input className='input' type='text' name='name' id='name' required value={addnewUser} onChange={handleNewChange}  />
             <button className="btn" type='submit' >Add User</button>

      </form>
    </div>
  )
}

export default Newuser
