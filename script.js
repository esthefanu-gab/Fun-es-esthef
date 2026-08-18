const caixaprincipal = document.queryselector(".caixa-principal");
const caixaperguntas = document.queryselector(".caixa-perguntas"); 
const caixaalternativas = document.queryselector(".caixa-alternativas");
const caixaresultado = document.queryselector(".caixa-resultado");
const textoresultado = document.queryselector(".texto-resultado");

const perguntas = [
    {
    enunciado: "Qual é a principal função da química no tratamento da água?",
    alternativas: [
        {
          texto: "Remover impurezas e microrganismos.", 
          afirmacao: "afirmacao" 
        },
    {
        texto:"Aumentar a quantidade de sujeira na água."
        afirmacao: "afirmacao"
    }
 ] 
},
{
    enunciado: "Qual produto pode ser usado para desinfetar a água?",
    alternativas: [
    {
        texto: "Cloro.", 
        afirmacao: "afirmacao"
    },
    {
        texto:"Óleo."
        afirmacao: "afirmacao"
    }
 ] 
},
{
    enunciado: "A coagulação no tratamento da água serve para:",
    alternativas: [
        {
            texto:"Juntar partículas pequenas para facilitar sua remoção.", 
            afirmacao: "afirmacao"
        },
        {
            texto: "Adicionar mais partículas à água."
            afirmacao: "afirmacao"
        }
 ] 
},
{
    enunciado: "Por que a água precisa ser filtrada?",
    alternativas: [
        {
            texto:"Para retirar partículas e impurezas.", 
            afirmacao: "afirmacao"
        },
        {
            texto:"Para deixá-la mais salgada."
            afirmacao: "afirmacao"
        }
 ] 
},
{
    enunciado: "O tratamento da água é importante porque:",
    alternativas: [
        {
            texto:"Ajuda a tornar a água adequada para o consumo.", 
            afirmacao: "afirmacao"
        },
        {
            texto:"Aumenta a quantidade de microrganismos presentes na água."
            afirmacao: "afirmacao"
        }
 ] 
}
];

let atual = 0;
let perguntaAtual;

function mostrapergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textcontent = perguntaAtual.enunciado;
}

mostraPergunta();
