import React from 'react'

const TaskNumber = ({data}) => {
  return (
    <div className='flex justify-between mt-5 gap-5'>
        <div className='rounded-xl w-[25%] py-6 px-5 bg-blue-400'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.newTask}</h2>
            <h3 className='text-3xl font-semibold'>New Task</h3>
        </div>
        <div className='rounded-xl w-[25%] py-6 px-5 bg-green-400'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.complete}</h2>
            <h3 className='text-3xl font-semibold'>Completed Task</h3>
        </div>
        <div className='rounded-xl w-[25%] py-6 px-5 text-black bg-yellow-400'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.active}</h2>
            <h3 className='text-3xl font-semibold'>Accepted Task</h3>
        </div>
        <div className='rounded-xl w-[25%] py-6 px-5 bg-red-400'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.failed}</h2>
            <h3 className='text-3xl font-semibold'>Failed Task</h3>
        </div>

    </div>
  )
}

export default TaskNumber