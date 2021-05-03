import ExpenseItem from "./components/ExpenseItem";

function App() {
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
        <div>
            <h2>Let's get started!</h2>
            <ExpenseItem></ExpenseItem>
        </div>

        // all react elements must have their first letter capitalized;
        // that is how they are identified as react components
    );
}

export default App;
