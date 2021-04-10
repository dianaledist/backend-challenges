console.log('>> INICIO --> Desafio 3');

async function mostrarPalabras(
    texto: string, 
    callback: (cantidadPalabras: number) => void
): Promise<any> {
    const textoParrafo=texto.split(" ");
    
    for (let palabra of textoParrafo) {

        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(console.log(palabra));
              }, 1000);
        })
    }
    callback(textoParrafo.length);
}

async function enviarParrafos(): Promise<any> {
    let totalPalabras = 0;
    const contarPalabras: (cantidadPalabras: number) => void = (cantidadPalabras:number) => {totalPalabras += cantidadPalabras};
    await mostrarPalabras("1. Hola persona humana!",contarPalabras);
    await mostrarPalabras("2. Estás ingresando a un océano de códigos y bits", contarPalabras);
    await mostrarPalabras("3. Que disfrutes mucho tu experiencia en formato 0 y 1", contarPalabras);
    console.log(`Cantidad de palabras: ${totalPalabras}`)
    console.log(">> PROCESO COMPLETO --> Desafio 3");
}

enviarParrafos();



