import React, { useReducer } from 'react';

// initial state
const initState = {
    transactions: [
        { id: 1, text: 'Sal', amount: 300 },
        { id: 2, text: 'Flower', amount: -10 },
        { id: 3, text: 'Book', amount: -20 },
        { id: 4, text: 'Camera', amount: 150 },
    ]
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE':
            console.log('delete------', action.payload)
            return {
                ...state,
                transactions: state.transactions.filter(t => t.id != action.payload)
            }
        case 'ADD':
            return {
                ...state,
                transactions: [...state.transactions, { id: Math.random(), text: action.payload.text, amount: action.payload.amount }]
            }
        default:
            return state
    }
}

// create the context
export const GlobalContext = React.createContext(initState)

// create provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initState)

    const deleteTransaction = (id) => dispatch({ type: 'DELETE', payload: id })
    const addTransaction = (transaction) => dispatch({ type: 'ADD', payload: transaction })
    // const getData = () => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(res => res.json())
    //         .then(json => {
    //             console.log(json)                
    //             dispatch({ type: 'GET_DATA', payload: json })
    //         })
    // }

    return (
        <GlobalContext.Provider value={{ transactions: state.transactions, deleteTransaction, addTransaction }}>
            {children}
        </GlobalContext.Provider>
    )
}