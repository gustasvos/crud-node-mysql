const db = require('../database')

class CreateBody {
    async createData() {
        const Mysql = new db()
        const getConnection = await Mysql.connection()

        getConnection.connect()
        // QUERYS

        await getConnection.query('CREATE TABLE IF NOT EXISTS persons (PersonID int NOT NULL AUTO_INCREMENT, LastName varchar(255), FirstName varchar(255),Address varchar(255),City varchar(255), UNIQUE KEY (PersonID));')
        console.log('conectado')
        getConnection.end()
        return 
    }
}

module.exports = CreateBody

// let teste = new InsertBody()
// teste.insertData()


// CREATE TABLE general_seats_update (
//     numero_cadeira varchar(255),
//     semana varchar(255),
//     status_cadeira varchar(255),
//     ultima_atualizacao varchar(255),
//     dias_vacancia int
// );


// CREATE TABLE Persons (PersonID int, LastName varchar(255),FirstName varchar(255),Address varchar(255),City varchar(255));