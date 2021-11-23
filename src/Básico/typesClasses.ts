//classes embutidas
import { FileWatcherEventKind } from "typescript";

let regexp: RegExp = new RegExp("b+c")

//array de numeros
let array: Array<number> = [1,2,3]

//nao permite repetição de valores
let set: Set<number> = new Set([1,2,3])


//classes nossas
class Fila<T> {
    dado: T
    metodo(): T {
        return this.dado
    }
}

//variável com instancia da classe, e a classe é do tipo number
let fila: Fila<number> = new Fila()