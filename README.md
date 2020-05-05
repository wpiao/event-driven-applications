# event-driven-applications
This app distributes the responsibility for logging to separate modules, using only events to trigger logging based on activity.

## How does this app work
This app simulates a delivery service and it will log each step information to console when it is excuted.
1. Customer order is ready, create 'pickup' event to notify driver.
2. Driver pick up order.
3. Create 'in-transit' event to update order status for tracking.
4. Driver complete delivery.
5. Vendor send 'Thank you' message to driver.
6. Create event 'delivered' event to stamp this order is fulfilled.

## How to start this app
1. Run command 'npm install' to install required dependencies.
2. Run command 'npm start' or 'npm run start' to run the app.
3. Enter Control C to stop this app.
