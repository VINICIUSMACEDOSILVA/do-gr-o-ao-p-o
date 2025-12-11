function cumprimento(){
    let NomePessoa = prompt("digite seu nome")

let HoraAtual = new Date().getHours()

if(HoraAtual> 6 && HoraAtual < 13){
    alert("Bom dia!")
} else if(HoraAtual >= 13 && HoraAtual < 18){
    alert("Boa tarde!")
} else{
    alert("Boa noite")
}

}
cumprimento()

let pessoal = {
    nome: "Artur",
    idade: 90,
    sobrenome: "Fantine",
    estado: "SP",
    Cidade: "scs" 
}

console.log(pessoal.nome)
console.log(pessoal.idade)
