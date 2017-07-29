# MongoRedux

yep

## Prerequisites

[mongodb](https://www.mongodb.com/download-center?jmp=nav#community)  
[node](https://nodejs.org/en/)  
[mysql](https://www.mysql.com/)  
[yarn](https://yarnpkg.com)

### Getting Started DEVMODE

Starting db / Dumping data

`sudo mongod`  
`mysql -u test test -ptest < ./SERVER/customer.sql`  

Starting server

`cd SERVER && yarn && npm start`

Starting client

`cd CLIENT && yarn && npm start`

### Getting Started PROD

Starting db / Dumping data

`sudo mongod`  
`mysql -u test test -ptest < ./SERVER/customer.sql`  

Starting server

`cd SERVER && yarn && sh startServer.sh`

Starting client

`cd CLIENT && yarn && npm run prod`
