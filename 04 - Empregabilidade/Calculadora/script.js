const operacao = prompt("Digite o número da operação escolhida: \n1 - Adição\n2 - Subtração\n3 - Multiplicação\n4 - Divisão");
const numeroA = parseFloat(prompt("Digite um número: \nPara decimais, use '.' ao invés de vírgula"));
const numeroB = parseFloat(prompt("Digite outro número: \nPara decimais, use '.' ao invés de vírgula"));

const somarNumeros = (a, b) => a + b;
const subtrairNumeros = (a, b) => a - b;
const multiplicarNumeros = (a, b) => a * b;
const dividirNumeros = (a, b) => a / b;

switch(operacao) {
    case "1":
        alert("O resultado é: " + somarNumeros(numeroA, numeroB));
        break;
    case "2":
        alert("O resultado é: " + subtrairNumeros(numeroA, numeroB));
        break;
    case "3":
        alert("O resultado é: " + multiplicarNumeros(numeroA, numeroB));
        break;
    case "4":
        alert("O resultado é: " + dividirNumeros(numeroA, numeroB));
        break;
    default:
        alert("Operação inválida!")
}