import dotenv from 'dotenv'
dotenv.config();

const PORT = process.env.PORT
const mongoLocalURI=process.env.MONGO_LOCAL_URI
const mongoDBaaSURI=process.env.MONGO_DBAAS_URI

const sqlite3 = {
    client: process.env.SQLITE_CLIENT,
        connection: { 
            filename: process.env.SQLITE_FILENAME 
        },
        useNullAsDefault: process.env.SQLITE_UNAD 
}

const mysql= {
    client: process.env.MYSQL_CLIENT,
    connection: {
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
/*         port: process.env.MYSQL_PORT */
    }
}

export {PORT, mongoLocalURI, mongoDBaaSURI, sqlite3, mysql}