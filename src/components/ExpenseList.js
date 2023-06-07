import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  const expenses = [
    { id: 1, name: "Shopping", cost: 50 },
    { id: 2, name: "Transport", cost: 80 },
    { id: 3, name: "Groceries", cost: 100 },
    { id: 4, name: "Utility", cost: 200 },
    { id: 5, name: "Rent", cost: 1200 },
  ];

  return (
    <ul className="list-group">
      {expenses.map((expense) => (
        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
      ))}
    </ul>
  );
};

export default ExpenseList;
