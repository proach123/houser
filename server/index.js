require('dotenv').config();
const express = require('express');
const massive = require('massive');
const { SERVER_PORT, CONNECTION } = process.env;
const ctrl = require('./controller')

const app = express();
app.use(express.json());


app.get('/api/houser',ctrl.getHouse)

app.post('/api/houser',ctrl.createHouse)

app.delete('/api/houser:id')



massive(CONNECTION).then(db => {
  app.set('db', db);

  console.log('Massive is up and running');
  app.listen(SERVER_PORT, () =>
    console.log('Sim 2 I feel like Im in the sims on port 4000')
  );
});
