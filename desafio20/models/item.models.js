import mongoose from 'mongoose';

const Schema=mongoose.Schema;

const itemSchema = new Schema({
    nombre : {type:String, require:true},
    categoria: {type:String, require:true},
    stock: {type:Number, require:true }
})

export const ItemModel = mongoose.model("ItemModel",itemSchema);
