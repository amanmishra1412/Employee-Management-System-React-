import React, { useContext } from 'react'
import { AuthProv } from '../../context/AuthContext'

const AllTask = () => {

    const [userData, setUserData] = useContext(AuthProv)
    // const {employeeData} = userData
    // console.log(employeeData)

  return (
    <div className='bg-[#1C1C1C] p-5 mt-5 rounded'>
        <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
            <h3 className='text-lg font-medium w-1/5'>New Task</h3>
            <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
            <h5 className='text-lg font-medium w-1/5'>Completed</h5>
            <h5 className='text-lg font-medium w-1/5'>Failed</h5>
        </div>
        <div className=''>
            {userData.map((elem, idx)=>{
           return <div key={idx} className='mb-2 border-[1px] border-white py-2 px-4 flex justify-between rounded'>
                <h2 className='text-lg font-medium w-1/5'>{elem.name}</h2>
                <h3 className='text-lg font-medium w-1/5 text-blue-600'>{elem.taskNumbers.newTask}</h3>
                <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskNumbers.active}</h5>
                <h5 className='text-lg font-medium w-1/5 text-green-600'>{elem.taskNumbers.complete}</h5>
                <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskNumbers.failed}</h5>
            </div>
        })}
        </div>
    </div>
  )
}

export default AllTask