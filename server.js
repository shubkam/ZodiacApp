// create const and assign the express module to it
const express = require('express');

const app = express();

// app means the express module. We use the app const to use methods from the express module.
// We create a folder called client in the ZodiacApp dir to store our front end files. Now our back-end is connected to our front-end.
app.use(express.static(__dirname + '/client'))

//app.use(requireHTTPS);

// set up an environment variable for the port for deployment and 3000 for running on localhost
const port = process.env.PORT || 3000;

// app listens to the server on this port. If it successfully running the callback function is fired.
app.listen(port,  () => {

	// code to tell us whether our server is running properly or not
	console.log("Server is running on port " + port);
});