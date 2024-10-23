import React from 'react'


import UsersProvider from './component/context/userContext';
import Users from './component/users';
import Newuser from './component/newuser';


function App() {
  
  return (
   <UsersProvider>
 <div >
      <Newuser />
   <Users />
    </div>
   </UsersProvider>
   
   
  );
}

export default App;
