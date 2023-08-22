import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChange = (filterYear) => {
    setFilteredYear(filterYear);
  };

  const filteredExpenses = props.expenseList.filter(
    (ex) => ex.date.getFullYear() === Number(filteredYear)
  );
  return (
    <Card className="expenses">
      <ExpensesFilter
        onFilterChange={filterChange}
        selectedYear={filteredYear}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
