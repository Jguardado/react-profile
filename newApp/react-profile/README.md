To start:

We have both a client and a server that connects to a mysql server.

To start I recommend starting you mysql server and initializing a database called `react_profile`

From there you'll want uncomment the code on lines 83 thru 85 in the `server/db.js` file. This will populate the db when started.

Since we have both a client and a server we will want to start them separately. I have incorporated the permission for cross-origin on the server so you should not experience any trouble with your browsers CORS protocol.

next run:

`npm run start` and `npm run server` is two separate terminals
