'use strict';

const events = require('./events.js');

// register driver's events
events.on('driver-pickup', payload => {
  setTimeout(driverPickup, 1000, payload);
});

events.on('driver-delivered', payload => {
  setTimeout(driverDelivered, 3000, payload);
});

function driverPickup(payload) {
  console.log(`DRIVER: picked up ${payload.orderID}`);
  events.emit('in-transit', payload);
}

function driverDelivered(payload) {
  console.log(`DRIVER: delivered up ${payload.orderID}`);
  events.emit('vendor-delivered', payload);
}