let resultado = document.getElementById("resultado");
let jogarNovamente = document.getElementById("jogarDeNovo");

const jogadasPlayer = [
    papel = document.getElementById('papel'),
    pedra = document.getElementById('pedra'),
    tesoura = document.getElementById('tesoura')
]

const imagensDaIA = [
    "<img src='./img/papel.png'>",
    "<img src='./img/tesoura.png'>",
    "<img src='./img/pedra.png'>"
];

const ramdonImages = Math.floor(Math.random() * imagensDaIA.length);

function sucesso() {
    let msg = document.getElementById('msg');
    msg.innerHTML = "<strong class='bg-success'>escolha feita com sucesso</strong>";


    var imagens = imagensDaIA[ramdonImages];
    let escolha = document.getElementById('escolhaDaIA');
    escolha.innerHTML = ' A ia escolheu: ' + imagens;

}

function verificaResultado(empate, derrota){
    if (ramdonImages == empate){
        resultado.innerHTML = "<strong class='bg-warning'>EMPATE</strong>"
    }else if(ramdonImages == derrota) {
        resultado.innerHTML = "<strong class='bg-danger'>DERROTA</strong>"
    }else{
        resultado.innerHTML = "<strong class='bg-success'>VITORIA</strong>"
    }
}

function reiniciar() {
    window.location.href = 'PedraPapelTesoura.html';
}

papel.addEventListener('click', () => {
    pedra.hidden = true;
    tesoura.hidden = true;
    sucesso();
    verificaResultado(0,1);
});

pedra.addEventListener('click', () => {
    papel.hidden = true;
    tesoura.hidden = true;
    sucesso();
    verificaResultado(2,0);
});

tesoura.addEventListener('click', () => {
    pedra.hidden = true;
    papel.hidden = true;
    sucesso();
    verificaResultado(1,2);
});

jogarNovamente.addEventListener("click", () => {
    reiniciar();
});