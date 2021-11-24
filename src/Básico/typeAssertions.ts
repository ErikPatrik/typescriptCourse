//Aqui pedimos confiança ao TS informando que aquela variável tem determinado tipo

//Exemplo com erro
let hello: unknown;
//let trimmed0 = hello.trim();

//Exemplo com verificação (forma correta)

if (typeof hello === 'string') {
	const trimmed = hello.trim();
}

//Exemplo com TypeAssertion
const trimmed2 = (hello as string).trim();

// Outra forma
// mas não funciona com arquivos tsx
const trimmed3 = (<string>hello).trim();
