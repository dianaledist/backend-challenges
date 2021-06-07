import {ItemModel} from '../models/item.mongodbmodel.js';
import {mongoLocalURI} from '../config/index.js';
import mongoose from 'mongoose';


class ItemMongoDBController {

    constructor(){
        mongoose.connect(mongoLocalURI, {
            useNewUrlParser: true,
            useCreateIndex: true, 
            useUnifiedTopology: true
        });
        console.log(`Conexión a mongoose exitosa! ✨ `)
    }
    
    async apiCreateItem({nombre,descripcion, timestamp, codigo, precio, foto, stock}) {
        const newItem=new ItemModel({
            nombre,descripcion, timestamp, codigo, precio, foto, stock
        })

        try {
            await newItem.save({
                nombre,descripcion, timestamp, codigo, precio, foto, stock
            });
            return newItem
        } catch (error) {
            console.log(error)
        }
    };
    
    async apiGetAllItems(req,res) {
        try {
            const itemList = await ItemModel.find();
            return itemList
        } catch (error) {
            console.log(error)
        }
    };

    async apiGetItemsByID(id){
        try {
            const itemList = await ItemModel.find({ _id: id });
            return itemList
        } catch (error) {
            console.log(error)
        }
    }

    async apiUpdateItem(id, newItem){
        try{ 
			const itemList = await ItemModel.updateOne({_id:id}, {$set:newItem});
            console.log(itemList)
            return itemList
		}
		catch(error){
			console.log(error)
		}
    }

    async apiDeleteItem(id){
        try {
            const itemList = await ItemModel.deleteOne({ _id: id});
            return itemList
        } catch (error) {
            console.log(error)
        }
    }


   /*  static async apiUpdateItem(req, res, next) {
        try {
            const itemList = await ItemModel.updateOne({ _id:req.params.id }, { $set: req.body});
            res.status(200).json(itemList);
        } catch (error) {
            console.error(error);
            res.status(404).json(error);
        }
    }; */

    /* static async apiDeleteItem(req, res, next) {
        try {
            const itemList =await ItemModel.deleteOne({ _id: req.params.id});
            res.status(200).json(itemList);
        } catch (error) {
            res.status(404).json(error);
        }
    }; */
}

export {ItemMongoDBController}

/* ItemController.connect() */