import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    console.log('HEADER')
    console.log(props)
    return(
        <h1>{props.course}</h1>
    )
}

const Part = (props) => {
    return(
        <p>{props.course.name} - {props.course.exercises}</p>
    )
}

const Content = (props) => {
    console.log('CONTENT')
    console.log(props)
    return(
        <>
            <Part course={props.part1} />
            <Part course={props.part2} />
            <Part course={props.part3} />
        </>
    )
}

const Total = (props) => {
    return(
        <p>Number of exercises: {props.total}</p>
    )
}

const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14
    }

    return(
        <>
            <Header course={course} />
            <Content part1={part1} part2={part2} part3={part3} />
            <Total total={part1.exercises + part2.exercises + part3.exercises} />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));