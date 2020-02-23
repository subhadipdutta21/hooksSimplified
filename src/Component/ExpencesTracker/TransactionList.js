import React from 'react';
import { GlobalContext } from './Context/GlobalState';

const TransactionList = () => {
    const { transactions, deleteTransaction, getTransactions } = React.useContext(GlobalContext)
    console.log(transactions)

    React.useEffect(() => {
        getTransactions()
    }, [])

    return (
        <>
            <h3>History</h3>
            <ul className="list" id='list'>
                {transactions && transactions.map((transaction, index) => (
                    <li key={index} className={transaction.amount < 0 ? 'minus' : 'plus'}>
                        {transaction.text} <span>र{transaction.amount}</span>
                        <button className='delete-btn' onClick={() => deleteTransaction({ id: transaction._id })}>X</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default TransactionList;