import { createContext,useState } from "react";

//creating usecontext for globally use

export const userContext=createContext({});

 const UsersProvider=({children})=>{

    const [users,setUsers]=useState([
        {id:1, userName:"Md Rashed"},
        {id:2, userName:"Md Mahinul"}
        ]);

   return  <userContext.Provider value={{users,setUsers}}>
    {children}
    </userContext.Provider>
}
export default UsersProvider