const db = require('../database')

class InsertBody {
    async insertData(body) {
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
