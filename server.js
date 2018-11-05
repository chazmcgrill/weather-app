const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('app working');
})

app.listen(4001, () => {
    console.log('app running on port 4001');
});