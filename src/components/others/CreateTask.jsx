import React, { useContext, useState } from 'react'
import { setLocalStorage } from '../../utils/LocalStorage'
import { AuthProv } from '../../context/AuthContext'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthProv)


    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [assignee, setAssignee] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [task, setTask] = useState({})

    const submit = (e) => {
        e.preventDefault()

        setTask({title, date, description, category, active:false, failed:false, newTask:true, completed:false})

        // const newTask = {
        //     title,
        //     date,
        //     description,
        //     category,
        //     active: false,
        //     failed: false,
        //     newTask: true,
        //     completed: false,
        // };
        
        const data = userData
        userData.forEach(elem => {
            if(assignee == elem.name){
                elem.tasks.push(task)
                elem.taskNumbers.newTask = elem.taskNumbers.newTask + 1 
            }
        });
        setUserData(data)
// localStorage.setItem('employees', JSON.stringify(data))

        setTitle('')
        setDate('')
        setAssignee('')
        setDescription('')
        setCategory('')
    }

    return (
        <div className='p-5 bg-[#1C1C1C] mt-7 rounded'>
            <form 
                onSubmit={submit} 
                className='flex justify-between items-center w-full flex-wrap'
            >
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className='text-sm py-1 px-2 w-4/5 mb-4 rounded outline-none bg-transparent border-[1px] border-white' 
                            placeholder='Create New Task' 
                            type="text" 
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input 
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className='text-sm py-1 px-2 w-4/5 mb-4 rounded outline-none bg-transparent border-[1px] border-white' 
                            type="date" 
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                        <input 
                            value={assignee}
                            onChange={(e) => setAssignee(e.target.value)}
                            className='text-sm py-1 px-2 w-4/5 mb-4 rounded outline-none bg-transparent border-[1px] border-white' 
                            placeholder='Employee Name' 
                            type="text" 
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input 
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className='text-sm py-1 px-2 w-4/5 mb-4 rounded outline-none bg-transparent border-[1px] border-white' 
                            placeholder='Design, Dev, etc.' 
                            type="text" 
                        />
                    </div>
                </div>
                <div className='w-1/2'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea 
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-2 border-white' 
                        cols="30" 
                        rows="10"
                    />
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-700 px-5 rounded text-sm mt-4 w-full'>
                        Create
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask
