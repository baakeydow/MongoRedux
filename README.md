# MongoRedux

yep

## Prerequisites

[mongodb](https://www.mongodb.com/download-center?jmp=nav#community)  
[node](https://nodejs.org/en/)  
[mysql](https://www.mysql.com/)  
[npm](https://www.npmjs.com/package/npm)

### Getting Started DEVMODE

Starting db

`sudo mongod`  
`mysql -u test test -ptest < ./SERVER/customer.sql`  

Starting server

`cd SERVER && yarn && npm start`

Starting client

`cd CLIENT && yarn && npm start`

### Getting Started PROD

Starting db

`sudo mongod`  

Starting server

`cd SERVER && yarn && sh startServer.sh`

Starting client

`cd CLIENT && yarn && npm run prod`
