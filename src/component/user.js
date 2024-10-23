import React, { useContext } from 'react'
import { UserUserContext } from './hooks/userContext'


const User = ({user}) => {
   const{users,setUsers}=UserUserContext()
   const {id,userName}=user

   const handleDelete=(id)=>{
     const filter=users.filter(user=>id!==user.id)
     setUsers(filter)
   }
  return (
    <article className='user'>
    <h2>{id}</h2>
    <h3>{userName}</h3>
    <button type='submit' className='btn' onClick={()=>{
        handleDelete(id)
    }}>Delete</button>
  </article>
  )
}

export default User
