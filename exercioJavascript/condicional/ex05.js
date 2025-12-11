// Exercício 5: Verificação de números em ordem crescente
// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
// crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou
// não.


let primeiroNumero = parseInt(prompt("Digite o primeiro número: "));
let segundoNumero = parseInt(prompt("Digite o segundo número: "));
let terceiroNumero = parseInt(prompt("Digite o terceiro número: "));

// 1 2 3 -  crescente
//Utilizamos o IF toda vez que precisamos conferir algo
if (primeiroNumero < segundoNumero && segundoNumero < terceiroNumero) {
    //Só entra neste bloco se for verdadeiro
    alert("Está em ordem crescente.");
    
}

//3 2 1
//verificar o decrescente
if (primeiroNumero > segundoNumero && segundoNumero > terceiroNumero) {
    alert("Está em ordem decrescente")
    
}

//verificar o aleatoria
else{
    alert("Os números estão em ordem aleatória.")
}