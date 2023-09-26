const bodyParser = require('body-parser');
const express = require('express'); 
const dbConnect = require('./config/dbConnect');
// importing the express.js package to our project

const app = express();
//creating an express application. which will be used to define routes, middleware, and handle HTTP requests.

const dotenv = require('dotenv').config();
//importing the dotenv package in our project. It benefits the organization and security of sensitive information

const PORT = process.env.PORT || 4000;
//this line sets the value of PORT to the PORT environment value, if it exists, if doesn't it will be set to the port 4000
//This allows you to configure the port where your server will listen via environment variables

const authRouter = require('./routes/authRoute');
dbConnect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/api/user', authRouter); 
//The first argument '/api/user' is a URL prefix. It means that any routes defined within authRouter will be relative to /api/user
//The second argument authRouter is the router instance that you imported earlier from ./routes/authRoute. This means that all the routes defined in authRouter will be available under the /api/user URL prefix.

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
});
//This code starts the Express server and makes it listen on the specified port (PORT). 
//When the server starts, the provided callback function is executed.
/*
Purpose:
The purpose of this code is to create a basic Express.js web server 
that listens for incoming HTTP requests on a specified port 
(or a default port if none is provided via environment variables). 
When a request is made to this server, it will respond according to the 
routes and middleware that you define later in your application.

In summary, this code sets up the foundational structure of an Express.js 
server, configures it to listen on a specified port, and provides a 
message indicating that the server is running. You can then expand this
code by defining routes, middleware, and other functionality to build 
a fully functional web application or API.
*/