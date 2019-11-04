import React, {useState} from 'react'
import ReactDOM from 'react-dom'

// const History = (props) => {

//     if (props.allClicks.length === 0) {
//         return (
//             <div>the app is used by pressing the buttons</div>
//         )
//     }

//     return (
//         <div>button press history: {props.allClicks.join(' ')}</div>
//     )

// }

// const Button = (props) => {
//     console.log('Props is : ', props)
//     const { onClickHandler, text } = props
//     return( <button onClick={onClickHandler}>
//         {text}
//     </button>)
// }

// const App = (props) => {

//     const [left, setLeft] = useState(0)
//     const [right, setRight] = useState(0)
//     const [allClicks, setAll] = useState([])

//     const handleLeftClick = () => {
//         setAll(allClicks.concat('L'))
//         setLeft(left + 1)
//     }

//     const handleRightClick = () => {
//         setAll(allClicks.concat('R'))
//         setRight(right + 1)
//     }

//     return (
//         <>
//             <div>
//                 {left}
//                 <Button onClickHandler={handleLeftClick} text='left' />
//                 <Button onClickHandler={handleRightClick} text='right' />
//                 {right}
//                 <History allClicks={allClicks} />
//             </div>
//         </>
//     )
// }

const Display = props => <div>{props.value}</div>

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const App = (props) => {
    const [value, setValue] = useState(10)

    // const setToValue = (newValue) => { setValue(newValue) }
    function setToValue(newValue) {
        setValue(newValue)
    }

    return (
        <div>
            <Display value={value} />
            <Button handleClick={() => setToValue(1000)} text="thousand" />
            <Button handleClick={() => setToValue(0)} text="reset" />
            <Button handleClick={() => setToValue(value + 1)} text="increment" />
            <Button handleClick={() => setToValue(value - 1)} text="decrement" />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
