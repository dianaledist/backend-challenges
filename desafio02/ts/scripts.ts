import { resolve } from "node:path";


console.log(">> INICIO --> Desafio 2");

interface Lote {
  num1: number;
  num2: number;
  eleccion: string;
};

const operacion = (num1: number, num2: number, eleccion: string) => {
  return new Promise((resolve, reject) => {
    import("./calculos")
    .then(Calculo => {
        let operacionCalculo = new Calculo.default(num1,num2,eleccion);
        resolve( 
          operacionCalculo.resultado(
          num1,
          num2,
          eleccion,
        ));
      })
    .catch(console.error)
  })
};

async function operaciones(opers: Array<Lote> ): Promise<any>{
  for (let datos of opers){
    await (
    setTimeout(() => {
      operacion(datos.num1, datos.num2, datos.eleccion)
    }, 1000)
    )
  }
  
}

async function ingresoDatos(): Promise<any> {

  const lote1 : Lote = {
    num1 : 10,
    num2 : 20,
    eleccion : "sumar"
  }
  const lote2: Lote = {
    num1 : 30,
    num2 : 20,
    eleccion : "restar"
  }
  const lote3: Lote = {
    num1 : 50,
    num2 : 10,
    eleccion : "multiplicar"
  }
  const lote4: Lote = {
    num1 : 50,
    num2 : 10,
    eleccion : "alguna"
  }


  const lotesDePrueba: Array<Lote> = [lote1, lote2, lote3, lote4];
  await operaciones(lotesDePrueba);
}

ingresoDatos();
