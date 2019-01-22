const cors = require('cors');
const express = require('express');
const routesIndex = require('./routes/index');
const routesTasks = require('./routes/tasks');
const path = require('path');
const app = express();


//setings
app.set('views', path.join(__dirname, 'views'));
app.set ('port', process.env.PORT || 4200);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');


//midleware : son funciones que se ejecuta antes de recibir informacion que esta enviando el servidor/cliente
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extend: false}));

//route
app.use(routesIndex);
app.use('/api', routesTasks);


app.listen( 4200,() => {
    console.log('server on port 4200');
});