import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {

    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])

    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        setLeft(left + 1)
        console.log(allClicks)
        console.log(left)
    }

    const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        setRight(right + 1)
    }

    return (
        <>
            <div>
                {left}
                <button onClick={handleLeftClick}>left</button>
                <button onClick={handleRightClick}>right</button>
                {right}
                <p>{allClicks.join(' ')}</p>
            </div>
        </>
    )
}

ReactDOM.render(<App name="Michael" />, document.getElementById('root'));
