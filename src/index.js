const express = require('express');
const path = require('path');
const rutas = require('../routes/productos');
const app = express();
const port = 8081;


const server = app.listen(port, () =>{
    console.log('Server corriendo en puerto 8080', port);
});

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views engine', 'pug');
const viewsPath = path.resolve(__dirname, '../views');
app.set('views', viewsPath);
app.use('/', rutas);