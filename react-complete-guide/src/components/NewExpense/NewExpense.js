import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  function saveExpenseDataHandler(enteredExpenseData) {
    const [year, month, day] = enteredExpenseData.enteredDate.split("-");
    const expenseData = {
      id: Math.random().toString(),
      title: enteredExpenseData.enteredTitle,
      amount: Number(enteredExpenseData.enteredAmount),
      date: new Date(year, month - 1, day)
    };
    props.onAddExpense(expenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  );
}

export default NewExpense;
