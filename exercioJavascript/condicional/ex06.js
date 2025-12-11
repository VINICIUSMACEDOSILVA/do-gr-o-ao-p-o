//Exercicio 06
//Escreva um programa que solicite o ano de nascimento de
//uma pessoa e verifica se ela é maior de 
//18 anos. Exiba uma mensagem indentificando se a pessoa
//é maior ou não.

let anoNascimento = parseInt(prompt("Digite o ano de nascimento: "))

//let anoAtual = 2025
let anoAtual = new Date().getFullYear()

let idade = anoAtual - anoNascimento

if(idade >= 18){
    console.log("Maior de idade")
    console.log("Sua idade é " + idade)
}
else{
    console.log("Menor de idade")
    console.log("Sua idade é: " + idade)
}