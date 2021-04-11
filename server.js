require('./redis')
require('dotenv').config();
const express = require('express')
const cors = require('cors')
const logger = require('winston');
const app = express()
const {PORT} = process.env
const server = app.listen(PORT)
const routes = require('./routes/routes');

app.use(cors())
app.use(express.urlencoded({extended:false}));
app.use(express.json({extended:false}));
app.use('/', routes);

app.set(server);

server.on('listening', () =>
  logger.info(`Application started on http://localhost:${PORT}`)
);
