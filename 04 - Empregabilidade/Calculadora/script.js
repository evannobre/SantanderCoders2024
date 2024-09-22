const operacao = prompt("Digite o número da operação escolhida: \n1 - Adição\n2 - Subtração\n3 - Multiplicação\n4 - Divisão");
const numeroA = prompt("Digite um número: \nPara decimais, use '.' ao invés de vírgula");
const numeroB = prompt("Digite outro número: \nPara decimais, use '.' ao invés de vírgula");

const somarNumeros = (a, b) => a + b;
const subtrairNumeros = (a, b) => a - b;
const multiplicarNumeros = (a, b) => a * b;
const dividirNumeros = (a, b) => a / b;

switch(operacao) {
    case '1':
        return somarNumeros(numeroA, numeroB);
    case '2':
        return subtrairNumeros(numeroA, numeroB);
    case '3':
        return multiplicarNumeros(numeroA, numeroB);
    case '4':
        return dividirNumeros(numeroA, numeroB);
}