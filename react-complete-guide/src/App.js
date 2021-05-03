import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    // this is called jsx - javascript xml
    // its a developer-friendly way of writing pages that gets
    // transformed during compilation

    // pure javascript HTML manipulation is called imperative -
    // you are giving clear, step-by-step instructions on what
    // JS should be doing
    // it works, but is cumbersome and verbose
    // with react, we just specify the end state - what we want to see -
    // and react does all of the heavy lifting in the background

    // custom components are put into their own files
    // they exist in a sort of component tree, where the topmost component
    // is rendered into an html page and all subordinate components
    // are used as html elements in that page

    // custom components can also have their own attributes
    // from what i can tell, you literally just write whatever
    // and it becomes one of the component's properties
    // pretty cool tbh
    // you also need to specify the properties parameter in the
    // components function!
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>

    // all react elements must have their first letter capitalized;
    // that is how they are identified as react components
  );
}

export default App;
