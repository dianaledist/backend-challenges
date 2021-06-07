import express from 'express';
import {ItemRepository} from '../controllers/item.Repository.js';
const itemRepository = new ItemRepository(4);

/* console.log(itemRepository) */

export default function crearItemRouter (){

    const itemRouter = express.Router();
    itemRouter.use(express.json());

    itemRouter.post('/add', async(req,res)=>{
        try {
            const item=req.body
            const result=await itemRepository.apiCreateItem(item)
            res.json(result)

        } catch (error){
            console.log(error)
        }
    });

    itemRouter.get('/show', async(req,res)=>{
        try {
            const result=await itemRepository.apiGetAllItems()
            res.render('../views/items.ejs', {
                title: "Lista de items!",
                data: result
            });
        } catch (error){
            console.log(error)
        }
    });

    itemRouter.get('/:id/show', async(req,res)=>{
        try {
            const result=await itemRepository.apiGetItemsByID(req.params.id)
            res.json(result)

        } catch (error){
            console.log(error)
        }
    })

    itemRouter.put('/:id', async(req,res)=>{
        try {
            console.log("en put")
            console.log(req.params.id)
            const newItem=req.body
            
            const result=await itemRepository.apiUpdateItem(req.params.id, newItem)
            res.json(result)

        } catch (error){
            console.log(error)
        }
    })

    itemRouter.delete('/:id', async(req,res)=>{
        try {
            const result=await itemRepository.apiDeleteItem(req.params.id)
            console.log(result)
            res.json(result)

        } catch (error){
            console.log(error)
        }
    })

    return itemRouter;
}
