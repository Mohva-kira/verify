import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentToken } from "../redux/authSlice";

import React from 'react'

const RequireAuth = ({children}) => {
  
    const dispatch = useDispatch()
    const stateToken = selectCurrentToken()
    // const location = useLocation()
    const storageAuth = JSON.parse(localStorage.getItem('auth'))
    const token = stateToken? stateToken: storageAuth?.jwt 
    console.log('token !!!', storageAuth?.jwt)
    const location = useLocation()
    localStorage.setItem('location',  location.pathname)
    console.log('location', location)

  return (
    token
    ? children
    : <Navigate to='/auth' state={{from:location}} replace />
  )
}

export default RequireAuth