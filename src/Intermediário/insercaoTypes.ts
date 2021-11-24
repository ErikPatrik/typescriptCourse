// Interseção de tipos (Type intersection)
// se for ver no exemplo abaixo, o x e o y estão em 2 tipos
// Usando herança, podemos reduzir o código

type Ponto2D = {
	x: number;
	y: number;
};

type Ponto3D = {
	x: number;
	y: number;
	z: number;
};

// Exemplo deixando melhor o código

type Ponto2D_2 = {
	x: number;
	y: number;
};

type Ponto3D_2 = Ponto2D_2 & {
	// o ponto 3D possui todos os parametros do 2D E também o Z
	z: number;
};

// Outro exemplo

type Pessoa = {
	nome: string;
};

type Email = {
	email: string;
};

type Telefone = {
	telefone: string;
};

type pessoaContato = Pessoa & Email & Telefone;
//function contact(detalhes:pessoaContato) {

// aqui na interseção espera uma combinação de parametros dos tipos
function contact(detalhes: Pessoa & Email & Telefone) {
	console.log(`Caro ${detalhes.nome}.
    Espero que tenha recebido nosso e-mail ${detalhe.email}.
    Nós te ligaremos no ${detalhe.telefone} em breve.`);
}

// eu tenho que passar todos os parâmetros, se eu passar da erro
contact({
	nome: 'Erik',
	email: 'erikpatrikpittaluga@gmail.com',
	telefone: '47xxxxxxxxxxx',
});
