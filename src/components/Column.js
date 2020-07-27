import React, { useContext } from 'react';
import '../css/budget.css';
import { BudgetContext, sum } from '../context/BudgetContext';


const Column = ({ title, value }) => {

    const [[revenue, setRevenue], [expanse, setExpanse]] = useContext(BudgetContext);

    const removeItem = (id, flag) => {
            
        if(flag === 'rev'){
            const rev = revenue.filter(el => el.id !== id);
            setRevenue(rev);
        }

        if(flag === 'exp'){
            const exp = expanse.filter(el => el.id !== id);
            setExpanse(exp);
        }
    }

    return(
        <div className="budget__column">
            <h2 className="budget__heading">{ title }: { title === 'Revenue' ? sum(revenue) : sum(expanse) }</h2>
            <table className="budget__list">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Value</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {value.map(element => 
                        <tr key={element.id}>
                            <td>{element.name}</td>
                            <td>{element.value}</td>
                            <td>
                                <button className="budget__removeItem" 
                                    onClick={(e) => {if(window.confirm('Do you want to delete this item?')){removeItem(element.id, element.flag)}}}>
                                    x
                                </button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}


export default Column;