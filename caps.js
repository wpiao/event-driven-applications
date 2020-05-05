const events = require('./events');

events.on('pickup', payload => log('pickup', payload));
events.on('in-transit', payload => setTimeout(log, 1000, 'in-transit', payload));
events.on('delivered', payload => setTimeout(log, 3010, 'delivered', payload));

function log(event, payload) {
  const timeStamp = new Date();
  console.log('EVENT', { event: event, time: timeStamp, payload: payload });
}