const express = require('express');
const User = require('./models/User');
const bodyParser = require('body-parser');
const app = express();

const routes = express.Router();
module.exports = routes;