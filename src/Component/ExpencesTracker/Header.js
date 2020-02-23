import React from 'react';
import Balance from './Balance';
import IncomeExpences from './IncomeExpences';
import TransactionList from './TransactionList';
import AddTransaction from './AddTransaction';

const Header = () => {
    return (
        <h2>
            Expence Tracker
            <div className='container'>
                <Balance />
                <IncomeExpences />
                <TransactionList />
                <AddTransaction />
            </div>
        </h2>
    );
}

export default Header;