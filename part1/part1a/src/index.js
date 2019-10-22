import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';

const Hello = ({name, age}) => {

    const bornYear = () => new Date().getFullYear() - age

    return (
        <>
            <p>Hello {name}, you are {age} years old</p>
            <p>So you were most likely born in {bornYear()}</p>
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