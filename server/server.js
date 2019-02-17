const express = require('express');
const cors = require('cors')
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();

app.use(cors({ origin: process.env.CLIENT_ORIGIN }));

app.get('/', (req, res) => {
    res.send('app working');
})

app.get('/api/weather', (req, res) => {
    fetch(process.env.WEATHER_API_URL)
        .then(res => res.json())
        .then(data => {
            return res.send(data);
        })
        .catch(err => {
            console.log(err);
        });    
});

app.listen(4001, () => {
    console.log('app running on port 4001');
});