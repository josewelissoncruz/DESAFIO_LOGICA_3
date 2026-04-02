// Variaveis//

let dadosDoHeroi = {
    name: "",       //Digite o nome do Heroi
    idade: 0 ,       //Digite a idade do Heroi
    tipo: ""        //Digite o tipo do Heroi escolhendo entre mago, guerreiro, monge e nija
};

class Heroi{
    constructor(name, idade, tipo){
        this.name = name;
        this.idade = idade;
        this.tipo = tipo;
    }

atacar() {
    let ataque = "";

    // Estrutura de  decisão //

    if (this.tipo === "mago"){
        ataque = "magia";
    }else if(this.tipo === "guerreiro" ){
        ataque = "espada";
    }else if(this.tipo === "monge" ){
        ataque = "artes marcias";
    }else if(this.tipo === "ninja" ){
        ataque = "shuriken";
    }

    //saída

    console.log (`O ${this.tipo} atacou usando ${ataque}`)
    }
}


let heroi = new Heroi(dadosDoHeroi.name, dadosDoHeroi.idade, dadosDoHeroi.tipo);

heroi.atacar()

