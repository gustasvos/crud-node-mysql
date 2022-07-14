const db = require('../database')

class InsertBody {
    async InsertData(body) {
        const Mysql = new db()
        const getConnection = await Mysql.connection()

        getConnection.connect()
        
        body.persons.forEach(e => {
            getConnection.query(`INSERT INTO persons (LastName, FirstName, Address, City) VALUES ("${e.LastName}", "${e.FirstName}", "${e.Address}", "${e.City}")`)
        });

        // QUERYS
        // await getConnection.query(`INSERT INTO persons (PersonID, LastName, FirstName, Address, City) VALUES (1, "AAA", "sdsad", "sdsadsf22", "cidade")`)
        console.log('conectado')
        getConnection.end()
        return 
    }
}

module.exports = InsertBody


// INSERT INTO general_seats_update (numero_cadeira, semana, status_cadeira, ultima_atualizacao, dias_vacancia) 
//           VALUES ('${body.numero}', '${body.semana}', '${body.status}', '${body.ultima_atualizacao}', ${body.vacancia});

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