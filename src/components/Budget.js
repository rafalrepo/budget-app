import React, { useState, useEffect, useContext } from 'react';
import { BudgetContext } from '../context/BudgetContext';
import Column from './Column';
import '../css/budget.css';


const Budget = () => {

    const [[revenue, setRevenue], [expanse, setExpanse], [balance, setBalance]] = useContext(BudgetContext);

    return(
        <div className="budget">
            <h2 className="budget__balans">Balans: {balance}</h2>
            <div className="budget__columns">
                <Column title={'Revenue'} value={revenue}/>
                <Column title={'Expanse'} value={expanse}/>
            </div>
        </div>
    )
}


export default Budget;