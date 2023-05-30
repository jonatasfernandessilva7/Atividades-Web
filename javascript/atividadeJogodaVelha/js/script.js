let botaoIniciarJogo = document.getElementById('jogar');
let papel = document.getElementById('papel');
let pedra = document.getElementById('pedra');
let tesoura = document.getElementById('tesoura');


papel.addEventListener('click', () => {
    pedra.hidden = true;
    tesoura.hidden = true;
});

pedra.addEventListener('click', () => {
    papel.hidden = true;
    tesoura.hidden = true;
});

tesoura.addEventListener('click', () => {
    pedra.hidden = true;
    papel.hidden = true;
});

botaoIniciarJogo.addEventListener('click', () => {

    if (!papel.hidden) {
        sucesso();
    } else if (!pedra.hidden) {
        sucesso();
    } else if (!tesoura.hidden) {
        sucesso();
    }

    if(!pedra.hidden && !papel.hidden && !tesoura.hidden){
        erro();
    }
});

function erro() {
    let msg = document.getElementById('msg');
    msg.innerHTML = "<strong class='bg-danger'>você não escolheu nada, escolha novamente</strong>";
}

function sucesso() {
    let msg = document.getElementById('msg');
    msg.innerHTML = "<strong class='bg-success'>escolha feita com sucesso</strong>";
}