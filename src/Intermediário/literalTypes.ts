// Tipo literal, posso passar vários tipos em uma variável, exemplo abaixo:

let direcao: 'Norte';

direcao = 'Norte';
//assim ocorre erro abaixo
direcao = 'N0rt&';

// Mas, podemos fazer desta forma

let direcao_dois: 'Norte' | 'Sul' | 'Oeste' | 'Leste';

direcao_dois: 'Norte';

//
//
// Exemplo de função usando type Alias
type pontoCardeal = 'Norte' | 'Sul' | 'Oeste' | 'Leste';
let direcao3: pontoCardeal;

function mover(distanciaMetros: number, direcao: pontoCardeal) {
	console.log(`Movendo ${distanciaMetros} metros na direção ${direcao}`);
	// Só aceitaria Norte, Sul, Oeste e Leste
}

//
//
// Exemplo com number

type valorDado = 1 | 2 | 3 | 4 | 5 | 6;

function rolarDado() {
	return (Math.floor(Math.random() * 6) + 1) as valorDado; // assimila com o typeAlias e só pode usar tais valores
}

// Perceba que se for inserido um numero fora do valorDado, ocorrerá erro em tempo de execução
if (rolarDado() === 7) {
	throw new Error('Não é possível');
}
