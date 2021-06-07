import {ItemMongoDBController} from './item.mongodbcontroller.js';
import {ItemFSController} from './item.fscontroller.js'
import { ItemSqliteController } from './item.sqlitecontroller.js';
import { ItemMysqlController } from './item.mysqlcontroller.js';

export class ItemRepository {
    repository;
    constructor(option){
        console.log("Dentro de bifurcador de persistencias bbdd")
        switch (option){
            case 1:
                this.repository=new ItemMongoDBController();
                break;
            case 2:
                this.repository=new ItemFSController();
                break;
            case 3:
                this.repository=new ItemSqliteController();
                break;
            case 4:
                this.repository=new ItemMysqlController();
                break;
            default: 
                console.log("No existe una bbdd con esa numeración")
                break;
        }
       
    }

    async apiCreateItem({nombre,descripcion, timestamp, codigo, precio, foto, stock}){
        return this.repository.apiCreateItem({nombre,descripcion, timestamp, codigo, precio, foto, stock})
    }

    async apiGetAllItems(){
        return this.repository.apiGetAllItems()
    }

    async apiGetItemsByID(id){
        return this.repository.apiGetItemsByID(id)
    }

    async apiUpdateItem(id,newItem){
        return this.repository.apiUpdateItem(id,newItem)
    }
    
    async apiDeleteItem(id){
        return this.repository.apiDeleteItem(id)
    }


}

/* export {ItemRepository} */