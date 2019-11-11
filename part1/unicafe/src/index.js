import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

const Statistic = (props) => <tr><td>{props.text}</td><td>{props.value}{props.text==='positive'?'%':''}</td></tr>

const Statistics = (props) => {

    const updateAverage = () => (props.good - props.bad) / props.all

    const updatePositive = () => 100/props.all*props.good

    if (props.all > 0) {

        return (
            <>
                <h2>Statistics</h2>
                <table>
                <tbody>
                    <Statistic text="good" value={props.good} />
                    <Statistic text="neutral" value={props.neutral} />
                    <Statistic text="bad" value={props.bad} />
                    <Statistic text="all" value={props.all} />
                    <Statistic text="average" value={updateAverage()} />
                    <Statistic text="positive" value={updatePositive()} />
                </tbody>
                </table>
            </>
        )
    }

    return (
        <>
            <h2>Statistics</h2>
            <p>No feedback given</p>
        </>
    )
}

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)

    const updateGood = (newValue) => {
        setGood(newValue)
        setAll(all + 1)
    }
    const updateNeutral = (newValue) => {
        setNeutral(newValue)
        setAll(all + 1)
    }
    const updateBad = (newValue) => {
        setBad(newValue)
        setAll(all + 1)
    }

    return (
      <div>
        <h1>Give Feedback</h1>
        <Button handleClick={() => updateGood(good + 1)} text="Good" />
        <Button handleClick={() => updateNeutral(neutral + 1)} text="Neutral" />
        <Button handleClick={() => updateBad(bad + 1)} text="Bad" />
        <Statistics good={good} neutral={neutral} bad={bad} all={all} />
      </div>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'));
