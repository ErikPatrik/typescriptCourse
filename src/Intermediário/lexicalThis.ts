// Neste exemplo, criamos uma classe que possui 2 métodos, envelhecer e idade
// Nesta aula, vamos ver que se colocarmos uma constante/variável no método envelhecer, correrá erros
// Ocorre erros pois o this deixou de ser ser referente a classe, e acaba ficando referente a variável, constante

class Pessoa {
    private _idade: number

    constructor(_idade: number) {
        this._idade = _idade
    }

    // exemplo 1
    envelhecer1() {
        return this._idade++
    }

    // exemplo 2 que funciona quando queremos colocar um método numa variável
    envelhecer2= () => {
        return this._idade++
    }

    idade() {
        return this._idade
    }
}

const person = new Pessoa(10)

// assim funciona conforme exemplo 1 acima
person.envelhecer1()

// assim funciona conforme exemplo 2 acima
const envelhecer = person.envelhecer2()

console.log('Idade', person.idade())
