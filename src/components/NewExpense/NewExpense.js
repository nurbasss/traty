import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const [showExpenseForm, setShowExpenseForm] = useState(false);
  const showExpenseFormHandler = () => {
    setShowExpenseForm(true);
  };
  const hideExpenseFormHandler = () => {
    setShowExpenseForm(false);
  };
  return (
    <div className="new-expense">
      {showExpenseForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onHideExpenseForm={hideExpenseFormHandler}
        />
      )}
      {!showExpenseForm && (
        <button onClick={showExpenseFormHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
