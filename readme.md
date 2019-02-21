To start:

**TODO: Improve this set up**

We'll want to make sure we have a clean bundle so run:

`npn run clean`

The server and the webpack bundle are current handled in different processes so you need to start both

`npm run serve` and `npm run api`

The api requires connection to mysql, if that is not already started on you system you'll need to:

`brew services start mysql`

 else

 `mysql.server start`
