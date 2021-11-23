// Neste exemplo, quando criamos um tipo, e neste tipo definimos seus valores, não podemos alterar tais informações
// Apenas, se alterarmos diretamente as propriedades, conforme exemplo abaixo

//Criação do tipo
type Ponto = {
    x: number,
    y: number
}

// constante do tipo Ponto informando o valor das propriedades
const ponto: Ponto = {
    x: 0,
    y: 0
}

// a constante se eu redeclarar com outros valores, da erro
ponto = {
    x: 1,
    y: 1
}

// mas se eu alterar a propriedade das contas, nao da erro
ponto.x = 1
ponto.y = 1

/***************************/

// SE QUISERMOS IMPEDIR QUE AS PROPRIEDADES DA CONSTANTES SEJA ALTERADAS, USAMOS O: READONLY, conforme exemplo abaixo

type Ponto2 = {
    readonly x: number
    readonly x: number
}

const ponto2: Ponto2 = {
    x: 0,
    y: 0
}

ponto2 = {
    x: 1,
    y: 1
}

// vai ocorrer erros AQUI
ponto2.x = 1
ponto2.y = 1


/***************************//***************************//***************************//***************************//***************************/

//OUTRO EXEMPLO

class Animal {
    public readonly nome: string

    constructor(nome: string) {
        this.nome = nome
    }
}
const ovelha = new Animal('ovelha')
// assim eu consigo alterar o valor, mas se eu colocar readonly na frente do nome, vai dar erro
ovelha.nome = 'Lobo'