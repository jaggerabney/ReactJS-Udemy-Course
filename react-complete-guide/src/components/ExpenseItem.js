// it's common convention in React applications to 
// name things in PascalCase

// components in react are just javascript functions -
// special ones that return jsx code
// convention dictates that this function has the same name as the component

function ExpenseItem() {
    return (
        <h2>Expense item!</h2>
    );
}

// components must be exported in order to be used
export default ExpenseItem;