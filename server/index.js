const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const Themeparks = require('themeparks')

const app = express();
const DisneyWorldMagicKingdom = new Themeparks.Parks.WaltDisneyWorldMagicKingdom();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get('/rides', (req, res) => {

  let rideInfo = []
 DisneyWorldMagicKingdom.GetWaitTimes().then((rideTimes) => {
    rideTimes.forEach((ride) => {
      let rideData = {
        id: ride.id,
        name: ride.name,
        waitTime: ride.waitTime,
        active: ride.active,
        area: ride.meta.area,
        status: ride.status,
        longitude: ride.meta.longitude,
        latitude: ride.meta.latitude
      }
      rideInfo.push(rideData)
    });
  }).catch((error) => {
    console.error(error);
  }).then(() => {
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify(rideInfo))
  })
})

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);