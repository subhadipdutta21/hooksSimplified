import React, { useContext } from 'react';
import { GlobalContext } from './Context/GlobalState';

const IncomeExpences = () => {
    let {transactions} = useContext(GlobalContext)
    let income = 0
    let expense = 0
    transactions.forEach(t=> {
        t.amount > 0 ? income+= t.amount : expense += t.amount
    })

    console.log(income, expense)
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">र{income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">र{expense}</p>
            </div>
        </div>
    );
}

export default IncomeExpences;