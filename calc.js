const display = document.querySelector('#displayInput');
const botaoIgual = document.querySelector('.igual');
const botaoPonto = document.querySelector('.ponto');
const botoesNum = document.querySelectorAll('.num');
const botoesOper = document.querySelectorAll('.operador');

let operaçaoAtual = "";
let operador = null;
let valorAnterior = "";
let calculando = false;


function atualizaDisplay() {
    display.value = operaçaoAtual;
}

function insereNumero(evento) {
    if (calculando) {
        operaçaoAtual = evento.target.textContent;
        calculando = false;
    } else {
        operaçaoAtual += evento.target.textContent;
    }

    atualizaDisplay();

}

function colocaPonto() {
    if (operaçaoAtual.indexOf('.') === -1) {
        operaçaoAtual += '.';
        atualizaDisplay();
    }
}

function colocaoperaçao(evento) {

    if (operaçaoAtual !== "") {

    }
}
function colocaoperaçao(evento) {

    if (operaçaoAtual !== "") {
        if (!calculando) {
            if (operador !== null) {
                calcula();
            }
            valorAnterior = operaçaoAtual
            operaçaoAtual = ""
        }
        operador = evento.target.textContent

    }

}
function calcula() {
    let resultado = null;
    const operandoAnterior = parseFloat(valorAnterior);
    const operandoAtual = parseFloat(operaçaoAtual);


    switch (operador) {
        case "+":
            resultado = operandoAnterior + operandoAtual;
            break;
        case "-":
            resultado = operandoAnterior - operandoAtual;
            break;
        case "*":
            resultado = operandoAnterior * operandoAtual;
            break;
        case "/":
            resultado = operandoAnterior / operandoAtual;
            break;

    }
    operaçaoAtual = String(resultado);
    valorAnterior = operaçaoAtual;
    calculando = true;
    atualizaDisplay();
}

botoesNum.forEach((botao) => botao.addEventListener("click", insereNumero));
botoesOper.forEach((botao) => botao.addEventListener("click", colocaoperaçao));
botaoPonto.addEventListener("click", colocaPonto);
botaoIgual.addEventListener("click", calcula);