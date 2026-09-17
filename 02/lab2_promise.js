/*
    Promise: Act as an API developer and create a new Promise to either Resolve 
*/
async function fetchGames() {
	const promiseGames = new Promise((resolve, reject) => {
		const isRegistered = true
		setTimeout(() => {
			if (isRegistered) {
				const gamesJson = {
					monday: 'leafs',
					tuesday: 'raptors',
				}
				//  Static method that comes from theb JSON prototype/class
				const gamesJsonStr = JSON.stringify(gamesJson)
				resolve(gamesJsonStr)
			} else {
				reject('You must be a registered member first!')
			}
		}, 2000)
	})

	const resultFromPromise = await promiseGames
	console.log(resultFromPromise)
	const gamesJsonParsed = JSON.parse(resultFromPromise)
	console.log(gamesJsonParsed);
	console.log(gamesJsonParsed.monday);
}

fetchGames()
const someStrToPrint = 'bob'
console.log(someStrToPrint);

