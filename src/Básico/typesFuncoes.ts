//função que recebe 2 valors do tipo number e tem que retornar algo do tipo number
function soma(a: number, b:number): number {
    return a + b
}

//função que não retorna nada, ai colocamos void
function Log(mensage: string): void {
    console.log('Log', mensagem)
}

//spread operator
//função recebe inumeros valores

function somaValores(...values: number[]): number {
    return values.reduce((prev, curr) => {
        return prev + curr
    })
}

somaValores(1, 2) //3
somaValores(1,2,3) //6

//variável tipada que vira uma função e com a arraowfunction informa qual o tipo de valor esperado
let add: (a: number, b: number) => number

add = function(a: number, b: number): number {
    return a + b
}

//usar type pra tudo, pois garante realmente o que vai ser retornado
type Add2 = (a: number, b: number) => number
let add2: Add2

add2 = function(a: number, b: number, c: number): number {
    return a + b
}


