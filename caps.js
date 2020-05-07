// const events = require('./events');

// events.on('pickup', payload => log('pickup', payload));
// events.on('in-transit', payload => setTimeout(log, 1000, 'in-transit', payload));
// events.on('delivered', payload => setTimeout(log, 3010, 'delivered', payload));

// function log(event, payload) {
//   const timeStamp = new Date();
//   console.log('EVENT', { event: event, time: timeStamp, payload: payload });
// }

'use strict';

const events = require('./events.js');
const faker = require('faker');

require('./driver.js');
require('./vendor.js');

// register 3 events
events.on('pickup', pickupEvent);
events.on('in-transit', (payload) => {
  eventsLog('in-transit', payload);
  events.emit('driver-delivered', payload);
});
events.on('delivered', (payload) => {
  eventsLog('delivered', payload);
  console.log('-------------------------End of Order-------------------------\nPress control c to stop the order\n\n\n');
  setTimeout(pickupEvent, 3000);
});

events.emit('pickup');

function pickupEvent() {
  // create an event
  const payload = {
    store: 'code fellows',
    orderID: faker.random.uuid(),
    customer: faker.name.findName(),
    address: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}, ${faker.address.zipCode()}`
  };

  console.log('-----------------------Start of Order---------------------------');
  eventsLog('pickup', payload);
  events.emit('driver-pickup', payload);
}

function eventsLog(event, payload) {
  const timeStamp = new Date();
  console.log('EVENT', {event: event, time: timeStamp, payload: payload});
}