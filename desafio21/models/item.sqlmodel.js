"use strict"
import knex from 'knex'

class ItemMysql {
    knex;

    constructor(config) {
        this.knex = new knex(config);
    }
}

export {ItemMysql}