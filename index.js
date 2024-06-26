const express = require('express');
const cron = require('node-cron');
const app = express();
const port = 5500;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

cron.schedule('*/10 * * * * *', () => {
    console.log('Hello World!');
  });
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
