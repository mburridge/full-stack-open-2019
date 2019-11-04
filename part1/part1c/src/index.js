import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = ({counter}) => <>Counter: {counter}</>

const Button = ({ onClick, text }) =>
    <button onClick={onClick}>
      {text}
    </button>

const App = () => {

    const startNum = 0

    const [ counter, setCounter ] = useState(startNum)

    const setToValue = (value) => () => setCounter(value)

    return (
        <>
            <Display counter={counter} />

            <Button
                onClick={setToValue(counter + 1)}
                text='plus'
            />
            <Button
                onClick={setToValue(counter - 1)}
                text='minus'
            />
            <Button
                onClick={setToValue(0)}
                text='zero'
            />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
