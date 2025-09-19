import React, { useState } from 'react'

const Header = (props) => {
  // const [userName, setUserName] = useState('')

  // if(data.name != ''){
  //   setUserName(data.name)
  // }else{
  //   setUserName('Admin')
  // }

  const logOut = () => {
    localStorage.setItem('loginUser', '')
    props.changeUser('');
  }

  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>userName 😺</span></h1>
        <button onClick={logOut} className='px-5 py-2 text-lg font-medium bg-red-600 text-white rounded-md cursor-pointer'>Log Out 🔒</button>
    </div>
  )
}

export default Header