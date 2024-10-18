const quadro = document.querySelectorAll (".quadro")
const titulo = document.querySelectorAll (".titulo")
const pergunta = document.querySelectorAll (".pergunta")
const alternativas = document.querySelectorAll (".alternativas")

const perguntas = [
    {
        enunciado: "Pergunta 1",
        alternativas: [
            {
                texto: "Alternativa 1",
                afirmacao: "afirmação"
            },
            {
                texto: "Alternativa 2",
                afirmacao: "afirmação"
            }
            
        ]
    },
    {
        enunciado: "Pergunta 2",
        alternativas: [
            {
                texto: "Alternativa 1",
                afirmacao: "afirmação"
            },
            {
                texto: "Alternativa 2",
                afirmacao: "afirmação"
            }
            
        ]
    },
    {
        enunciado: "Pergunta 3",
        alternativas: [
            {
                texto: "Alternativa 1",
                afirmacao: "afirmação"
            },
            {
                texto: "Alternativa 2",
                afirmacao: "afirmação"
            }
            
        ]
    },
    {
        enunciado: "Pergunta 4",
        alternativas: [
            {
                texto: "Alternativa 1",
                afirmacao: "afirmação"
            },
            {
                texto: "Alternativa 2",
                afirmacao: "afirmação"
            }
            
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    pergunta.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativas of perguntaAtual.alternativas) {
        const botaoAlternativas = document. createElement("button");
        botaoAlternativas.textContent = alternativas.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativas));
        alternativas.appendchild(botaoAlternativas);
    }
}
function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal = afirmacoes;
    atual++;
    mostraPergunta();
}

mostraPergunta();

