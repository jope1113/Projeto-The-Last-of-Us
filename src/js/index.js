/*
OBJETIVO - Quando clicarmos no botão temos que mostrar a imagem de fundo correspondente

PASSO 1 - Dar um jeito de pegar o elemento HTML dos botôes;
PASSO 2 - Dar um jeito de identificar o clique do usuário na tela;
PASSO 3 - Desmarcar o botão selecionado anterior;
PASSO 4 - Marcar o botão clicado como se estivesse selecionado;
PASSO 5 - Esconder a imagem anterior;
PASSO 6 - Fazer aparecer a imagem correspondente ao botão clicado.
*/ 

// PASSO 1 - Dar um jeito de pegar o elemento HTML dos botôes;

const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// PASSO 2 - Dar um jeito de identificar o clique do usuário na tela;

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        // PASSO 3 - Desmarcar o botão selecionado anterior;

        desativarBotaoSelecionado();

        // PASSO 4 - Marcar o botão clicado como se estivesse selecionado;

        selecionarBotaoCarrossel(botao);

        // PASSO 5 - Esconder a imagem anterior;

        esconderImagemAtiva();

        // PASSO 6 - Fazer aparecer a imagem correspondente ao botão clicado.

        mostrarImagemFundo(indice);
    })
})

function mostrarImagemFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
