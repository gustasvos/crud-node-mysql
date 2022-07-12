const mysql = require('mysql')
const CONFIG = require('./config.json')

class Database {
    async connection() {
        const con = mysql.createConnection({
          host     : CONFIG.config.host,
          user     : CONFIG.config.user,
          password : CONFIG.config.password,
          database : CONFIG.config.database
        })    
        return con
    }  
}

module.exports =  Database