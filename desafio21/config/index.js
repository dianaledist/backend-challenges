import dotenv from 'dotenv'
dotenv.config();

const PORT = process.env.PORT
const mongoLocalURI=process.env.MONGO_LOCAL_URI
const mongoDBaaSURI=process.env.MONGO_DBAAS_URI
const flagDB= process.env.FLAG_DB

const sqlite3 = {
    client: process.env.SQLITE_CLIENT,
        connection: { 
            filename: process.env.SQLITE_FILENAME 
        },
        useNullAsDefault: process.env.SQLITE_UNAD 
}

/* export default {

    sqlite: {
        client: process.env.SQLITE_CLIENT,
        connection: { 
            filename: process.env.SQLITE_FILENAME 
        },
        useNullAsDefault: process.env.SQLITE_UNAD 
    },
    mongoURI: process.env.MONGO_URI,
    flagDB: process.env.FLAG_DB
} */

export {PORT, mongoLocalURI, mongoDBaaSURI, flagDB, sqlite3}