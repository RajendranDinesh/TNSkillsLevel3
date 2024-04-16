const express = require('express');
const cors = require('cors');

const app = express();

const corsOptions = {
    credentials: true,
    origin: ['http://127.0.0.1:3000', 'http://localhost:3000', process.env.FRONTEND_URL],
};

const userRoutes = require('./User');
const surveyRoutes = require('./Survey');
const resultsRoutes = require('./Results');
const blogRoutes = require('./Blog');
// Add new routes here

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/user', userRoutes);
app.use('/survey', surveyRoutes);
app.use('/blog', blogRoutes);
// Add app.use statements here

module.exports = app;