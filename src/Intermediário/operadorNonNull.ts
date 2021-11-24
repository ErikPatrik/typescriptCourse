// No exemplo abaixo, criamos uma função pra inicializar os valores
// Entretanto o typescript não consegue ser assertivo, profundo

type Ponto = {
	x: number;
	y: number;
};

let ponto: Ponto;

function inicializar() {
	ponto = {
		x: 0,
		y: 0,
	};
}

//aqui alimentamos os valores
inicializar();
// dará erro aqui
console.log('Após inicializado', ponto.x, ponto.y);

// pra dar garantia, usamos o Non-Null operator, ou operador não vazio
console.log('Após inicializado', ponto!.x, ponto!.y);
// ou seja, garantimos que os valores foram inicializados

/////////////////// OUTRO EXEMPLO ABAIXO //////////////////

type Pessoa = {
	nome: string;
	email?: string | null | undefined;
};

function enviarEmail(email: string) {
	console.log('Email enviado para: ', email);
}

function validarEmail(pessoa: Pessoa) {
	if (pessoa.email == null) {
		throw new Error('Pessoa ${pessoa.nome} não possui email');
		// se der erro, para tudo, se não continua
	}
}

function contato(pessoa: Pessoa) {
	validarEmail(pessoa);
	enviarEmail(pessoa.email!); // asseguramos que o valor não vai ser null
}
