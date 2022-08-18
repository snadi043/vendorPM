// All the functionalities earlier in the server.js file are split into individual files to obey the Single-responsibility & Open/Closed principles of SOLID design.

const express = require('express');
const app = express();

app.use(express.json());
const libs = require('./libs')
libs.forEach(lib => require(`./libs/${lib}`)(app))


