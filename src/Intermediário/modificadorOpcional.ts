// Caso não passar o telefone na instância erik por exemplo, dará erro
// Entretanto, podemos dizer que a propriedade é opcional, colocando um "?"

type Pessoa = {
	nome: string;
	email: string;
	telefone?: string;
};

const bruno: Pessoa = {
	nome: 'Bruno',
	email: 'bruno@exemplo.com',
	telefone: '47xxx',
};

const erik: Pessoa = {
	nome: 'Erik',
	email: 'erik@exemplo.com',
};


// EXEMPLO EM CLASSES

class Ponto {
    x?: number,
    y?: number

    // se eu não colocasse os "?" precisaria ter que inicializar eles, com construtores
    // ou definir em inline: x: number = 0
}

const ponto = new ponto()
// aqui precisaria setar os valores

console.log(ponto.x) // undefined

ponto.x = 0; // forma de declarar
ponto.x = undefined // forma de declarar
ponto.x = null // AQUI não da, ocorre erro