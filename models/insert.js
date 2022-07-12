const db = require('../database')

class InsertBody {
    async insertData() {
        const Mysql = new db()
        const getConnection = await Mysql.connection()

        getConnection.connect()
        console.log('conectado')
        getConnection.end()
    }
}
let teste = new InsertBody()
teste.insertData()