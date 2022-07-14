const db = require('../database')

class DeleteBody {
    async deleteOne(body) {
        const Mysql = new db()
        const getConnection = await Mysql.connection()

        getConnection.connect()
        
        body.persons.forEach(e => {
            getConnection.query(`INSERT INTO persons (PersonID, LastName, FirstName, Address, City) VALUES (${e.PersonID}, "${e.LastName}", "${e.FirstName}", "${e.Address}", "${e.City}")`)
        });

        console.log('conectado')
        getConnection.end()
        return 
    }

    async deleteAll() {
        const Mysql = new db()
        const getConnection = await Mysql.connection()

        getConnection.connect()

        getConnection.query(`DELETE FROM persons`)
        getConnection.end()
        return
    }
}

module.exports = DeleteBody
