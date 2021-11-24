// No exemplo abaixo, utilizamos o quadrado e o retangulo
// Entretanto, podem existir outras situações que usamos por exemplo
// a largura também é utilizada não só no retangulo, então não conseguimos
// então podemos criar uma nova propriedade literal para identificação

type Circulo = {
	tipo: 'circulo';
	tamanho: number;
};

type Quadrado = {
	tipo: 'quadrado';
	tamanho: number;
};

type Retangulo = {
	tipo: 'retangulo';
	largura: number;
	altura: number;
};

type Forma = Quadrado | Retangulo;

function area(forma: Forma) {
	//objeto que recebe na função se possui determinada propriedade
	if (forma.tipo === 'quadrado') {
		// o in, verificamos se tem propriedade dentro do objeto
		return forma.tamanho * forma.tamanho;
	}

	if (forma.tipo === 'retangulo') {
		return forma.largura * forma.altura;
	}
}
