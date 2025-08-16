// import { useEffect } from "react"

import { Navigate } from "react-router";
import MyLayout from "../Layout/Layout";

// useEffect(()=>{
//     if(localStorage){
//     }
// }, [])

const ProtectedRoutes = ({ children, }) => {
    const isLoggedIn = localStorage?.getItem("isLoggedIn");
    console.log(isLoggedIn, "isLoggedIn");

    if(!isLoggedIn){
        return <Navigate to="/login" replace /> 
    }
    
  return <MyLayout>{children}</MyLayout>
}
export default ProtectedRoutes
