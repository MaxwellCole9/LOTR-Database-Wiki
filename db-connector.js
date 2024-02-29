/*
    Code utilized from the CS340 course at Oregon State University
    - Utilized canvas suggestion to create a db-connector.js file to connect to the database
    https://canvas.oregonstate.edu/courses/1946034/pages/exploration-developing-in-node-dot-js?module_item_id=23809336
    2/22/2024
*/

var mysql = require('mysql')

// Create a 'connection pool' using the provided credentials
var pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'classmysql.engr.oregonstate.edu',
    user            : 'cs340_swaimn',
    password        : '8402',
    database        : 'cs340_swaimn'
})

// Export it for use in our application
module.exports.pool = pool;