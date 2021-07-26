const express = require('express');
const path = require('path');
const app = express();
var cors = require('cors');
const router = express.Router();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '/dist')));

let position = { position_x: 0.0, position_y: 0.0 };
let state = { state: 0 };

router.get('/', (_, res) => {
	res.sendFile('index.html', { root: path.join(__dirname, '/dist') });
});

router.get('/position', (_, res) => {
	res.status(200).send(position);
});

router.post('/position', (req, res) => {
	position = req.body;
	res.status(200).end('Success');
});

app.use(router);
app.listen(3000);
