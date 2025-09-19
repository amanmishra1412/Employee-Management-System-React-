import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='h-[55%] w-full overflow-x-auto flex gap-5 items-center justify-start flex-nowrap mt-10 py-5'>
        {data.tasks.map((elem, idx)=>{
            if(elem.active){
                return <AcceptTask key={idx} data={elem} />
            }  
            if(elem.newTask){
                return <NewTask key={idx} data={elem} />
            }  
            if(elem.failed){
                return <FailedTask key={idx} data={elem} />
            }  
            if(elem.complete){
                return <CompleteTask key={idx} data={elem} />
            }
        })}
    </div>
  )
}

export default TaskList