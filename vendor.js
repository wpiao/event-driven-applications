'use strict';

const events = require('./events.js');
const faker = require('faker');

require('./caps.js');
require('./driver.js');
events.on('delivered', payload => setTimeout(vendorMessage, 3005, payload));
events.on('delivered', () => setTimeout(endOfOrder, 3015));

function vendorMessage(payload) {
  console.log(`VENDOR: Thank you for delivering ${payload.orderID}`);
}

function endOfOrder() {
  console.log('-----------------------End Of Order-------------------\nPress control c to end this infinity order loop\n\n')
}

function tracker() {
  const payload = {
    store: 'code fellows'
  }
  payload.orderID = faker.random.uuid();
  payload.customer = faker.name.findName();
  payload.address = `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}, ${faker.address.zipCode()}`;
  
  
  events.emit('pickup', payload);
  events.emit('in-transit', payload);
  events.emit('delivered', payload);
}

tracker();
setInterval(tracker, 7000); // infinite orders every 7 seconds, enter control c to end it

