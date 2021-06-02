import {ItemModel} from '../models/item.models.js'

export default class ItemController {
    static async apiCreateItem(req, res, next) {
        try {
            const itemList = await ItemModel.create(req.body);
            res.status(200).json(itemList);
        } catch (error) {
            res.status(404).json(error);
        }
    };
    
    static async apiGetAllItems(req, res, next) {
        try {
            const itemList = await ItemModel.find();
            res.render('../views/items.ejs', {
                title: "Lista de items!",
                data: itemList
            });
            /* res.status(200).json(itemList); */
            
        } catch (error) {
            res.status(404).json(error);
        }
    };

    static async apiGetItemsByID(req, res, next) {
        try {
            const itemList= await ItemModel.find({ _id: req.params.id })
            res.status(200).json(itemList);
        } catch (error) {
            res.status(404).json(error);
        }
    };

    static async apiUpdateItem(req, res, next) {
        try {
            const itemList = await ItemModel.updateOne({ _id:req.params.id }, { $set: req.body});
            res.status(200).json(itemList);
        } catch (error) {
            console.error(error);
            res.status(404).json(error);
        }
    };

    static async apiDeleteItem(req, res, next) {
        try {
            const itemList =await ItemModel.deleteOne({ _id: req.params.id});
            res.status(200).json(itemList);
        } catch (error) {
            res.status(404).json(error);
        }
    };
}
