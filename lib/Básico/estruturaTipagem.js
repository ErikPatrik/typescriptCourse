"use strict";
let usuario = { id: "user1" };
let produto = { id: "produtct-23" };
let ponto2D = { x: 0, y: 10 };
let ponto3D = { x: 0, y: 10, z: 20 };
ponto2D = ponto3D; //valor aceito
ponto3D = ponto2D; //erro, pois o parametro2D nao tem todos os parametros do parametro3D
