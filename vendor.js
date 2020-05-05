'use strict';

const events = require('./events.js');
const faker = require('faker');

require('./caps.js');
require('./driver.js');

function event() {
  const payload = {
    store: 'code fellows'
  }
  payload.orderID = faker.random.uuid();
  payload.customer = faker.name.findName();
  payload.address = `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}, ${faker.address.zipCode()}`;
}

const createEvent = setInterval(event, 5000);
events.emit('pickup', createEvent);


