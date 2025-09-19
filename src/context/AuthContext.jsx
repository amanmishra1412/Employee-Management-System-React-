import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

export const AuthProv = createContext()

const AuthContext = ({children}) => {
// localStorage.clear()

  const [userData, setUserData] = useState(null)

  useEffect(() => {
    setLocalStorage()
    const {employeeData} = getLocalStorage()
    setUserData(employeeData)
  
  }, [])
  

  return (
    <div>
      <AuthProv.Provider value={[userData, setUserData]}>
        {children}
      </AuthProv.Provider>
    </div>
  )
}

export default AuthContext