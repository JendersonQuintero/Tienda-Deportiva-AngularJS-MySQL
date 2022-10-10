const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mysql = require('mysql');

const { obtenerProductos, insertarOrden } = require("./public/js/consultas");

const app = express();

// Configurar conexión a mysql
const conexionMysql = mysql.createConnection({
    host: 'localhost',
    database: 'tienda_deportiva',
    user: 'root',
    password: 'jj27571043'
});

// Conectando a mysql
conexionMysql.connect( function(error) {
    if (error) throw error;
    console.log('CONEXIÓN CON LA BASE DE DATOS ESTABLECIDA');
});

// Base de datos estatica
const productos = [
    {
        id: 1,
        nombre: 'Producto 1'
    },
    {
        id: 2,
        nombre: 'Producto 2'
    }
]

// Configuración del puerto
app.set('port', process.env.PORT || 3000);

// rutas
app.get('/get-productos', (req, res) => {
    obtenerProductos(conexionMysql, (result) => {
        res.json(result);
    });
});

let data = {
    nombre: "PRUEBA",
    calle: "PRUEBA",
    ciudad: "PRUEBA",
    estado: "PRUEBA",
    codigo_postal: 1010,
    pais: "PRUEBA",
    empaquetado: true,
    productos: "VARCHAR GRANDOTOTOTE"

}

app.get('/post-orden', (req, res) => {
    insertarOrden(conexionMysql, data, (result) => {
        res.json(result);
    });
});

// archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});




















// const mysql = require('mysql');

// const con = mysql.createConnection({
//     host: 'localhost',
//     database: 'tienda_deportiva',
//     user: 'root',
//     password: 'jj27571043'
// });

// con.connect( function(error) {
//     if (error) {
//         throw error;
//     }else {
//         console.log('CONEXIÓN ESTABLECIDA');
//     }
// });

// con.query("SELECT * FROM productos", function(error, res, fields) {
//     if (error) throw error;
//     console.log(res);
// });
