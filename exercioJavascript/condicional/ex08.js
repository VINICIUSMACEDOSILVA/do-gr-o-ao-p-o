// Exercício 8: Cálculo de IMC
// Escreva um programa que solicita ao usuário seu peso em quilogramas e sua altura em metros.
// Em seguida, calcule o Índice de Massa Corporal (IMC) utilizando a fórmula: IMC = peso / (altura
// * altura). Com base no resultado, exiba uma mensagem indicando a faixa de peso em que o
// usuário se encontra, de acordo com a tabela a seguir:
// IMC menor que 18.5: Abaixo do peso ✅
// IMC de 18.5 a 24.9: Peso normal ✅
// IMC de 25.0 a 29.9: Sobrepeso ✅
// IMC de 30.0 a 34.9: Obesidade grau 1 ✅
// IMC de 35.0 a 39.9: Obesidade grau 2 ✅
// IMC maior ou igual a 40.0: Obesidade grau 3 ✅

let pesoDigitado = parseFloat(prompt("Digite seu peso em quilograma: "));
let alturaDigitado = parseFloat(prompt("Digite sua altura: "));

let IMC = pesoDigitado / (alturaDigitado * alturaDigitado);

if (IMC < 18.5) {
    alert("Abaixo do peso");
}
else if(IMC >= 18.5 && IMC <= 24.9){
    alert("Peso normal");
}
else if(IMC >= 25 && IMC <= 29.9){
    alert("Sobrepeso");
}
else if(IMC >= 30.0 && IMC <= 34.9){
    alert("Obesidade grau 1");
}
else if(IMC >= 35.0 && IMC <= 39.9){
    alert("Obesidade grau 2");
}
else{
    alert("Obesidade grau 3. Se cuide por favor, sua vida está em risco 🙏🥺");
}