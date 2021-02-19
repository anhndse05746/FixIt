
const fixit = require('../../config/config');
const mysql = require('mysql');
const pool = mysql.createPool(fixit)


module.exports = pool;