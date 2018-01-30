const express = require('express');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json())

app.use(express.static('../public/build'))

require('./routes')(app);

const PORT = 3000;

app.listen(PORT, ()=> {console.log(`Express is listening on port ${PORT}`)})