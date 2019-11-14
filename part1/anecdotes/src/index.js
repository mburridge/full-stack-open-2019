import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Votes = ({num}) => <>{num} votes</>

const Mostvotes = ({anecdotes, votes}) => {
  const n = votes.indexOf(Math.max(...votes))
  return anecdotes[n]
}

const App = (props) => {
  const [selected, setSelected] = useState(0)

  const myArray = new Uint8Array(6)
  const [votes, setVotes] = useState(myArray)

  const voteForAnecdote = () => {
      const votesCopy = [...votes]
      votesCopy[selected] += 1
      setVotes(votesCopy)
      // console.log(votesCopy)
  }

  const nextAnecdote = () =>  {
      const num = Math.floor(Math.random() * 6)
      setSelected(num)
      // console.log(num)
  }

  return (
    <div>
      <h1>Current anecdote</h1>
      {props.anecdotes[selected]}
      {/* <p> */}
        {/* <Votes num={votes[selected]} /> */}
        <br />votes: {votes[selected]}
      {/* </p> */}
      <p>
        <Button onClick={voteForAnecdote} text="vote" />
        <Button onClick={nextAnecdote} text="next anecdote" />
      </p>
      <h2>Anecdote with the most votes</h2>
      <Mostvotes anecdotes={props.anecdotes} votes={votes} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
