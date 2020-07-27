import React, { useState, useEffect, createContext } from 'react';

export const BudgetContext = createContext();

export const sum = (f) => {
    let sum = 0;
    f.map(element => sum += parseInt(element.value));
    return sum;
}

export const BudgetProvider = ({ children }) => {

    const revenueItem = JSON.parse(localStorage.getItem('revenue')) || [];
    const expanseItem = JSON.parse(localStorage.getItem('expanse')) || [];

    const [revenue, setRevenue] = useState(revenueItem);
    const [expanse, setExpanse] = useState(expanseItem);

    const [balance, setBalance] = useState('');

    useEffect(
        () => {

        const difference = sum(revenue) - sum(expanse);

        setBalance(difference);

        localStorage.setItem('revenue', JSON.stringify(revenue));
        localStorage.setItem('expanse', JSON.stringify(expanse));


    }, [revenue, expanse]);

    return(
        <BudgetContext.Provider value={[[revenue, setRevenue], [expanse, setExpanse], [balance, setBalance]]}>
            { children }
        </BudgetContext.Provider>
    )
}