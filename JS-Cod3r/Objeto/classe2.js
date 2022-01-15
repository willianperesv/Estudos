class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {   // "extends" determina que a classe tem como prototipo outra funcao no caso avo
    constructor(sobrenome, profissao ='PRofessor'){
    super(sobrenome) // chama o super construtor "avo" ele o atributo desejado
    this.profissao = profissao
 }
}

class Filho extends Pai{ //filho extends pai e pai extends avo
    constructor(){
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)