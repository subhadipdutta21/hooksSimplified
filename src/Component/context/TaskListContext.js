import React, { useState } from 'react';

// create the context
export const TaskListContext = React.createContext()

const initState = [
    { task: 'sleep', id: 1 },
    { task: 'code', id: 2 },
    { task: 'youtube', id: 3 },
]

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, action.payload]
        case 'DEL':
            return action.payload
        default: return state
    }
}


const TaskListContextProvider = (props) => {

    const [state, dispatch] = React.useReducer(reducer, initState);

    const addTask = (task) => dispatch({ type: 'ADD', payload: { task, id: Math.random() } })
    const delTask = (id) => dispatch({ type: 'DEL', payload: state.filter(item => item.id != id) })

    return (
        <TaskListContext.Provider value={{ tasks: state, addTask, delTask }}>
            {props.children}
        </TaskListContext.Provider>
    )
}

export default TaskListContextProvider