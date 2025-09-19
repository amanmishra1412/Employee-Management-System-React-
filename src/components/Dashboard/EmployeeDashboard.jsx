import React from 'react'
import Header from '../others/Header'
import TaskNumber from '../others/TaskNumber'
import TaskList from '../Tasklist/TaskList'

const EmployeeDashboard = ({data, changeUser}) => {

  return (
    <div className='p-10 h-screen bg-[#1C1C1C]'>
        <Header changeUser={changeUser} data={data} />
        <TaskNumber data={data} />
        <TaskList data={data} />
    </div>
  )
}

export default EmployeeDashboard