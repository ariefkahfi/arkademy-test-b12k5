const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'arief',
    database: 'arkademy'
})



module.exports = {
    connection
}