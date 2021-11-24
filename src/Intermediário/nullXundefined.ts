// Null x undefined - ausência de valores
// undefined: quando o valor não é definido
// null: quando o valor não está presente

// EXEMPLO DE RETORNAR UNDEFINED

let naoDefinido: undefined = undefined
let naoPresente: null = null

class Ponto {
    x: number,
    y: number
}

const centro = new ponto()
centro.x = 0

console.log(centro.x, centro.y) // 0, undefined

// OUTRO EXEMPLO QUE RETORNA NULL

function logVogais(value: string) {
    console.log(value.match(/[aeiou]/gi))
}


logVogais('mesa') // ['e', 'a']
logVogais('sky') // null


/////////// EXEMPLO ABAIXO PRA TRATAR AS SITUAÇÕES ACIMA ///////////////

console.log(null === null) //true
console.log(undefined === undefined) //true

console.log(undefined == true) // true
// validamos o undefined como o true

// exemplo 1
let valor = undefined
console.log(valor === null) // true

// exemplo 2
function decorate(value: string | null | undefined) { //valor que pode ser ter varios tipos
    if (value == null) {
        return value
    }

    // se não colocar a validação acima, pode dar erro, pois o value pode ser undefined
    return `-- ${value.trimEnd()} --` // remove os espaços e concatena com os traços
}

console.log(decorate('Olá')) // -- Olá --
console.log(decorate('Olá Mundo     ')) // -- Olá Mundo --
 
console.log(decorate(null)) //null
console.log(decorate(undefined)) //undefined