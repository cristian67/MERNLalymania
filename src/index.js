const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');

const app = express();


require('./config');


//Setting
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api', require('./routes/usuario.route'));

//Static files
app.use(express.static(path.join(__dirname, 'public')))


//Conexion BDD
mongoose.connect(process.env.URLDB, (err, res) => {
    if (err) throw err;
    console.log("Conectado a BDD")
});

//Starting Server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})