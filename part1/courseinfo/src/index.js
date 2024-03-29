import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    console.log('HEADER')
    console.log(props)
    return(
        <h1>{props.course.name}</h1>
    )
}

const Part = (props) => {
    return(
        <p>{props.course.name}__{props.course.exercises}</p>
    )
}

const Content = (props) => {
    console.log('CONTENT')
    console.log(props)
    return(
        <>
            <Part course={props.course.parts[0]} />
            <Part course={props.course.parts[1]} />
            <Part course={props.course.parts[2]} />
        </>
    )
}

const Total = (props) => {
    return(
        <p>Number of exercises: {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    return(
        <>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));