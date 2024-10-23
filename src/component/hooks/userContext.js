import React, { useContext } from "react"
import { userContext } from "../context/userContext";


export const UserUserContext=()=>{
    return useContext(userContext);
}