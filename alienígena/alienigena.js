class alienigena {
    constructor(nome, raca, idade){
        this.nome = nome;
        this.raca = raca;
        this.idade = idade;
    }
    fazerCometario(){
        alert(`${this.nome} porque tá pergutando meu nome estranho.`);
    }
}
    class Alienigena extends alienigena {
        constructor(nome, raca) {
            super(nome); 
            this.raca = raca;
        }
        Responde() {
            alert(`${this.nome} (${this.raca}) Responde: curiosidade`);
          }
    }
    
let nome = prompt("Qual seu nome? ")
let raca = prompt("Qual sua raca? ")
let idade = prompt("Qual sua idade? ")
const soualienigena = new alienigena(nome,raca,idade);
alert(soualienigena.nome + "\n" + soualienigena.raca + "\n" + soualienigena.idade);

soualienigena.fazerCometario(); 
souAlienigena.Responde();