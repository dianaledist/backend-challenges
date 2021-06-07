import {ItemSqlite} from '../models/item.sqlitemodel.js'
import {sqlite3 as config} from '../config/index.js';
import knex from 'knex';

const itemSqlite = new ItemSqlite(config)
const result = {};

class ItemSqliteController{
        
    constructor(){
        try {
            itemSqlite.createTable();
            result.status = 1;
        } catch (e) {
            console.log(e.message);
            result.status = 0;
        }
        console.log(`Conexión a sqlite exitosa! ✨ `)
    }

    

    async apiCreateItem(req,res){
        /* const items = new ItemSqlite({nombre,descripcion, timestamp, codigo, precio, foto, stock})
        console.log(items) */

        try {
            const resultado= await itemSqlite.insertTable(req.body) 
            console.log(resultado)
            return resultado
        } catch (error) {
            console.log(error)
        }
    }

}

export {ItemSqliteController}