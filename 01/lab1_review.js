/*
Purpose: Review JS comcepts
Prototype vs Classes
Regular functions, anonymous functions, arrow functions
Callback functions
MERN: N stands for Node.js
*/
var globalVariable = 100
let localVariable = 200
function functionName() {
	let varInFunc = 'local'
}

// console.log(varInFunc)

// Prototype - one time use object from a prototype
const oneTimeUseObj = {
	prop1: 'Caio',
	prop2: 'comp3133',
	method1: function (param1) {
		console.log(param1)
	},
}

console.log(oneTimeUseObj)
console.log(oneTimeUseObj.prop1)
console.log(oneTimeUseObj.prop2)
oneTimeUseObj.method1('pizza')

// Prototype - using a constructor
function Student(studentName, course, lunch) {
	this.studentName = studentName
	this.course = course
	this.lunch = lunch

	this.method1 = function (param1) {
		return param1
	}
}

const morningStudent = new Student('Caio', 'comp3123', 'noodles')
console.log(morningStudent)
console.log(morningStudent.studentName)
console.log(morningStudent.course)
morningStudent.method1(morningStudent.lunch)

// Classes - always have constructors

class Prof {
	constructor(profName) {
		this.profName = profName
	}
	method1(lunch) {
		console.log(lunch)
	}
}

const morningProf = new Prof('Laily')
console.log(morningProf.profName)
morningProf.method1('burger')

// Optional Homework: Practive a callback
// function using an array and the .map()
// function
