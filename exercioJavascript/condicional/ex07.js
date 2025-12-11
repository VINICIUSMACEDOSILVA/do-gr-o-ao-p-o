// Exercício 7: Cálculo de desconto progressivo
// Imagine uma loja de roupas que dê um desconto ao cliente, dependendo do valor que ele
// pague. Faça um programa para loja, que solicite o valor total da compra ao usuário e assim,
// aplique um desconto de acordo com o valor total da compra. Siga a tabela:
// Valor total da compra até R$ 100,00: sem desconto.
// Valor total da compra de R$ 100,01 a R$ 200,00: desconto de 10%.
// Valor total da compra acima de R$ 200,00: desconto de 20%.
// Exiba o valor final da compra com o desconto aplicado.


let valorTotalCompra = parseFloat(prompt("Digite o valor total da compra 💵:"));

let desconto;

if (valorTotalCompra <= 100) {
    desconto = 0;
}
// else if(valorTotalCompra > 100 && valorTotalCompra <= 200)
else if(valorTotalCompra <= 200)
{
    //desconto = 10/100;
    desconto = 0.1;
}

else{
    //desconto = 20/100;
    desconto = 0.2;
}

let valorFinal = valorTotalCompra - (valorTotalCompra*desconto);

alert(valorFinal);