const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const Themeparks = require('themeparks')

const app = express();
const DisneyWorldMagicKingdom = new Themeparks.Parks.WaltDisneyWorldMagicKingdom();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.get('/rides', (req, res) => {

  let rideInfo = []
  DisneyWorldMagicKingdom.GetWaitTimes().then((rideTimes) => {
    rideTimes.forEach((ride) => {
      let rideData = {
        id: ride.id,
        name: ride.name,
        time: ride.waitTime
      }
      rideInfo.push(rideData)
    });
  }).catch((error) => {
    console.error(error);
  }).then(() => {
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify(rideInfo))
  }
  )
})
app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);