import React from 'react'
import ReactDOM from 'react-dom'

const Header = () => {
	const course = 'Half Stack application development'

	return (
		<div>
			<h1> {course}</h1>

		</div>
		)

}

const Content = (props) => {
	const part1 = 'Fundamentals of React'
	const part2 = 'Using props to pass data'
	const part3 = 'State of a component'

	return (
		<div>
			<p>{part1} {props.excercises1} </p>

			<p> {part2} {props.excercises2}</p>

			<p>{part3} {props.excercises3}</p>
		</div>
		)
}

const Total = (props) => {
	const total = "Total"
	return (
		<div>
			<p>{total} {props.excercises1 + props.excercises2 + props.excercises3} </p>
		</div>
		)
}
const App = () => {
	const excercises1 = 10
	const excercises2 = 7
	const excercises3 = 14


	return(
		<div>
			<Header/>
			<Content excercises1= {excercises1} excercises2={excercises2}  excercises3={excercises3} />
			<Total excercises1= {excercises1} excercises2={excercises2}  excercises3={excercises3}/>
		
		</div>
		)
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
