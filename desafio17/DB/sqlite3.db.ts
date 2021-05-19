export const sqlite3Connect = {
    client: 'sqlite3',
    connection: {
        filename: "./data/db.sqlite"
    },
    useNullAsDefault: true
};

module.exports = {
sqlite3Connect:sqlite3Connect
}
