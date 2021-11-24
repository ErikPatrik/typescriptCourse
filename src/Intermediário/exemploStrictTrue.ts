type Usuario = {
	nome: string;
	idade: number;
};

const usuarios: Usuario[] = [
	{nome: 'Erik', idade: 23},
	{nome: 'Bruno', idade: 24},
];

function buscarIdadeUsuario(nome: string): number {
	const usuario = usuarios.find((usuario) => usuario.nome === nome);

	//Se não existir o nome informado, da erro, entretanto podemos fazer uma validação abaixo
	if (usuario === null) {
		throw new Error(`Usuário não encontrado: ${nome}`);
	}

	return usuario.idade;
}
