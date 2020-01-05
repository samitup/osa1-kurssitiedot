import React from 'react';
import ReactDOM from 'react-dom';

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

    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total total={course.parts} />
        </div>
    )
}
const Header = (props) => {
    console.log(props)
    return (
        <h1>{props.course}</h1>
    )
}
const Content = (props) => {
    return (
        <div>
            <Part pt={props.parts[0].name} ex={props.parts[0].exercises} />
            <Part pt={props.parts[1].name} ex={props.parts[1].exercises} />
            <Part pt={props.parts[2].name} ex={props.parts[2].exercises} />
        </div>
    )
}
const Part = (props) => {
    return (
        <p>{props.pt} {props.ex}</p>
    )
}
const Total = (props) => {
    return (
        <div>
            <p>Total number of exercises: {props.total[0].exercises + props.total[1].exercises + props.total[2].exercises} </p>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));


