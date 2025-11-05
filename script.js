const numero = document.querySelector("input#nota");

function verificar(){
    conceito();
    estado();
}

function conceito(){
    const nota = parseFloat(numero.value);
    const conceito = document.querySelector("p#conceito");
    
    conceito.innerHTML = '';
    
    
    switch(true){
        case (nota >= 9 && nota <= 10):
            letra = 'A'
            break;
        case (nota >= 7 && nota <=8.9):
            letra = 'B';
            break;
        case (nota >= 5 && nota <=6.9):
            letra = 'C';
            break;
        case (nota >= 3 && nota <=4.9):
            letra = 'D';
            break;
        case (nota >= 0 && nota <=2.9):
            letra = 'F';
            break;
        default:
            alert('[ERRO] nota não foi aceita tente novamente');
            return;
    }

    conceito.innerHTML = letra;
    return letra;
}

function estado(){
    const status = document.querySelector("p#status");
    const letra = conceito();
    status.innerHTML = '';
    switch(letra){
        case 'A':
            status.innerHTML += 'Aprovado - Excelente!';
            break;
        case 'B':
            status.innerHTML += 'Aprovado - Bom!';
            break;
        case 'C':
            status.innerHTML += 'Aprovado - Regular!';
            break;
        case 'D':
            status.innerHTML += 'Aprovado com Depêndencia';
            break;
        case 'F':
            status.innerHTML += 'Reprovado';
            break;
    }
}

function limpar(){
    const meuInput = document.querySelector('input#nota');
    meuInput.value = '';
}