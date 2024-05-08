import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudgetChange = (event) => {
        const parseData =  parseInt(event.target.value)
        if (parseData > 20000) {
            alert("budget can't exceed 20,000")
            return;
        }
        if (budget <= totalExpenses) {
            alert("you cannot reduce the budget lower than the spending")
            return;
            
        }
        setNewBudget(parseData);
        dispatch({ type: 'SET_BUDGET', payload: parseData });
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £
    {/* {budget} */}
</span>
<input type="number" step="10" min={0} max={200010} value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
