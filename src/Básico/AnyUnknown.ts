// tipos universais que aceitam qualquer tipo de valor

let exemploAny: any; // da mais liberdade para acessar propriedades ou métodos
let exemploUnknown: unknown; // mais restrito, oferece segurança maior, se acessar um método sem verificar o tipo, vai dar erro

//any
exemploAny = 123;
exemploUnknown = 'Olá';

//unknown
exemploAny = 123;
exemploUnknown = 'Mundo!';

//any
exemploAny.permite.qualquercoisa.imagine();
let anySetBool: boolean = exemploAny;

//unknown com erro
//exemploUnknown.trim();
//let unknownSetBool: boolean = exemploUnknown;

//unknown sem erro
//verificar antes o tipo da variável
if (typeof exemploUnknown == 'string') {
	exemploUnknown.trim();
}

//unknown sem erro
//verificar antes o tipo da variável
if (typeof exemploUnknown == 'boolean') {
	let unknownSetBool: boolean = exemploUnknown;
}
