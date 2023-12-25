const express = require('express');
const app = express();
const { port, client } = require('./config');

app.get('/', (req, res) => {
  res.send(client);
})

app.get('/holdings', (req, res) => {
  client.getHoldings()
      .then(holdings => res.send(holdings))
      .catch(err => res.status(500).send(err));
});

app.listen(port, () => {
  console.log(`Algo Trading server is live at localhost:${port}`)
})
