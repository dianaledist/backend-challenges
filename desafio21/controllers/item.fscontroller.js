import {FSModel} from '../models/item.fsmodel.js';
import fs from'fs';

class ItemFSController {
    constructor(){
        const connect = () => {
            console.log(`Conexión exitosa ${JSON.stringify("Conexión exitosa")}`);
        }
        console.log(`Conexión a FS exitosa! ✨ `)
    }

    async apiCreateItem({nombre,descripcion, timestamp, codigo, precio, foto, stock}){

        let arrayProductos=[]
        try {
            let _id=0;
            const info ={
                _id:_id+1,
                nombre ,
                descripcion ,
                timestamp ,
                codigo,
                precio ,
                foto ,
                stock ,
            }
            arrayProductos.push(info)

            await fs.promises.writeFile('./db/Productos.txt',JSON.stringify(arrayProductos,null, '\t'))
            console.log("Información almacenada en .txt de forma exitosa ✅\n")
            return arrayProductos
    }
    catch (error){
        console.log(error)
    }
}

    async apiGetAllItems(){
        try {
            return new Promise((resolve,reject) => {
            fs.readFile(`./db/Productos.txt`, "utf-8", (err,data) =>{
                const lectura=[];
                if (!data){
                    fs.writeFileSync(`./db/Productos.txt`, `${JSON.stringify(lectura)}`);
                    console.log("Como no existe el archivo🚫, se ha creado uno en el directorio elegido ")
                    console.log(lectura)
                } else {
                    console.log("DATOS TOMADOS DEL .TXT");
                    console.log(JSON.parse(data))
                    resolve(JSON.parse(data))
                }
            });
        })}
        catch {
            console.log(err)
        }
    }

}

export {ItemFSController}