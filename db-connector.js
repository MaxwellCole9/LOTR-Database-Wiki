var mysql = require('mysql')

// Create a 'connection pool' using the provided credentials
var pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'classmysql.engr.oregonstate.edu',
    user            : 'cs340_colemax',
    password        : 'FA5A1htpYb7z',
    database        : 'cs340_colemax'
})

// Export it for use in our application
module.exports.pool = pool;