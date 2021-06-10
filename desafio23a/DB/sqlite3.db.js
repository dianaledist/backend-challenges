const sqlite3Connect = {
    client: 'sqlite3',
    connection: {
        filename: "./DB/chat.sqlite"
    },
    useNullAsDefault: true
};

module.exports = {
sqlite3Connect
}