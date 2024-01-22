import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const LogOut = () => {
    const navigate = useNavigate()
    localStorage.clear()
    useEffect(() => {
    navigate('/auth')
    
    },[])
  return (
    <div>LogOut</div>
  )
}

export default LogOut