const express = require('express');
const cron = require('node-cron');
const app = express();
const port = 5500;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const apiFunc = async () => {
  const response = await fetch(
    'https://api.coindesk.com/v1/bpi/currentprice.json'
  );
  return await response.json();
};
cron.schedule('0 */1 * * * *', async () => {
  const result = await apiFunc();
  console.log(result);
});
app.listen(port, () => {
  console.log(`Cron job started`);
});
