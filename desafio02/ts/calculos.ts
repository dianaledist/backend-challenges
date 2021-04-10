export default class Calculo {
    private num1: number;
    private num2: number;
    private eleccion: string;
  
    public constructor(num1: number, num2: number, eleccion: string) {
      this.num1 = num1;
      this.num2 = num2;
      this.eleccion = eleccion;
    }

    public resultado(num1: number, num2: number, eleccion: string):any {
      switch (eleccion) {
        case 'sumar':
          const sumar= (num1:number,num2:number)=> num1+num2
          console.log(`La suma de los valores ${num1} y ${num2} es ${sumar(num1,num2)}`)
          break
        case 'restar': 
        const restar= (num1:number,num2:number)=> num1-num2
          console.log(`La resta de los valores ${num1} y ${num2} es ${restar(num1,num2)}`)
          break
        case 'multiplicar': 
        const multiplicar= (num1:number,num2:number)=> num1*num2
          console.log(`La multiplicación de los valores ${num1} y ${num2} es ${multiplicar(num1,num2)}`)
          break
        default:
          console.log(`Invalid operation: ${eleccion}`)
          break
      }
    }
}
  