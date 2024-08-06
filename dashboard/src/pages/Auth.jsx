import React, { useState } from 'react'
import { Login, Register } from '../components'


const Auth = () => {
  const [showLogin, setShowLogin] = useState(true)
  return (
    <div>

      {showLogin ?
      <Login showLogin={showLogin} setShowLogin={setShowLogin} />
        :
        <Register showLogin={showLogin} setShowLogin={setShowLogin}  />

      }
    </div>
  )
}

export default Auth