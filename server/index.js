const express = require('express');
const bodyParser = require('body-parser');

const port = 4000;

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public'));


app.listen(port, () => {
	console.log("Now listening on port " + port + "...")
})

