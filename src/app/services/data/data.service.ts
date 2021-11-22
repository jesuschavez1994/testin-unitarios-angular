import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  generateNumbers(): Array<string> { //TODO: Genera 2 numberos random
    const numberA = (Math.random() * 10).toFixed(0)
    const numberB = (Math.random() * 5).toFixed(0)
    return [numberA, numberB]
  }

  //TODO: Recibe 3 parametros 2 numeros y una respuesta
  checkOperation(numberA: number, numberB: number, result: number): boolean {
    const check = (Number(numberA) + Number(numberB)) === Number(result)
    return check
  }

}
