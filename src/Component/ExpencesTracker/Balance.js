import React from 'react';
import { GlobalContext } from './Context/GlobalState';

const Balance = () => {
    const {transactions} = React.useContext(GlobalContext)
    console.log(transactions)
    let total = 0
    transactions.map(t =>  total += t.amount)
    return ( 
        <>
            <h4>Your Balance </h4>
            <h1 id='balance'>र{total}</h1>
        </>
     );
}
 
export default Balance