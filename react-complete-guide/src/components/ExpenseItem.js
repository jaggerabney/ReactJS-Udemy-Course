// it's common convention in React applications to
// name things in PascalCase

// components in react are just javascript functions -
// special ones that return jsx code
// convention dictates that this function has the same name as the component

// there is one important rule regarding react components:
// you must have only one root element per component
function ExpenseItem() {
    return (
        <div>
            <div>May 3rd, 2021</div>
            <div>
                <h2>Car Insurance</h2>
                <div>$294.67</div>
            </div>
        </div>
    );
}

// components must be exported in order to be used
export default ExpenseItem;
