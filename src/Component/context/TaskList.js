import React from 'react';
import { TaskListContext } from './TaskListContext';

const TaskList = () => {
    const {tasks, addTask, delTask} = React.useContext(TaskListContext)
    // const x = React.useContext(TaskListContext)
    // console.log(x)
    const [task, setTask] = React.useState('')
    return (
        <>
        <input name='todo' onChange={(e)=>setTask(e.target.value)}/>
        <button onClick={()=>addTask(task)} >add task</button>
        <button>clear</button>
        <ul>
            {tasks && tasks.map((task, index) => (
                <div style={{display : 'flex'}}  key={index}>
                    <li>{task.task} &nbsp;&nbsp;
                    <button onClick={()=>delTask(task.id)}>del</button>
                    </li>
                </div>
            ))}
        </ul>
        </>
    );
}

export default TaskList;