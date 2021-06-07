import mongoose from 'mongoose';

const Schema=mongoose.Schema;

const itemSchema = new Schema({
    nombre : {type:String, require:true},
    descripcion: {type:String, require:true},
    timestamp: {type:Date, require:true},
    codigo: {type:String, require:true},
    precio: {type:Number, require:true},
    foto: {type:String,require:true},
    stock: {type:Number, require:true }
})

export const ItemModel = mongoose.model("ItemModel",itemSchema);
