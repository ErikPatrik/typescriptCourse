class Queu {
    data = []

    //add itens no array
    push(item) {
        this.data.push(item)
    }

    //remove item no array
    pop() {
        return this.data.shift()
    }
}

//criando instancia
const queu = new Queu()
queu.push(123)
queu.push('Olá mundo')