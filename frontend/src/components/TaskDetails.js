import { useTasksContext } from '../hooks/useTasksContext'
import { useAuthContext } from '../hooks/useAuthContext'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const TaskDetails = ({ task , setCompleted}) => {
  const { dispatch } = useTasksContext()
  const { user } = useAuthContext()

  const handleClick = async () => {
    if (!user) {
      return
    }
    const response = await fetch('/api/tasks/' + task._id, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_TASK', payload: json})
    }
  }
  const handleCheck=()=>{
     if (task.completed==='No'){
        setCompleted('Yes')
     } else if (task.completed==='Yes') {
      setCompleted('No')
   }
   console.log(task.completed);
  }

  return (
    <div className="workout-details">
      <h4>{task.title}</h4>
      <p><strong>Description : </strong>{task.description}</p>
      <p><strong>Completed: </strong>{task.completed}</p>
      <p>{formatDistanceToNow(new Date(task.createdAt), { addSuffix: true })}</p>
      <span className="delete material-symbols-outlined" onClick={handleClick}>delete</span>
       <i className='check-icon' onClick={ handleCheck}>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"  className="bi bi-check-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
          <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
          
        </svg>
        </i> 
          
        
    </div>
  )
}

export default TaskDetails