// No exemplo abaixo, declamos uma classe simples com seus construtores
// Deixamos criamos uma instância dela e buscamos as propriedades
class Pessoa {
	public nome: string;
	public idade: number;

	constructor(nome: string, idade: number) {
		this.nome = nome;
		this.idade = idade;
	}
}

const erik = new Pessoa('Erik', 27);
console.log(erik.nome, erik.idade);

// No exemplo abaixo, podemos reduzir tal código
// passando diretamente no construtor o controle de acesso

class Pessoa {
	constructor(public nome: string, public idade: number) {}
}

const erik = new Pessoa('Erik', 27);
console.log(erik.nome, erik.idade);
