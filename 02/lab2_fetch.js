/*
Purpose
Fetch data from a 3rd party
*/

const url = 'https://isitdownstatus.com/api/v1/status/netflix'
fetch(url)
	.then((response) => {
		return response.json()
	})
	.then((dataJSON) => {
		console.log(dataJSON)
		console.log(dataJSON.data.status)
	})
	.catch((error) => {
		console.log(error)
	})
