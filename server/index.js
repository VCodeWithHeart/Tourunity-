const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const authRouter = require('./routes/authRouter')

require("dotenv").config();

const PORT = process.env.PORT || 8080;

require('./models/db')

app.get('/ping', (req, res) => {
    res.send("PONG")
})

app.use(bodyParser.json());
app.use(cors())
app.use('/', authRouter)

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})