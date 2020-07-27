import React, { useState, useEffect, useContext } from 'react';
import '../css/additem.css';
import { BudgetContext } from '../context/BudgetContext';
import uuid from 'react-uuid';


const AddItem = () => {

    const [[revenue, setRevenue], [expanse, setExpanse]] = useContext(BudgetContext);

    const [check, setCheck] = useState('');
    const [name, setName] = useState('');
    const [value, setValue] = useState('');

    const [checkError, setCheckError] = useState(true);
    const [nameError, setNameError] = useState(true);
    const [valueError, setValueError] = useState(true);

    const additem = (e) => {
        e.preventDefault();

        if(name === ''){
            setNameError(false)
        }

        if(value === ''){
            setValueError(false)
        }

        if(check === ''){
            setCheckError(false)
        }

        if(check === '1' && name !== '' && value !==''){
            setRevenue(prev => [...prev, {id: uuid(), name: name, value: value, flag: 'rev'}]);
            setName('');
            setValue('');
        }else if(check === '2' && name !== '' && value !==''){
            setExpanse(prev => [...prev, {id: uuid(), name: name, value: value, flag: 'exp'}])
            setName('');
            setValue('');
        }
    }

    useEffect(
        () => {

        setTimeout(() => {
            setCheckError(true);
            setNameError(true);
            setValueError(true);
        }, 5000)   

    }, [checkError, nameError, valueError]);

    return(
        <form className="form">
            <div className="form__error" style={{display: checkError ? 'none' : 'block'}}>
                To pole jest obowiązkowe.
            </div>
            <div className="form__group form__group--checkbox" onChange={(e) => setCheck(e.target.value)}>
                <label className="form__label form__label--checkbox">
                    <input type="radio" value="1" name="check"/>
                    Revenue
                </label>
                <label className="form__label form__label--checkbox">
                    <input type="radio" value="2" name="check"/>
                    Expanse
                </label>
            </div>
            <div className="form__error" style={{display: nameError ? 'none' : 'block'}}>
                To pole jest obowiązkowe.
            </div>
            <div className="form__group">
                <label className="form__label">Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form__input"/>
            </div>
            <div className="form__error" style={{display: valueError ? 'none' : 'block'}}>
                To pole jest obowiązkowe.
            </div>
            <div className="form__group">
                <label className="form__label">Value:</label>
                <input type="number" value={value} onChange={(e) => setValue(e.target.value)} className="form__input"/>
            </div>
            <button onClick={additem} className="form__buttonAdd">Dodaj</button>
        </form>
    )
}

export default AddItem;