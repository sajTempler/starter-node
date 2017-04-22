import express from 'express';
import path from 'path';
import open from 'open';

const port = 3100;
const app = express();

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (err) => {
	if (err) {
		console.log('error: ', err);
	} else {
		open('http://localhost:' + port);
	}
});
