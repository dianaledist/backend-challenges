import {ItemMysql} from '../models/item.sqlmodel.js'
import {mysql as config} from '../config/index.js'
import knex from 'knex';

const itemMysql = new ItemMysql(config)
const result = {};

class ItemMysqlController{

    constructor(){
        
        console.log(`Conexión a Mysql exitosa! ✨ `)
    }

    async apiCreateItem({nombre,descripcion, timestamp, codigo, precio, foto, stock}) {
        await knex("productos")
        .insert({
            nombre:nombre,
            descripcion:descripcion, 
            timestamp: timestamp, 
            codigo:codigo, 
            precio:precio, 
            foto:foto, 
            stock:stock,
        })


    }

    async apiGetAllItems(){
        const prod = await knex.from("productos").select()
        console.log(prod)
    }
}

export {ItemMysqlController}