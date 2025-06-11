document.getElementById('form-calculo').addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById('calcularbt').click();
    }
});

function calcular(){
    var lambda = parseFloat(document.getElementById('lambda').value);
    var valorK = document.getElementById('k').value;

    if(isNaN(lambda)){
        document.getElementById('alerta').innerHTML = "Valor de <strong>&lambda;</strong> está vazio! Por favor, reescreva!";
        document.getElementById('alerta').style.display = 'block';
        document.getElementsByClassName('titulo')[0].style.marginBottom = '27px';
        document.getElementById('resultado').value = "";
        return;
    }else{
        if(lambda < 0){
            document.getElementById('alerta').innerHTML = "Valor de <strong>&lambda;</strong> inválido! Por favor, reescreva!";
            document.getElementById('alerta').style.display = 'block';
            document.getElementsByClassName('titulo')[0].style.marginBottom = '27px';
            document.getElementById('resultado').value = "";
            return;
        }else{
            document.getElementById('alerta').style.display = 'none';
            document.getElementsByClassName('titulo')[0].style.marginBottom = '100px';
        }
    }

    if(valorK.length === 0){
        document.getElementById('alerta').innerHTML = "Valor de <strong>k</strong> está vazio! Por favor, reescreva!";
        document.getElementById('alerta').style.display = 'block';
        document.getElementsByClassName('titulo')[0].style.marginBottom = '27px';
        document.getElementById('resultado').value = "";
        return;
    }else{
        valorK = valorK.split(',').map(Number);
        if(valorK.some(isNaN) || valorK.some(k => k < 0) || valorK.some(k => !Number.isInteger(k))){
            document.getElementById('alerta').innerHTML = "Valor de <strong>k</strong> inválido! Por favor, reescreva!";
            document.getElementById('alerta').style.display = 'block';
            document.getElementsByClassName('titulo')[0].style.marginBottom = '27px';
            document.getElementById('resultado').value = "";
            return;
        }else{
            document.getElementById('alerta').style.display = 'none';
            document.getElementsByClassName('titulo')[0].style.marginBottom = '100px';
        }
    }

    let poissonFinal = 0;
    valorK.forEach( k => {
        const poisson = (Math.pow(lambda, k)*Math.pow(Math.E, -lambda))/fatorial(k);
        poissonFinal+=poisson;
    });
    let porcentagem=poissonFinal*100;
    document.getElementById('resultado').value = porcentagem.toFixed(2)+"%";
}

function fatorial(n){
    if (n === 0 || n === 1) return 1;
    let kfinal = 1;
    for (let i = 2; i <= n; i++){
        kfinal *= i;
    }
    return kfinal;
}

