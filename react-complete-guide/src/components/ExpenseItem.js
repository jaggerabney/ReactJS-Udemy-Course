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

function ExpenseItem(props) {
  // data can be passed to components
  // this is done via "props", which are essentially
  // custom HTML attributes
  return (
    <div className="expense-item">
      <div>{props.date.toLocaleString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

// components must be exported in order to be used
export default ExpenseItem;
