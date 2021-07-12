const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();

app.use(express.json());

var position = { position_x: 0.0, position_y: 0.0 };

router.get('/', (req, res) => {
	res.status(200).send(position);
});

router.post('/', (req, res) => {
	position = req.body;
	res.status(200).end('yes');
});

app.use(router);
app.listen(3000);
