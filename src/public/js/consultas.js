const { ifError } = require('assert');
const mysql = require('mysql');

function obtenerProductos(connection, callback) {
    let consulta = "SELECT * FROM productos";
    connection.query(consulta, function(err, res) {
        if(err) throw err;
        callback(res);
    });
}

function insertarProducto(connection, data, callback) {
    let model = "INSERT INTO productos (nombre, descripcion, categoria, precio) VALUES (?, ?, ?, ?)";
    let consulta = mysql.format(model, [data.nombre, data.descripcion, data.categoria, data.precio]);
    connection.query(consulta, function (err, res) {
        if (err) throw err;
        callback(res);
    });
}

function insertarOrden(connection, data, callback) {
    let model = "INSERT INTO ordenes (nombre, calle, ciudad, estado, codigo_postal, pais, empaquetado, productos) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    let consulta = mysql.format(model, [data.nombre, data.calle, data.ciudad, data.estado, data.codigo_postal, data.pais, data.empaquetado, data.productos]);
    connection.query(consulta, function (err, res) {
        if (err) throw err;
        callback(res);
    });
}

module.exports = { obtenerProductos, insertarProducto, insertarOrden };