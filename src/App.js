import React from 'react';
import './App.css';
import Budget from './components/Budget';
import { BudgetProvider } from './context/BudgetContext'
import AddItem from './components/AddItem';

function App() {
  return (
    <div className="App">
        <BudgetProvider>
          <Budget />
          <AddItem />
        </BudgetProvider>
    </div>
  );
}

export default App;
