import React, { useContext } from 'react';
import { GlobalContext } from './Context/GlobalState';

const AddTransaction = () => {
    
    const [amount, setAmount] = React.useState(0)
    const [text, setText] = React.useState('')
    const {addTransaction} = useContext(GlobalContext)

    const onSubmit =(e) => {
        e.preventDefault()
        addTransaction({amount :parseInt(amount), text})
    }
    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
                        (negative - expense, positive - income)</label
                    >
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount..." />
                </div>
                <button className="btn" type='submit'>Add transaction</button>
            </form>
        </>
    );
}

export default AddTransaction;