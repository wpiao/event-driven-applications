'use strict';

const events = require('./events.js');

events.on('pickup', payload => setTimeout(driverPickedUp, 1000, payload));
events.on('delivered', payload => setTimeout(driverDelivered, 3000, payload));

function driverPickedUp(payload) {
  console.log(`DRIVER: picked up ${payload.orderID}`);
}

function driverDelivered(payload) {
  console.log(`DRIVER: delivered up ${payload.orderID}`);
}