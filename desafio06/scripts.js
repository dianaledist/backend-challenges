import fs from 'fs';

const lote = [                                                                                                                                                     
    {                                                                                                                                                    
      title: 'Escuadra',                                                                                                                                 
      price: 123.45,                                                                                                                                     
      thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',                                                                                                                                           
    },                                                                                                                                                   
    {                                                                                                                                                    
      title: 'Calculadora',                                                                                                                              
      price: 234.56,                                                                                                                                     
      thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',                                                                                                                                       
    },                                                                                                                                                   
    {                                                                                                                                                    
      title: 'Globo Terráqueo',                                                                                                                          
      price: 345.67,                                                                                                                                     
      thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png',                                  
    },                                                                                                                                                    
    {                                                                                                                                                    
      title: 'Mapamundi',                                                                                                                          
      price: 111.90,                                                                                                                                     
      thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png',                                  
    }                                                                                                                                                    
  ]  

class Archivo {
    constructor(nombreArchivo){
      this.nombreArchivo=`${nombreArchivo}.txt`
    }

    leer(){
        try {
            return new Promise((resolve,reject) => {
            fs.readFile(`./archivos/${this.nombreArchivo}`, "utf-8", (err,data) =>{
                const lectura=[];
                if (!data){
                    fs.writeFileSync(`./archivos/${this.nombreArchivo}`, `${JSON.stringify(lectura)}`);
                    console.log("Como no existe el archivo🚫, se ha creado uno en el directorio elegido ")
                    console.log(lectura)
                } else {
                    console.log("DATOS TOMADOS DEL .TXT");
                    console.log(JSON.parse(data))
                }
            });
        })}
        catch {
            console.log(err)
        }
    }
    
   async guardar(){
        let arrayProductos=[]
        try {
            let id=0;
            for(let producto of lote){
                let newID;

                if(!producto) newID=1;
                else newID=id+=1;

                const info ={
                    title: producto.title, 
                    price: producto.price, 
                    thumbnail: producto.thumbnail,
                    id: newID
                }

                arrayProductos=[...arrayProductos,info]

                await fs.promises.writeFile(
                    `./archivos/${this.nombreArchivo}`,
                    `${JSON.stringify(arrayProductos)}\n`, (err) => {
                        if (err) return console.log(err)
                        console.log("error")
                    }
                )
            }
            console.log("Información almacenada en .txt de forma exitosa ✅\n")

            fs.readFile(`./archivos/${this.nombreArchivo}`, "utf-8", (err,data) =>{
                console.log("DATOS TOMADOS DEL .TXT");
                console.log(JSON.parse(data))
            });

        } 
        catch(error) {
            console.log(error)
        }
    }

    borrar(){
        fs.unlink(`./archivos/${this.nombreArchivo}`, (err) => {
            if (err) return console.log(err);
        
            console.log("Archivo .txt borrado de forma completa🧤");
          });
    }
}

const file= new Archivo("productos")


/* file.leer(); */
file.guardar();
/* file.leer(); */
/* file.borrar(); */

