/* Purpose
We'll use Node to Create a Server and then listen on that server for
any incoming requests. Then return a response.
*/

var http = require('http')

http
	.createServer((req, res) => {
		res.writeHead(200, {
			'content-type': 'text/html',
		})
		res.end('The server is now running successfully and listening')
	})
	.listen(8088)

//  Optional Homework: try another port number
