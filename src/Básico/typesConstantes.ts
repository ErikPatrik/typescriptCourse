//Constante nao consegue ser alterada

type Ponto = {
    x: number,
    y: number
}

const ponto: Ponto = {
    x: 0,
    y: 0
}

//Ocorre erro abaixo
ponto = {
    x:1,
    y: 2
}