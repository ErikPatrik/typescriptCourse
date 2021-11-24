// Interface
// Não podemos separar em tipos separados, não podemos desmembrar em outros tipos
// Mas, podemos fazer merge de propriedades de forma automática
// Além disso, a sintaxe é mais próxima da orientação objeto
export interface inputProps {
	tipo: 'text' | 'email';
	valor: string;
	onChange: (novoValor: string) => void;
	// funcao que recebe um valor e não retorna nada
}

export interface inputProps {
	size: number;
}

export interface ChildreninputProps extends InputPros {
	height: number;
}

/* ------------------------------------------------------------------------- */
// AliasType
// Podemos desmembrar com mais facilidade
type functionOnChange = (novoValor: string) => void;

type inputValor = string;

type inputType = 'text' | 'email';

export type inputProps = {
	tipo: inputType;
	valor: inputValor;
	onChange: functionOnChange;
};
