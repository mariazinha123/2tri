const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
    enunciado: "o que a musica traz para as pessoas",
    alternativas: [
        {
texto:"emoçoes e sentimentos",
afirmacao:"você acredita que a musica transmite emoção."
        },
        {
texto:"nada",
afirmacacao: "você não acredita que a música transmite emação."
        }
]
    },
    {
        enunciado: "a musica é uma arte que expressa sentimentos? porque?",
        alternativas: [
            {
    texto:"sim.porque quando ouvismo uma musica agradavel o nosso cerebro tende a liberar a famosa endorfina",
            afirmacao:"Você gosta muito de música e entende sobre o assunto"
},
{
 texto:   "voce fica feliz ouvindo musica",
    afirmacao:"você gosta de música"
}
    ]
        }, {
            enunciado: "a musica na saude mentale fisica e causa impacto",
            alternativas: [
                {
        texto:"negativa",
        afirmaçao:"você não gosta de música"
                },
                {
        texto:"voce se sente uma pessoa positiva ouvindo musica",
        afirmaçao:"você gosta de música"
                }
        ]
            },
   ];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Olha só o que podemos dizer sobre você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
