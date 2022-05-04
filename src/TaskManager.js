import Task from './Task'
import AddTask from './AddTask'
import {useState} from 'react'
import {useTasksQuery} from './services/taskApi'

function TaskManager() {

  const [openAddModal, setOpenAddModal] = useState(false)
  const {data,error,isLoading,isSuccess}=useTasksQuery();
  
  return (
    <div className='taskManager'>
      <header>Task Manager</header>
      <div className='taskManager__container'>
        <button 
          onClick={() => setOpenAddModal(true)}>
          Add task +
        </button>

        <div className='isErrorIsLoading'>
          {error && <p>An error occured</p>}
          {isLoading && <p>Loading...</p>}
        </div>
        <div className='taskManager__tasks'>
          {isSuccess && data.map(task=>{
            return (<Task
              key={task.id}
              id={task.id}
              title={task.title}
              description={task.description}
              completed={task.completed}
            />)
          })}
        </div>
      </div>

      {openAddModal &&
        <AddTask onClose={() => setOpenAddModal(false)} open={openAddModal}/>
      }

    </div>
  )
}

export default TaskManager
