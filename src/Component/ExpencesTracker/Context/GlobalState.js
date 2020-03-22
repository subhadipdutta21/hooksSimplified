import React, { useReducer } from 'react';
import axios from 'axios';
import { reducer } from './Reducer';

// initial state
const initState = {
    transactions: []
}

// create the context
export const GlobalContext = React.createContext(initState)

// create provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initState)

    // actions---    
    // delete transaction
    const deleteTransaction = (id) => {
        axios.post('/expences/deleteexpence', id).then(res => {
            console.log(res)
            dispatch({ type: 'DELETE', payload: id })
        })
    }

    // add transaction
    const addTransaction = (transaction) => {
        axios.post('/expences/add', transaction).then(res => {
            console.log(res)
            dispatch({ type: 'ADD', payload: transaction })
        })
    }
    // get all transactions
    const getTransactions = () => {
        axios.get('/expences/getall').then(res => {
            console.log(res)
            dispatch({ type: 'ALL', payload: res.data })
        })
    }

    return (
        <GlobalContext.Provider value={{ transactions: state.transactions, deleteTransaction, addTransaction, getTransactions }}>
            {children}
        </GlobalContext.Provider>
    )
}