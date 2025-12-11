//COMO APRESENTAR UMA MENSSAGEM NA TELA

// Exibe uma janela de alerta com a mensagem "Ola Turma do Borges". 
// window.alert("Ola Turma do Borges")  

// Exibe uma janela com OK/Cancelar perguntando "O Jonas vai Casar!". 
// window.confirm("O Jonas vai Casar!")  

// Exibe uma caixa pedindo que o usuário digite algo. 
// window.prompt("Qual o seu nome?")  

// Exemplos de comentários em JavaScript.
//Comentario em linha  
/*  
Comentario em texto  
*/

// console.log("Multimidia")  
// Exibe no console do navegador a palavra "Multimidia".

// let nome = prompt("Informe o seu nome: ")  
// Abre uma caixa para o usuário digitar o nome e guarda o texto digitado na variável 'nome'.

// console.log("Bem vindo! " + nome)  
// Exibe no console "Bem vindo!" seguido do nome digitado pelo usuário.

// let numero1 = prompt("Digite o primeiro número: ") 
// Pede ao usuário um número, mas o valor é armazenado como TEXTO (string).

// let numero2 = prompt("Digite o segundo número: ") 
// Pede o segundo número, também armazenado como texto.

// let resultado = numero1 + numero2 
// Aqui ocorre *concatenação*, não soma. Ex.: "2" + "3" = "23".


// let numero1 = Number.parseInt(prompt("Digite o primeiro número: ")) 
// Converte o valor digitado para INTEIRO (parseInt).

// let numero2 = Number.parseInt(prompt("Digite o segundo número: ")) 
// Converte o segundo valor para inteiro.

// let resultado = numero1 + numero2 
// Agora sim: soma entre inteiros.



// let numero1 = Number.parseFloat(prompt("Digite o primeiro número: ")) 
// Converte o valor digitado para número REAL (com casas decimais).

// let numero2 = Number.parseFloat(prompt("Digite o segundo número: ")) 
// Converte o segundo valor para real.

// let resultado = numero1 + numero2 
// Soma entre números reais.

// console.log(resultado) 
// Exibe o resultado da última soma no console.

let idade = window.prompt("Qual sua idade?")

if (idade >= 18) {
    console.log("Maior de Idade! Da-lheee")
} else {
    console.log("Você é menor de idade!")
}

switch (idade) {
    case "18":
        console.log("Maior de Idade!")
        break;

    case "27":
        console.log("Esta perto do 30!")
        break;

    default:
        console.log("Nada a dizer")
        break;
}