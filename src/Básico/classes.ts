class Animal {
    protected nome: string //aceita tipagem

    //instancia a propriedade
    constructor(nome: string) { //aceita tipagem
        this.nome = nome
    }

    move(distanciaEmMetros: number): void { //aceitatipagem
        console.log(`${this.nome} se moveu ${distanciaEmMetros} metros`)
    }
}

let gato = new Animal("Gato")
gato.move(10)

//extendo classe (HERANÇA)
class Passaro extends Animal {
    vooa(distanciaEmMetros: number) {
        console.log(`${this.nome} voou ${distanciaEmMetros} metros`)
    }
}

//private: propriedade só pode ser acessada dentro da classe
//protected: pode ser acessada também fora