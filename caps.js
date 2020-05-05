const events = require('./events');

events.on('pickup', payload => caps('pickup', payload));
events.on('in-transit', payload => caps('in-transit', payload));
events.on('delivered', payload => caps('delivered', payload));

function caps(event, payload) {
  const timeStamp = new Date();
  console.log('EVENT', { event: event, time: timeStamp, payload: payload });
}