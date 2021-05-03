// it's common convention in React applications to
// name things in PascalCase

// components in react are just javascript functions -
// special ones that return jsx code
// convention dictates that this function has the same name as the component

// there is one important rule regarding react components:
// you must have only one root element per component

// css files can be written for components as well;
// they must be imported for them to work however
import "./ExpenseItem.css";

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>May 3rd, 2021</div>
            <div className="expense-item__description">
                <h2>Car Insurance</h2>
                <div className="expense-item__price">$294.67</div>
            </div>
        </div>
    );
}

// components must be exported in order to be used
export default ExpenseItem;
