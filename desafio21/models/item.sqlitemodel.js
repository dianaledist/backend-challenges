"use strict"
import knex from 'knex'
/* import {sqlite3 as config} from '../config/index.js'; */

class ItemSqlite {
    knex;

    constructor(config) {
        this.knex = new knex(config);
    }

    createTable() {

        try {
            return this.knex.schema.dropTableIfExists('productos')
            .then (() =>{
                return this.knex.schema.createTable('productos', table => {
                    table.increments('id').primary();
                    table.string('nombre', 30).notNullable();
                    table.string('descripcion', 300).notNullable();
                    table.date('timestamp', 100).notNullable();
                    table.string('codigo', 20).notNullable();
                    table.integer('precio', 50).notNullable();
                    table.string('foto', 300).notNullable();
                    table.integer('stock', 30).notNullable();
                })
            })        
            .then(() => console.log("Se creó la tabla productos"))
        } catch (error) {
            console.log("Error: ", error);
        }
    }

    insertTable(productos){
        return this.knex('productos').insert(
            productos);
    } 


}

export {ItemSqlite}