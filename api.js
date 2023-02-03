const express = require('express');
const app = express();
const port = 3001;
const fs = require('fs');
const path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/pages/index.html'));
  });

app.get("/car_list", (req, res) => {
    fs.readFile(__dirname + '/' + 'car.json', (err, data) => {
        res.send(data);
    });
});

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });