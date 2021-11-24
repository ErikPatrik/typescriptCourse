// Redução de types
// No exemplo abaixo, vemos a vantagem de usar o typeoff
// entretanto, o mesmo é utilizado apenas para tipos primitidos: number, boolean, string, etc

function padLeft(value: string, padding: number | string) {
	// se passar número
	if (typeof padding === 'number') {
		return Array(padding + 1).join(' ') + value;
	}
	// se passar string
	if (typeof padding === 'string') {
		return padding + value;
	}
	throw new Error('Permitido apenas número ou string');
}

padLeft('Olá mundo', 4); // '    Olá mundo'
padLeft('Olá mundo', '  '); // '  Olá mundo'
padLeft('Olá mundo', '---'); // '---Olá mundo'

// Entretanto, o typeoff se comparar com classe ou objeto, precisamos utilizar
// a abordagem abaixo PARA CLASSE

class Gato {
	miar() {
		console.log('miado');
	}
}

class Cachorro {
	latir() {
		console.log('latido');
	}
}

type Animal = Gato | Cachorro;

function comunicar(animal: Animal) { // recebe um parâmetro/objeto animal, que pode ser cachorro ou gato
	if (animal instanceof Gato) { // se a instancia recebendo for Gato, utiliza o método próprio da classe
		animal.miar();
	}

	if (animal instanceof Cachorro) {
		animal.latir();
	}
}

// Para objetos

type Quadrado = {
    tamanho: number
}

type Retangulo = {
    largura: number,
    altura: number
}

type Forma = Quadrado | Retangulo

function area(forma: Forma) { //objeto que recebe na função se possui determinada propriedade
    if ('tamanho' in forma) { // o in, verificamos se tem propriedade dentro do objeto
        return forma.tamanho * forma.tamanho
    }

    if ('largura' in forma) {
        return forma.largura * forma.altura
    }
}

area({tamanho: 2}) // 4
area({largura: 2, altura: 3 }) // 6

// O QUE APRENDEMOS???
/*
Aprendemos nesta seção 3 formas de comparação de tipos (redução de tipos)

1 - typeof -- tipos primitivos
2 - instanceof -- para classes
3 - in -- para objetos

/*








