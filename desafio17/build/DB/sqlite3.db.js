"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlite3Connect = void 0;
exports.sqlite3Connect = {
    client: 'sqlite3',
    connection: {
        filename: "./data/db.sqlite"
    },
    useNullAsDefault: true
};
module.exports = {
    sqlite3Connect: exports.sqlite3Connect
};
