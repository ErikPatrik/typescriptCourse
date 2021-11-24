// se instaciarmos a interface em diversos lugares
// as propriedades são mergadas, ou seja, são adicionadas
// em types esta opção está disponível

interface Pessoa {
	email: string;
}

interface Pessoa {
	idade: number;
}

export const pessoa: Pessoa = {
	email: 'erik',
	idade: 3,
};
