

function login() {
    let login = prompt("Digite o seu usuário: ")

    let senha = prompt("Digite a sua senha: ")

    if (login == "admin" && senha == "senha123") {
        console.log("Login bem sucedido!")
    }
    else {
        console.log("Você não tem permissão de acesso!")
    }
}

function sair() {
    let sair = prompt("Voce saiu!")
}

function Exercicioimc() {
    let peso = parseFloat(prompt("Informe seu peso (em Kg): "))
    let altura = parseFloat(prompt("Informe a sua altura (em metros): "))

    let imc = peso / (altura * altura)

    console.log("Seu IMC é: " + imc.toFixed(2))

    if (imc < 18.5) {
        console.log("Abaixo do peso")
    }
    else if (imc >= 18.5 && imc <= 24.9) {
        console.log("Peso Normal")
    }
    else if (imc >= 25 && imc <= 29.9) {
        console.log("Sobrepeso")
    }
    else if (imc >= 30 && imc <= 34.9) {
        console.log("Obesidade grau 1")
    }
    else if (imc >= 35 && imc <= 39.9) {
        console.log("Obesidade grau 2")
    }
    else {
        console.log("Obesidade grau 3")
    }

}

function imparoupar() {
    let numero = parseInt(prompt("Informe um número inteiro: "))

    if (numero % 2 == 0) {
        console.log("O Número é Par")
    } else {
        console.log("O Número é Impar")
    }
}

function notasdealuno() {
    alert("Informe ás notas de 0 a 10")
    let nota1 = parseFloat(prompt("Informe a primeira nota: "))
    let nota2 = parseFloat(prompt("Informe a segunda nota: "))
    let nota3 = parseFloat(prompt("Informe a terceira nota: "))
    let nota4 = parseFloat(prompt("Informe a quarta nota: "))

    let media = (nota1 + nota2 + nota3 + nota4) / 4

    console.log("A média do aluno é: " + media)

    if (media >= 7) {
        console.log("APROVADO")
    }
    else if (media < 7 && media >= 5) {
        console.log("Recuperação")
    }
    else {
        console.log("Reprovado ;-;")
    }
}

function ordemcrescentedecrescente() {
    let numero01 = parseInt(prompt("Digite o primeiro número: "))
    let numero02 = parseInt(prompt("Digite o segundo número: "))
    let numero03 = parseInt(prompt("Digite o terceiro número: "))

    if (numero01 < numero02 && numero02 < numero03) {
        console.log("Os números estão em ordem crescente!")
    }
    else {
        console.log("Os números Não estão em ordem crescente!")
    }
}

function datadenascimento() {
    let anoNascimento = parseInt(prompt("Digite o ano de nascimento: "))

    let anoAtual = new Date().getFullYear()

    let idade = anoAtual - anoNascimento

    if (idade >= 18) {
        console.log("Maior de idade")
        console.log("Sua idade é " + idade)
    }
    else {
        console.log("Menor de idade")
        console.log("Sua idade é: " + idade)
    }
}

function descontototal() {
    let valorTotal = parseFloat(prompt("Informe o valor total da compra: "))

    let desconto

    if (valorTotal <= 100) {
        desconto = 0
        console.log("O valor de desconto foi: " + desconto)
    }
    else if (valorTotal <= 200) {
        desconto = 0.1
        console.log("O valor de desconto foi: " + (desconto * 100) + "%")
    }
    else {
        desconto = 0.2
        console.log("O valor de desconto foi: " + (desconto * 100) + "%")
    }

    let valorFinal = valorTotal - (valorTotal * desconto)

    console.log("O valor final da compra com o desconto: R$" +
        valorFinal.toFixed(2))
}

let numero

do {
    numero = parseInt(prompt(`
        ==========MENU DE EXERCICIOS: ==========
        
        0 - SAIR
        1 - LOGIN
        2 - ORDEM CRESCENTE E DECRESCENTE 
        3 - PAR OU IMPAR
        4 - IMC
        5 - MEDIA ALUNO
        6 - CALCULAR IDADE
        7 - DESCONTO DO VALOR TOTAL
        `))



    switch (numero) {


        case 0:
            sair()
            break;

        case 1:
            login()
            break;

        case 2:
            ordemcrescentedecrescente()
            break;

        case 3:
            imparoupar()
            break;

        case 4:
            Exercicioimc()
            break;

        case 5:
            notasdealuno()
            break;

        case 6:
            datadenascimento()
            break;

        case 7:
            descontototal()
            break;


        default:
            console.log("O número informado não é valido")
            break;
    }

} while (numero !== 0)

console.log("voce saiu do exercicio!")
