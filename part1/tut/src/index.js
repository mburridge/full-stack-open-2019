import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';

const Hello = (props) => {
    return (
        <>
            <p>Hello {props.name}, you are {props.age} years old</p>
        </>
    )
}

const App = () => {
    const name = 'Peter'
    const age = 12

    return(
        <>
            <h1>Greetings</h1>
            <Hello name="Maya" age={26 + 10} />
            <Hello name={name} age={age} />
        </>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));