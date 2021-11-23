"use strict";
class Animal {
    //instancia a propriedade
    constructor(nome) {
        this.nome = nome;
    }
    move(distanciaEmMetros) {
        console.log(`${this.nome} se moveu ${distanciaEmMetros} metros`);
    }
}
let gato = new Animal("Gato");
gato.move(10);
//extendo classe (HERANÇA)
class Passaro extends Animal {
    vooa(distanciaEmMetros) {
        console.log(`${this.nome} voou ${distanciaEmMetros} metros`);
    }
}
