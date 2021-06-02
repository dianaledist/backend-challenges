import dotenv from 'dotenv'
dotenv.config();

const PORT = process.env.PORT
const mongoURI=process.env.MONGO_URI
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

export {PORT, mongoURI, flagDB, sqlite3}