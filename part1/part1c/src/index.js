import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {

    const startNum = 0

    const [ counter, setCounter ] = useState(startNum)

    const setToValue = (value) => {
        setCounter(value)
        console.log('counter is now', value)
    }

    return (
        <>
            Count: {counter}

            <button onClick={() => setToValue(counter+1)}>
                plus
            </button>

            <button onClick={() => setToValue(0)}>
                zero
            </button>
        </>
    )
}

let counter = 1

ReactDOM.render(<App counter={counter} />, document.getElementById('root'))
