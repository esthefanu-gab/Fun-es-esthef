const caixaprincipal = document.queryselector(".caixa-principal");
const caixaperguntas = document.queryselector(".caixa-perguntas"); 
const caixaalternativas = document.queryselector(".caixa-alternativas");
const caixaresultado = document.queryselector(".caixa-resultado");
const textoresultado = document.queryselector(".texto-resultado");

const perguntas = [
    {
    enunciado: "Qual é a principal função da química no tratamento da água?",
    alternativas: [
        "Remover impurezas e microrganismos.", 
        "Aumentar a quantidade de sujeira na água."
    ] 
},
{
    enunciado: "Qual produto pode ser usado para desinfetar a água?",
    alternativas: [
        "Cloro.", 
        "Óleo."
    ] 
},
{
    enunciado: "A coagulação no tratamento da água serve para:",
    alternativas: [
        "Juntar partículas pequenas para facilitar sua remoção.", 
        "Adicionar mais partículas à água."
    ] 
},
{
    enunciado: "Por que a água precisa ser filtrada?",
    alternativas: [
        "Para retirar partículas e impurezas.", 
        "Para deixá-la mais salgada."
    ] 
},
{
    enunciado: "O tratamento da água é importante porque:",
    alternativas: [
        "Ajuda a tornar a água adequada para o consumo.", 
        "Aumenta a quantidade de microrganismos presentes na água."
    ] 
}
];