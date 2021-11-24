// O UnionType é utilizado para permitir diversos tipos nos parâmetros das funções
// Assim, nao é necessário passar any ou unknown

function formatarLinhaComando(input: string | string[]) {
	let linha = '';

	if (typeof input === 'string') {
		linha = input.trim();
	} else {
		linha = input.map((x: string) => x.trim()).join(' ');
	}
	return linha;
}

console.log(formatarLinhaComando('Olá ')); // olá
console.log(formatarLinhaComando(['Olá ', ' mundo '])); // Olá mundo

//Agora, se não passássemos 2 informações como parâmetro (string e um vetor de string)
// Não ocorreria erro no log abaixo

console.log(formatarLinhaComando(x));
