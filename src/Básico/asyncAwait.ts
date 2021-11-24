// utilizado quando trabalhamos com processos
// executar alguma coisa somente quando outra terminar

//Exemplo abaixo

//método pra gerar as promessa
const delay = (ms: number) =>
	new Promise((res) =>
		//gera/retorna um promisse, baseado no tempo informado
		setTimeout(res, ms)
	); // cada promisse tem um resolve/retorno

// resultado que pode levar um tempo pra ser resolvido
// função/método que trabalha com resultado assíncrono,
// ou seja, informação que pode levar um tempo pra ser retornado
const mainAsync = async () => {
	await delay(1000); //aguardar o retorno da promessa, só avança quando finalizar após 1 segundo
	console.log('1s');
};

mainAsync();
