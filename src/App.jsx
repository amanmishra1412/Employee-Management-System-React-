import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthProv } from "./context/AuthContext";


const App = () => {

  const [user, setUser] = useState(null)
  const [logInUserData, setLogInUserData] = useState(null)
  const [userData, setUserData] = useContext(AuthProv)

  useEffect(()=>{
    const logUser = localStorage.getItem('loginUser')
    if(logUser){
      const user = JSON.parse(logUser)
      setUser(user.role)
      setLogInUserData(user.data)
    }
  },[])
  

  const handleLogin = (email, password) => {
    if(email == 'admin@gmail.com' && password == '123'){
      setUser('admin')
      localStorage.setItem('loginUser', JSON.stringify({'role':'admin'}))
    }else if(userData){
      const employee = userData.find((e)=>email == e.email && e.password == password);
      if(employee){
        setUser('employees')
        setLogInUserData(employee)
        localStorage.setItem('loginUser', JSON.stringify({'role':'employees', 'data':employee}))
      }
    } else{
      alert('Invalid')
    }
  }
  // console.log(user)

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employees' ? <EmployeeDashboard changeUser={setUser} data={logInUserData} /> : null) }
    </>
  )
};

export default App;
