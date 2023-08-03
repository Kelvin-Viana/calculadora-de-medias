const form = document.getElementById('form')
const imgAprovado = '<img src="images/images/aprovado.png" alt="Emoji Feliz">';
const imgReprovado = '<img src="images/images/reprovado.png" alt="Emoji Triste">';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';

let linhas = ' ';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
    atualizaMedia();
});

function adicionaLinha() {
    const inputnome = document.getElementById('inputnome');
    const inputnota = document.getElementById('inputnota');

    if (atividades.includes(inputnome.value)) {
        alert(`A Atividade ${inputnome.value} já foi registrada! `);
    } else {
    atividades.push(inputnome.value);
    notas.push(parseFloat(inputnota.value));
    let linha = '<tr>';
    linha += `<td>${inputnome.value}</td>`;
    linha += `<td>${inputnota.value}</td>`;
    linha += `<td>${inputnota.value >=7 ? imgAprovado : imgReprovado}</td>`;
    linha += '</tr>';

    linhas += linha; 
    }
    
    form.reset();
}

function atualizaTabela() {
    const corpotabela = document.querySelector('tbody');
    corpotabela.innerHTML = linhas;
}

function atualizaMedia() {
    const mediaFinal = calculaMedia();
    document.getElementById('media-final').innerHTML = mediaFinal;
    document.getElementById('resultado-media').innerHTML = mediaFinal >=7 ? spanAprovado : spanReprovado;


}

function calculaMedia(){
    let somaDasNotas = 0.

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i]; 
    }
    
    return somaDasNotas / notas.length;
}