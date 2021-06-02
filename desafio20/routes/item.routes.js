import express from 'express';
import ItemController from '../controllers/item.controller.js';

export default function crearItemRouter (){

    const itemRouter = express.Router();
    itemRouter.use(express.json());

    itemRouter.post('/add', ItemController.apiCreateItem);
    itemRouter.get('/show', ItemController.apiGetAllItems);
    itemRouter.get('/:id/show', ItemController.apiGetItemsByID);
    itemRouter.put('/:id', ItemController.apiUpdateItem);
    itemRouter.delete('/:id', ItemController.apiDeleteItem);

    return itemRouter;
}
