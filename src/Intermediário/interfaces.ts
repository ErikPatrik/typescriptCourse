// As interfaces vieram mais da POO
// Abaixo exemplo com Type e depois com interface

// TYPE
type Ponto2D = {
    x: number,
    y: number
}

type Ponto3D = Ponto2D & {
    z: number
}

export const ponto: Ponto3D = {
    x: 0,
    y: 0,
    z: 0
}

// EXEMPLO COM INTERFACE

interface Ponto2D {
    x: number,
    y: number
}

interface Ponto3D extends Ponto2D & {
    z: number
}

export const ponto: Ponto3D = {
    x: 0,
    y: 0,
    z: 0
}