import React, { useContext } from 'react'

import User from './user'
import { UserUserContext } from './hooks/userContext'

const Users = () => {
   const {users,setUser}=UserUserContext()
  return (
    <section className="users">
      {users.map(user=><User key={user.id} user={user}  />)}
    </section>
  )
}

export default Users
