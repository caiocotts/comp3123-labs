/*
Purpose:

Array methods:
    forEach((currentElement) => {})
    map((currentElement) => {})
    reduce((currentElement) => {})
    filter((currentElement) => {})
    search((currentElement) => {})
*/

const courseList = ['COMP3123', 'COMP3122', 'COMP1230', 'FASH1011']
courseList.forEach((course) => {
	console.log(course + '!')
}) 

console.log(courseList.filter((currentElement) => currentElement[0] === 'C'))
