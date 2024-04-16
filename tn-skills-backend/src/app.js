const express = require('express');
const app = express();

const userRoutes = require('./User');
const surveyRoutes = require('./Survey');
const resultsRoutes = require('./Results');
const blogRoutes = require('./Blog');
// Add new routes here

app.use(express.json());
app.use('/user', userRoutes);
app.use('/survey', surveyRoutes);
app.use('/blog', blogRoutes);
// Add app.use statements here

module.exports = app;