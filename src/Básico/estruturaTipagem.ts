type Usuario = {id: string}
type Produto = {id: string}

let usuario: Usuario = {id: "user1"}
let produto: Produto = {id: "produtct-23"}

//posso atribuir uma variável a outra

// Mais um exemplo
type Ponto2D = {x: number, y: number}
type Ponto3D = {x: number, y: number, z: number}

let ponto2D: Ponto2D = {x: 0, y: 10 }
let ponto3D: Ponto3D = {x: 0, y: 10, z: 20 }

ponto2D = ponto3D //valor aceito

ponto3D = ponto2D //erro, pois o parametro2D nao tem todos os parametros do parametro3D