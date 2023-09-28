function comparar(){
    let nuA = document.querySelector('input#numeroA');
    var numeroA = Number(nuA.value);
    let nuB = document.querySelector('input#numeroB');
    var numeroB = Number(nuB.value);
    let mensagem = document.querySelector('div#mensagem');
    let mensagemPositiva = (`Fomulário Valido valor ${numeroB} maior que ${numeroA}.`);
    let mensagemNegativa = (`Fomulário Invalido valor ${numeroA} maior que ${numeroB}.`);

    if (numeroA > numeroB) {
        alert(mensagemNegativa)
    } else {
        alert(mensagemPositiva)
    }
}